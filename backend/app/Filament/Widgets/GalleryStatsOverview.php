<?php

namespace App\Filament\Widgets;

use App\Models\GalleryItem;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class GalleryStatsOverview extends StatsOverviewWidget
{
    protected static bool $isDiscovered = false;

    protected static bool $isLazy = false;

    protected int|string|array $columnSpan = 1;

    protected function getColumns(): int|array|null
    {
        return 1;
    }

    protected function getStats(): array
    {
        return [
            Stat::make('Fotos Ativas na Galeria', GalleryItem::where('ativo', true)->count())
                ->description('De um total de ' . GalleryItem::count() . ' fotos cadastradas')
                ->icon('heroicon-o-photo')
                ->color('success'),
        ];
    }
}
