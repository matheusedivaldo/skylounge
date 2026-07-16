<?php

namespace App\Filament\Resources\GalleryItems;

use App\Filament\Resources\GalleryItems\Pages\ManageGalleryItems;
use App\Models\GalleryItem;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class GalleryItemResource extends Resource
{
    protected static ?string $model = GalleryItem::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedPhoto;

    protected static ?string $recordTitleAttribute = 'legenda';

    protected static \UnitEnum|string|null $navigationGroup = 'Galeria';

    protected static ?string $modelLabel = 'Foto da Galeria';

    protected static ?string $pluralModelLabel = 'Galeria';

    public const CATEGORIAS = [
        'Ambiente' => 'Ambiente',
        'Drinks' => 'Drinks',
        'Vista' => 'Vista',
        'Eventos' => 'Eventos',
    ];

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Imagem')
                    ->components([
                        FileUpload::make('imagem')
                            ->image()
                            ->disk('public')
                            ->directory('gallery-items')
                            ->imagePreviewHeight('150')
                            ->imageEditor()
                            ->maxSize(2048)
                            ->acceptedFileTypes(['image/jpeg', 'image/jpg', 'image/png', 'image/webp'])
                            ->required(),
                        TextInput::make('legenda')->maxLength(255),
                    ]),
                Section::make('Organização')
                    ->columns(3)
                    ->components([
                        Select::make('categoria')
                            ->options(self::CATEGORIAS),
                        TextInput::make('ordem')->numeric()->default(0),
                        Toggle::make('ativo')->default(true),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('legenda')
            ->columns([
                ImageColumn::make('imagem')->disk('public'),
                TextColumn::make('legenda')->searchable(),
                TextColumn::make('categoria')->badge(),
                IconColumn::make('ativo')->boolean(),
            ])
            ->defaultSort('ordem')
            ->reorderable('ordem')
            ->filters([
                SelectFilter::make('categoria')
                    ->options(self::CATEGORIAS),
            ])
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
            'index' => ManageGalleryItems::route('/'),
        ];
    }
}
