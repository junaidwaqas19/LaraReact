<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AdminAuthController;

use App\Http\Controllers\Admin\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



Route::post('/login', [AdminAuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function() {
    Route::post('/logout', [AdminAuthController::class, 'logout']);
        
    Route::apiResource('user',UserController::class);

});