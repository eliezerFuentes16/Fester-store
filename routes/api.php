<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
# MODELOS
use App\Models\producto;
use App\Models\pedido;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/Catalogo/Productos', function () {

    return producto::all();
});

Route::get('/seguimiento/{id}', function ($id) {
	return pedido::where("id",$id)->get();
    
});


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
