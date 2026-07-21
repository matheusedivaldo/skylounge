<?php

use App\Models\GalleryCategory;
use App\Models\GalleryItem;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('gallery_items', function (Blueprint $table) {
            $table->foreignId('gallery_category_id')->nullable()->after('categoria')->constrained('gallery_categories');
        });

        GalleryItem::distinct()->pluck('categoria')->filter()->each(function (string $nome) {
            $category = GalleryCategory::firstOrCreate(['nome' => $nome]);
            GalleryItem::where('categoria', $nome)->update(['gallery_category_id' => $category->id]);
        });

        Schema::table('gallery_items', function (Blueprint $table) {
            $table->dropColumn('categoria');
        });
    }

    public function down(): void
    {
        Schema::table('gallery_items', function (Blueprint $table) {
            $table->string('categoria')->nullable()->after('legenda');
        });

        GalleryItem::with('category')->get()->each(function (GalleryItem $item) {
            $item->update(['categoria' => $item->category?->nome]);
        });

        Schema::table('gallery_items', function (Blueprint $table) {
            $table->dropConstrainedForeignId('gallery_category_id');
        });
    }
};
