<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Anotacao extends Model
{
    protected $table = 'anotacoes';

    protected $fillable = [
        'titulo',
        'usuario',
        'senha',
        'link',
        'texto_botao',
        'icone',
        'ativo',
        'ordem',
    ];

    protected $casts = [
        'ativo' => 'boolean',
        'senha' => 'encrypted',
    ];
}
