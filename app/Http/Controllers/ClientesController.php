<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
# MODELOS
use App\Models\producto;
use App\Models\pedido;
use Illuminate\Support\Facades\Auth;

class ClientesController extends Controller
{
    public function redireccion()
    {
        return redirect("/catalogo");
    }

    public function catalogo()
    {
        $productos=producto::all()->take(6);// Selecciona los primero 6 productos porque los  demas los carga con javaScript
    	return view('clientes.menues', compact("productos"))->with('buscar', "False");
    }

    public function BuscarProducto()
    {
       $busqueda=request("input-buscar");
		if ($busqueda==""){
			return redirect("/catalogo");
		}
		$productos=producto::where('NOMBRE','like','%'.$busqueda.'%')->get();
	    return view('clientes.menues', compact("productos"))->with('buscar', "True");
	}


	public function carrito()
    {
       return view('clientes.carrito');
	}

	public function seguimiento()
    {
       return view('clientes.seguimiento');
	}

	public function pedidosClientes()
    {
       $idCliente=Auth::user()["id"];
	// $idCliente=17;
	
	$pedidos=pedido::where("idCliente",$idCliente)->where("ENTREGADO",FALSE)->get();
    return view('clientes.pedidos',compact("pedidos"));
	}

	public function pedidosEntregadosClientes()
    {
       $idCliente=Auth::user()["id"];
	
		$pedidos=pedido::where("idCliente",$idCliente)->where("ENTREGADO",TRUE)->get();

	    return view('clientes.pedidos_entregadosC',compact("pedidos"));
	}

}
