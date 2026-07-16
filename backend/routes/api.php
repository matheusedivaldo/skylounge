<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\GalleryController;

Route::get('/menu', [MenuController::class, 'index']);
Route::get('/menu/destaque', [MenuController::class, 'destaque']);
Route::get('/galeria', [GalleryController::class, 'index']);
