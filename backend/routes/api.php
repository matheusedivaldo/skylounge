<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MenuController;

Route::get('/menu', [MenuController::class, 'index']);
Route::get('/menu/destaque', [MenuController::class, 'destaque']);
