<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function vistaLogin()
    {
      	Auth::logout(); // Cerrar seccion de los usuarios
		return view('clientes.auth.login');
	}

	public function verificarLogin()
    {
      	$credentials=request()->only("email","password");

	    if (Auth::attempt($credentials)){ // Verificar el usuario
	    	request()->session()->regenerate();// Regenerar token de seguridad
	    	
	    	if (Auth::user()["administrador"]){
	    		return redirect("/administracion");
	    	}

	    	return redirect("/catalogo");
	    }else{
	    	return redirect("login/clientes");
	    };
	}

}
