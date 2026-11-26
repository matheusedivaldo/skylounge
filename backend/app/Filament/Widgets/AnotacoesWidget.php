<?php

namespace App\Filament\Widgets;

use App\Models\Anotacao;
use Filament\Widgets\Widget;
use Illuminate\Database\Eloquent\Collection;

class AnotacoesWidget extends Widget
{
    protected static bool $isDiscovered = false;

    protected static bool $isLazy = false;

    protected static ?int $sort = -2;

    protected int|string|array $columnSpan = 'full';

    protected string $view = 'filament.widgets.anotacoes-widget';

    public function getAnotacoes(): Collection
    {
        return Anotacao::query()
            ->where('ativo', true)
            ->orderBy('ordem')
            ->get();
    }
}
