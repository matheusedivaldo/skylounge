<?php

namespace App\Filament\Resources\GalleryCategories;

use App\Filament\Resources\GalleryCategories\Pages\ManageGalleryCategories;
use App\Models\GalleryCategory;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class GalleryCategoryResource extends Resource
{
    protected static ?string $model = GalleryCategory::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedTag;

    protected static ?string $recordTitleAttribute = 'nome';

    protected static \UnitEnum|string|null $navigationGroup = 'Galeria';

    protected static ?string $modelLabel = 'Categoria da Galeria';

    protected static ?string $pluralModelLabel = 'Categorias da Galeria';

    protected static ?string $navigationLabel = 'Categorias';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('nome')->required()->maxLength(255),
                TextInput::make('ordem')
                    ->numeric()
                    ->default(fn () => (GalleryCategory::max('ordem') ?? 0) + 1),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('nome')
            ->columns([
                TextColumn::make('nome')->searchable()->alignCenter(),
                TextColumn::make('ordem')->alignCenter(),
            ])
            ->defaultSort('ordem')
            ->reorderable('ordem')
            ->filters([])
            ->recordActions([
                EditAction::make()->icon(Heroicon::OutlinedPencilSquare),
                DeleteAction::make()->icon(Heroicon::OutlinedTrash),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make()->icon(Heroicon::OutlinedTrash),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageGalleryCategories::route('/'),
        ];
    }
}
