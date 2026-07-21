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

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('nome')->required()->maxLength(255),
                TextInput::make('ordem')->numeric()->default(0),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('nome')
            ->columns([
                TextColumn::make('nome')->searchable(),
                TextColumn::make('ordem'),
            ])
            ->defaultSort('ordem')
            ->reorderable('ordem')
            ->filters([])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
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
