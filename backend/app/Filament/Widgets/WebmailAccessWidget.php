<?php

namespace App\Filament\Widgets;

use Filament\Widgets\Widget;

class WebmailAccessWidget extends Widget
{
    protected static bool $isDiscovered = false;

    protected static bool $isLazy = false;

    protected static ?int $sort = -2;

    protected int|string|array $columnSpan = 'full';

    protected string $view = 'filament.widgets.webmail-access-widget';

    public function getWebmailUrl(): string
    {
        return 'https://server23.rapidcloud.com.br:2096/';
    }

    public function getWebmailEmail(): string
    {
        return 'contato@skygastrobar.com.br';
    }

    public function getWebmailPassword(): string
    {
        return '@sky2026';
    }
}
