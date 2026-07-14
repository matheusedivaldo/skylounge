<?php

namespace App\Filament\Resources\MenuItems;

use App\Filament\Resources\MenuItems\Pages\ManageMenuItems;
use App\Models\MenuItem;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Infolists\Components\TextEntry;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class MenuItemResource extends Resource
{
    protected static ?string $model = MenuItem::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'titulo';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Informações Básicas')
                    ->columns(2)
                    ->components([
                        TextInput::make('titulo')->required()->maxLength(255)->columnSpanFull(),
                        Select::make('category_id')
                            ->label('Categoria')
                            ->relationship('category', 'nome')
                            ->searchable()
                            ->preload()
                            ->createOptionForm([
                                TextInput::make('nome')->required()->maxLength(255),
                            ])
                            ->required(),
                        TextInput::make('preco')->required()->numeric()->prefix('R$'),
                        Textarea::make('descricao')->columnSpanFull(),
                    ]),
                Section::make('Mídia')
                    ->components([
                        FileUpload::make('imagem')
                            ->image()
                            ->disk('public')
                            ->directory('menu-items')
                            ->imagePreviewHeight('250'),
                    ]),
                Section::make('Visibilidade')
                    ->columns(3)
                    ->components([
                        Toggle::make('ativo')->default(true),
                        Toggle::make('destaque')
                            ->helperText('Máximo de 4 itens em destaque na home.'),
                        TextInput::make('ordem')->numeric()->default(0),
                    ]),
            ]);
    }

    public static function infolist(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('titulo'),
                TextEntry::make('category.nome')->label('Categoria'),
                TextEntry::make('preco')->money('BRL'),
                TextEntry::make('ativo')->badge(),
                TextEntry::make('destaque')->badge(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('titulo')
            ->columns([
                ImageColumn::make('imagem')->disk('public'),
                TextColumn::make('titulo')->searchable(),
                TextColumn::make('category.nome')->label('Categoria')->badge(),
                TextColumn::make('preco')->money('BRL'),
                IconColumn::make('ativo')->boolean(),
                IconColumn::make('destaque')->boolean(),
            ])
            ->defaultSort('ordem')
            ->reorderable('ordem')
            ->filters([
                SelectFilter::make('category_id')
                    ->label('Categoria')
                    ->relationship('category', 'nome'),
            ])
            ->recordActions([
                ViewAction::make(),
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
            'index' => ManageMenuItems::route('/'),
        ];
    }
}
