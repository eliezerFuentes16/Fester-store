<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
# MODELOS

use App\Http\Controllers\ApiController;
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

Route::get('/Catalogo/Productos', [ApiController::class, 'ApiProductos']);


Route::get('/seguimiento/{id}', [ApiController::class, 'ApiSeguimiento']);

Route::post('/hacer-pedido', function () {
	$request=request();
	$pedido = new pedido;
	// return $pedido->create($request->all());

	//return [$request->productos, $request->total,Auth::user()["id"]];
	$pedido->idPedido=$request->idPedido;
	$pedido->NOMBRE=$request->nombre;
	$pedido->TELEFONO=$request->telefono;
	$pedido->DIRECCION=$request->direccion;
	$pedido->EMAIL=$request->email;
	$pedido->FECHAHORA=date('Y-m-d H:i:s');
	$pedido->OBSERVACIONES=$request->observaciones;
	$pedido->FORMAPAGO=$request->formaPago;
	$pedido->CAMBIO=$request->cambio;
	$pedido->COLONIA="";
	$pedido->SUCURSAL="";
	$pedido->STATUS="Nuevo";
	$pedido->PRODUCTOS=$request->productos;
	$pedido->TOTAL=$request->total;
	$pedido->ENTREGADO=FALSE;
	$pedido->idCliente=Auth::user()["id"];
	$pedido->FACTURA=$request->factura;
	$pedido->NombreRazonSocial=$request->nombreRazon;
	// $pedido->rfc=$request->rfc;
	$pedido->save();


	$data = pedido::latest('id')->first();
	//return array('id'=>$pedido->id);
	return $data;
});


