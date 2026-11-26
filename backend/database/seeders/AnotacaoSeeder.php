<?php

namespace Database\Seeders;

use App\Models\Anotacao;
use Illuminate\Database\Seeder;

class AnotacaoSeeder extends Seeder
{
    public function run(): void
    {
        Anotacao::firstOrCreate(
            ['titulo' => 'E-mail da empresa'],
            [
                'usuario' => 'contato@skygastrobar.com.br',
                'senha' => '@sky2026',
                'link' => 'https://server23.rapidcloud.com.br:2096/',
                'texto_botao' => 'Abrir Webmail',
                'icone' => 'heroicon-o-envelope',
                'ativo' => true,
                'ordem' => 0,
            ],
        );
    }
}
