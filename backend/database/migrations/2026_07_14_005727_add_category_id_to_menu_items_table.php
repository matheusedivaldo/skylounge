<?php

use App\Models\Category;
use App\Models\MenuItem;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('menu_items', function (Blueprint $table) {
            $table->foreignId('category_id')->nullable()->after('categoria')->constrained('categories');
        });

        MenuItem::distinct()->pluck('categoria')->filter()->each(function (string $nome) {
            $category = Category::firstOrCreate(['nome' => $nome]);
            MenuItem::where('categoria', $nome)->update(['category_id' => $category->id]);
        });

        Schema::table('menu_items', function (Blueprint $table) {
            $table->dropColumn('categoria');
        });
    }

    public function down(): void
    {
        Schema::table('menu_items', function (Blueprint $table) {
            $table->string('categoria')->nullable()->after('titulo');
        });

        MenuItem::with('category')->get()->each(function (MenuItem $item) {
            $item->update(['categoria' => $item->category?->nome]);
        });

        Schema::table('menu_items', function (Blueprint $table) {
            $table->dropConstrainedForeignId('category_id');
        });
    }
};
