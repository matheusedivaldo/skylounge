<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\GalleryItem;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;

class GalleryController extends Controller
{
    public function index(): JsonResponse
    {
        $galeria = GalleryItem::with('category')
            ->where('ativo', true)
            ->orderBy('ordem')
            ->get();

        return response()->json($this->transform($galeria));
    }

    private function transform(EloquentCollection $items): Collection
    {
        return $items->map(fn (GalleryItem $item) => [
            'id' => $item->id,
            'legenda' => $item->legenda,
            'categoria' => $item->category?->nome,
            'imagem_url' => $item->imagem ? asset('storage/' . $item->imagem) : null,
            'ordem' => $item->ordem,
        ]);
    }
}
