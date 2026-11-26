<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('anotacoes', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('usuario')->nullable();
            $table->text('senha')->nullable();
            $table->string('link')->nullable();
            $table->string('texto_botao')->nullable()->default('Abrir');
            $table->string('icone')->nullable()->default('heroicon-o-key');
            $table->boolean('ativo')->default(true);
            $table->unsignedInteger('ordem')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('anotacoes');
    }
};
