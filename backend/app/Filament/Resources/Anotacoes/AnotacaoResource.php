<?php

namespace App\Filament\Resources\Anotacoes;

use App\Filament\Resources\Anotacoes\Pages\ManageAnotacoes;
use App\Models\Anotacao;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class AnotacaoResource extends Resource
{
    protected static ?string $model = Anotacao::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedKey;

    protected static ?string $recordTitleAttribute = 'titulo';

    protected static \UnitEnum|string|null $navigationGroup = 'Sistema';

    protected static ?string $modelLabel = 'Anotação de Acesso';

    protected static ?string $pluralModelLabel = 'Anotações de Acesso';

    protected static ?string $navigationLabel = 'Anotações';

    protected static bool $shouldRegisterNavigation = false;

    public static function form(Schema $schema): Schema
    {
        return $schema->components(static::formSchema());
    }

    /**
     * @return array<\Filament\Schemas\Components\Component>
     */
    public static function formSchema(): array
    {
        return [
            Section::make('Acesso')
                ->columns(['default' => 1, 'md' => 2])
                ->components([
                    TextInput::make('titulo')
                        ->label('Título')
                        ->helperText('Ex.: Instagram, Google Meu Negócio, iFood...')
                        ->required()
                        ->maxLength(255)
                        ->columnSpanFull(),

                    TextInput::make('usuario')
                        ->label('Usuário / E-mail'),

                    TextInput::make('senha')
                        ->label('Senha')
                        ->password()
                        ->revealable(),

                    TextInput::make('link')
                        ->label('Link')
                        ->url()
                        ->columnSpanFull(),

                    TextInput::make('texto_botao')
                        ->label('Texto do botão')
                        ->default('Abrir')
                        ->maxLength(255),

                    Select::make('icone')
                        ->label('Tipo de anotação')
                        ->options([
                            'heroicon-o-key' => '🔑 Genérico',
                            'heroicon-o-envelope' => '✉️ E-mail',
                            'heroicon-o-camera' => '📷 Instagram',
                            'heroicon-o-hand-thumb-up' => '📘 Facebook',
                            'heroicon-o-chat-bubble-left-right' => '💬 WhatsApp',
                            'heroicon-o-magnifying-glass' => '🔍 Google',
                            'heroicon-o-shopping-bag' => '🍔 iFood',
                            'heroicon-o-globe-alt' => '🌐 Site / Link',
                        ])
                        ->native(false)
                        ->default('heroicon-o-key')
                        ->required(),
                ]),

            Section::make('Visibilidade')
                ->columns(['default' => 1, 'sm' => 2])
                ->components([
                    Toggle::make('ativo')
                        ->default(true)
                        ->inline(false),

                    TextInput::make('ordem')
                        ->numeric()
                        ->default(fn () => (Anotacao::max('ordem') ?? 0) + 1),
                ]),
        ];
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('titulo')
            ->columns([
                TextColumn::make('titulo')
                    ->label('Título')
                    ->searchable()
                    ->weight('medium'),
                TextColumn::make('usuario')
                    ->label('Usuário / E-mail')
                    ->placeholder('—'),
                IconColumn::make('ativo')
                    ->label('Ativo')
                    ->boolean(),
                TextColumn::make('ordem')->label('Ordem'),
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
            'index' => ManageAnotacoes::route('/'),
        ];
    }
}
