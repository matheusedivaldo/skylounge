<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MenuItem extends Model
{
    protected $fillable = [
        'titulo',
        'category_id',
        'descricao',
        'preco',
        'exibir_preco',
        'imagem',
        'ativo',
        'destaque',
        'ordem',
    ];

    protected function casts(): array
    {
        return [
            'preco' => 'decimal:2',
            'exibir_preco' => 'boolean',
            'ativo' => 'boolean',
            'destaque' => 'boolean',
            'ordem' => 'integer',
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
