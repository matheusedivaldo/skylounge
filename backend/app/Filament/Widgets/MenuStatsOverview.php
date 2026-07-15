<?php

namespace App\Filament\Widgets;

use App\Models\Category;
use App\Models\MenuItem;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class MenuStatsOverview extends StatsOverviewWidget
{
    protected static bool $isLazy = false;

    protected function getStats(): array
    {
        return [
            Stat::make('Itens Ativos', MenuItem::where('ativo', true)->count())
                ->icon('heroicon-o-rectangle-stack'),
            Stat::make('Categorias', Category::count())
                ->icon('heroicon-o-tag'),
            Stat::make('Itens em Destaque', MenuItem::where('destaque', true)->count())
                ->description('Máximo de 4 aparecem no preview da home')
                ->icon('heroicon-o-star'),
        ];
    }
}
