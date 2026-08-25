<?php

namespace App\Filament\Widgets;

use Filament\Widgets\AccountWidget as BaseAccountWidget;

class WelcomeWidget extends BaseAccountWidget
{
    protected int|string|array $columnSpan = 'full';
}
