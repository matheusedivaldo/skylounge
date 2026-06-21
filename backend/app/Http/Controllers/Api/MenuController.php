<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;
use Illuminate\Http\JsonResponse;

class MenuController extends Controller
{
    public function index(): JsonResponse
    {
        $menu = MenuItem::where('ativo', true)->get()->map(function ($item) {
            $item->imagem_url = $item->imagem ? asset('storage/' . $item->imagem) : null;
            return $item;
        });

        return response()->json($menu);
    }
}