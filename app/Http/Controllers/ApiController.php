<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\producto;
use App\Models\pedido;
class ApiController extends Controller
{
    public function ApiProductos()
    {
   		return producto::all();
      	
	}

	public function ApiSeguimiento($id)
    {
		return pedido::where("id",$id)->get();
   	
      	
	}
}
