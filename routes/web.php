<?php
use Illuminate\Support\Facades\Route;
use App\Models\producto;
use App\Models\pedido;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ClientesController;
use App\Http\Controllers\LoginController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Clientes

Route::get('/', [ClientesController::class, 'redireccion']);

Route::get('/catalogo', [ClientesController::class, 'catalogo'])->name('home');

Route::post('/catalogo', [ClientesController::class, 'BuscarProducto']);


Route::get('/catalogo/carrito', [ClientesController::class, 'carrito']);

Route::get('/catalogo/carrito/seguimiento', [ClientesController::class, 'seguimiento']);

Route::get('/pedidos', [ClientesController::class, 'pedidosClientes'])->middleware("auth");

Route::get('/pedidos/entregados', [ClientesController::class, 'pedidosEntregadosClientes'])->middleware("auth");


// LOGIN CLIENTES Y ADMINISTRADOR

Route::get('/login/clientes', [LoginController::class, 'vistaLogin'])->name('login');

Route::post('/login/clientes', [LoginController::class, 'verificarLogin']);

Route::get('/registrarse/clientes', [LoginController::class, 'vistaRegistrarse']);


// Administracion


Route::get('/administracion', function () {
	if (Auth::user()["administrador"]){
		$pedidos=pedido::where("ENTREGADO",FALSE)->get();
   		return view('administracion',compact("pedidos"));
	}else{
		return redirect("/catalogo");
	}
})->middleware("auth");

Route::get('/administracion/pedidos', function () {
	if (Auth::user()["administrador"]){
		$pedidos=pedido::where("ENTREGADO",TRUE)->get();
   		return view('ordenes_entregadas',compact("pedidos"));
	}else{
		return redirect("/catalogo");
	}
})->middleware("auth");

Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
