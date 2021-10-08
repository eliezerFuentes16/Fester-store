<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\pedido;
use Illuminate\Support\Facades\Auth;
class AdministracionController extends Controller
{
    public function administracion()
    {
      	if (Auth::user()["administrador"]){
			$pedidos=pedido::where("ENTREGADO",FALSE)->get();
   			return view('administracion',compact("pedidos"));
		}else{
			return redirect("/catalogo");
		}
	}

	public function administracionPedidos()
    {
      	if (Auth::user()["administrador"]){
			$pedidos=pedido::where("ENTREGADO",TRUE)->get();
   			return view('ordenes_entregadas',compact("pedidos"));
		}else{
			return redirect("/catalogo");
		}
	}

}
