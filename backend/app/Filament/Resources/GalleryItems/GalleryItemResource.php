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
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
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

    protected static ?string $navigationLabel = 'Fotos';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Imagem')
                    ->components([
                        FileUpload::make('imagem')
                            ->label('Imagem')
                            ->image()
                            ->disk('public')
                            ->directory('gallery-items')
                            ->imagePreviewHeight('150')
                            ->imageEditor()
                            ->maxSize(2048)
                            ->acceptedFileTypes([
                                'image/jpeg',
                                'image/jpg',
                                'image/png',
                                'image/webp',
                            ])
                            ->required(),

                        TextInput::make('legenda')
                            ->label('Legenda')
                            ->maxLength(255),
                    ]),

                Section::make('Organização')
                    ->columns(3)
                    ->components([
                        Select::make('gallery_category_id')
                            ->label('Categoria')
                            ->relationship('category', 'nome')
                            ->searchable()
                            ->preload()
                            ->required()
                            ->columnSpan(2),

                        TextInput::make('ordem')
                            ->label('Ordem')
                            ->numeric()
                            ->minValue(1)
                            ->default(fn() => (GalleryItem::max('ordem') ?? 0) + 1)
                            ->columnSpan(1),

                        Toggle::make('ativo')
                            ->label('Ativo')
                            ->default(true)
                            ->columnSpanFull(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('legenda')
            ->columns([
                ImageColumn::make('imagem')
                    ->disk('public')
                    ->height(56)
                    ->width(56)
                    ->extraImgAttributes([
                        'class' => 'object-cover rounded-lg',
                    ]),

                TextColumn::make('legenda')
                    ->label('Legenda')
                    ->searchable()
                    ->weight('medium')
                    ->placeholder('—')
                    ->wrap(),

                TextColumn::make('category.nome')
                    ->label('Categoria')
                    ->badge()
                    ->sortable(),

                TextColumn::make('ordem')
                    ->label('Ordem')
                    ->sortable()
                    ->alignCenter(),

                ToggleColumn::make('ativo')
                    ->label('Ativo'),
            ])
            ->defaultSort('ordem')
            ->reorderable('ordem')
            ->filters([
                SelectFilter::make('gallery_category_id')
                    ->label('Categoria')
                    ->relationship('category', 'nome'),
            ])
            ->recordActions([
                EditAction::make()
                    ->icon(Heroicon::OutlinedPencilSquare),

                DeleteAction::make()
                    ->icon(Heroicon::OutlinedTrash),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make()
                        ->icon(Heroicon::OutlinedTrash),
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
