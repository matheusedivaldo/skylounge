<?php

namespace App\Filament\Resources\MenuItems;

use App\Filament\Resources\MenuItems\Pages\ManageMenuItems;
use App\Models\MenuItem;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
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

class MenuItemResource extends Resource
{
    protected static ?string $model = MenuItem::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'titulo';

    protected static \UnitEnum|string|null $navigationGroup = 'Cardápio';

    protected static ?string $modelLabel = 'Item do Cardápio';

    protected static ?string $pluralModelLabel = 'Itens do Cardápio';

    protected static ?string $navigationLabel = 'Itens';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Informações Básicas')
                    ->columns(['default' => 1, 'md' => 12])
                    ->components([
                        TextInput::make('titulo')
                            ->required()
                            ->maxLength(255)
                            ->columnSpanFull(),

                        Select::make('category_id')
                            ->label('Categoria')
                            ->relationship('category', 'nome')
                            ->searchable()
                            ->preload()
                            ->placeholder('Selecione')
                            ->createOptionForm([
                                TextInput::make('nome')->required()->maxLength(255),
                            ])
                            ->required()
                            ->columnSpan(['default' => 12, 'md' => 7]),

                        TextInput::make('preco')
                            ->numeric()
                            ->minValue(0)
                            ->prefix('R$')
                            ->columnSpan(['default' => 12, 'md' => 5]),

                        Toggle::make('exibir_preco')
                            ->label('Exibir preço no site')
                            ->default(true)
                            ->columnSpanFull(),

                        Textarea::make('descricao')
                            ->columnSpanFull(),
                    ]),

                Section::make('Mídia')
                    ->components([
                        FileUpload::make('imagem')
                            ->image()
                            ->disk('public')
                            ->directory('menu-items')
                            ->imagePreviewHeight('150')
                            ->imageEditor()
                            ->maxSize(2048)
                            ->acceptedFileTypes(['image/jpeg', 'image/jpg', 'image/png', 'image/webp']),
                    ]),

                Section::make('Visibilidade')
                    ->columns(['default' => 1, 'sm' => 3])
                    ->components([
                        Toggle::make('ativo')
                            ->default(true)
                            ->inline(false),

                        Toggle::make('destaque')
                            ->helperText('Máximo de 4 itens em destaque na home.')
                            ->inline(false),

                        TextInput::make('ordem')
                            ->numeric()
                            ->default(fn() => (MenuItem::max('ordem') ?? 0) + 1),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('titulo')
            ->columns([
                ImageColumn::make('imagem')
                    ->disk('public')
                    ->height(56)
                    ->width(56)
                    ->extraImgAttributes(['class' => 'object-cover rounded-lg']),
                TextColumn::make('titulo')
                    ->label('Título')
                    ->searchable()
                    ->weight('medium')
                    ->wrap(),
                TextColumn::make('category.nome')
                    ->label('Categoria')
                    ->badge()
                    ->sortable(),
                TextColumn::make('preco')
                    ->label('Preço')
                    ->money('BRL')
                    ->placeholder('—')
                    ->sortable(),
                ToggleColumn::make('ativo')->label('Ativo'),
                ToggleColumn::make('destaque')->label('Destaque'),
            ])
            ->defaultSort('ordem')
            ->reorderable('ordem')
            ->filters([
                SelectFilter::make('category_id')
                    ->label('Categoria')
                    ->relationship('category', 'nome'),
            ])
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
            'index' => ManageMenuItems::route('/'),
        ];
    }
}
