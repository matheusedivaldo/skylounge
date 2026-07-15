<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;

class MenuController extends Controller
{
    public function index(): JsonResponse
    {
        $menu = MenuItem::with('category')
            ->where('ativo', true)
            ->orderBy('ordem')
            ->get();

        return response()->json($this->transform($menu));
    }

    public function destaque(): JsonResponse
    {
        $menu = MenuItem::with('category')
            ->where('ativo', true)
            ->where('destaque', true)
            ->orderBy('ordem')
            ->limit(4)
            ->get();

        return response()->json($this->transform($menu));
    }

    private function transform(EloquentCollection $items): Collection
    {
        return $items->map(fn (MenuItem $item) => [
            'id' => $item->id,
            'titulo' => $item->titulo,
            'descricao' => $item->descricao,
            'preco' => $item->preco,
            'exibir_preco' => $item->exibir_preco,
            'imagem_url' => $item->imagem ? asset('storage/' . $item->imagem) : null,
            'ativo' => $item->ativo,
            'destaque' => $item->destaque,
            'ordem' => $item->ordem,
            'category' => $item->category?->nome,
        ]);
    }
}
