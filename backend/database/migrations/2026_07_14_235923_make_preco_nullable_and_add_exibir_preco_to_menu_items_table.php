<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('menu_items', function (Blueprint $table) {
            $table->boolean('exibir_preco')->default(true)->after('preco');
        });

        DB::statement('ALTER TABLE menu_items MODIFY preco DECIMAL(8, 2) NULL');
    }

    public function down(): void
    {
        DB::statement('UPDATE menu_items SET preco = 0 WHERE preco IS NULL');
        DB::statement('ALTER TABLE menu_items MODIFY preco DECIMAL(8, 2) NOT NULL');

        Schema::table('menu_items', function (Blueprint $table) {
            $table->dropColumn('exibir_preco');
        });
    }
};
