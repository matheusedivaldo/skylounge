<?php

namespace App\Filament\Widgets;

use App\Filament\Resources\Anotacoes\AnotacaoResource;
use App\Models\Anotacao;
use Filament\Actions\Action;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Schemas\Concerns\InteractsWithSchemas;
use Filament\Schemas\Contracts\HasSchemas;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\Widget;
use Illuminate\Database\Eloquent\Collection;

class AnotacoesWidget extends Widget implements HasActions, HasSchemas
{
    use InteractsWithActions;
    use InteractsWithSchemas;

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

    public function createAction(): Action
    {
        return CreateAction::make()
            ->label('Nova Anotação')
            ->modalHeading('Nova Anotação')
            ->model(Anotacao::class)
            ->schema(AnotacaoResource::formSchema());
    }

    public function editAction(): Action
    {
        return EditAction::make()
            ->iconButton()
            ->icon(Heroicon::OutlinedPencilSquare)
            ->color('gray')
            ->tooltip('Editar')
            ->modalHeading('Editar Anotação')
            ->record(fn (array $arguments): ?Anotacao => Anotacao::find($arguments['record'] ?? null))
            ->schema(AnotacaoResource::formSchema());
    }

    public function deleteAction(): Action
    {
        return DeleteAction::make()
            ->iconButton()
            ->icon(Heroicon::OutlinedTrash)
            ->color('gray')
            ->tooltip('Excluir')
            ->record(fn (array $arguments): ?Anotacao => Anotacao::find($arguments['record'] ?? null));
    }
}
