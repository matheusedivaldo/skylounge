<?php

namespace App\Filament\Resources\Anotacoes\Pages;

use App\Filament\Resources\Anotacoes\AnotacaoResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;
use Filament\Support\Icons\Heroicon;

class ManageAnotacoes extends ManageRecords
{
    protected static string $resource = AnotacaoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()->label('Nova Anotação')->icon(Heroicon::OutlinedPlus),
        ];
    }
}
