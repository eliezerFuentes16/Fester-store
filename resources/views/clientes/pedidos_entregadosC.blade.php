<?php 
$seccion="pedidosE";
 ?>

@extends('clientes.layouteC')

@section('container')
<head>
	<title>Fester | {{ Auth::user()["name"] }}</title>
	<link rel="stylesheet" type="text/css" href="{!! asset('css/clientes/pedidos.css') !!}">
</head>
<section>

	<div id="tvesModal" class="modalContainer dis-mostrar">
	<div class="modal-content informacion" id="imprimir">
		<i class="fas fa-times cerrar"></i>
			<p class="folio"></p>
			<h3>Orden</h3>
			<div class="div-productos-pedido">
			
			</div>
			<h3>Observaciones</h3>
			<div class="div-observaciones-pedido">
				
			</div>
			
	</div>
</div> 


	<h2 class="p-4 text-center">Pedidos Entregados</h2>
	<div class="div-container">
		<div class="row">
			<div class="col"><p>Folio</p></div>
			<div class="col"><p>Información</p></div>
			<div class="col"><p>Fecha</p></div>
			<div class="col"><p>Estado</p></div>
			
		</div>

		<div class="div-body">
			@foreach ($pedidos as $pedido)
				@if ($pedido["STATUS"]=="Nuevo")
					<div class="row nuevo div-pedido-{{$pedido['id']}}">
						<div class="col"><p style="">{{$pedido['id']}}</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos {{$pedido['id']}} btn btn-primary botones1"
							id-pedido="{{$pedido['id']}}" token-pedido="{{$pedido['idPedido']}}"  nombre="{{$pedido['NOMBRE']}}" telefono="{{$pedido['TELEFONO']}}" direccion="{{$pedido['DIRECCION']}}" email="{{$pedido['EMAIL']}}" fecha="{{$pedido['FECHAHORA']}}" observaciones="{{$pedido['OBSERVACIONES']}}" formapago="{{$pedido['FORMAPAGO']}}" cambio="{{$pedido['CAMBIO']}}" colonia="{{$pedido['']}}" sucursal="Tucupita" status="{{$pedido['STATUS']}}" productos="{{$pedido['PRODUCTOS']}}" total="{{$pedido['TOTAL']}}" 
							>Mostrar Datos</button></p></div>
						<div class="col"><p class="fecha">{{$pedido['FECHAHORA']}}</p></div>
						<div class="col"><p class="pe-{{$pedido['id']}}"><i class="fs-4 fas fa-cart-plus"></i>&nbsp;{{$pedido['STATUS']}}</p></div>
						
					</div>
				@endif
				@if ($pedido["STATUS"]=="En Bodega")
			
					<div class="row cocina div-pedido-{{$pedido['id']}}">
							<div class="col"><p style="">{{$pedido['id']}}</p></div>
							<div class="col"><p style=""><button id-pedido="{{$pedido['id']}}" class="botonsitos {{$pedido['id']}} btn btn-primary botones1" id-pedido="{{$pedido['id']}}" token-pedido="{{$pedido['idPedido']}}"  nombre="{{$pedido['NOMBRE']}}" telefono="{{$pedido['TELEFONO']}}" direccion="{{$pedido['DIRECCION']}}" email="{{$pedido['EMAIL']}}" fecha="{{$pedido['FECHAHORA']}}" observaciones="{{$pedido['OBSERVACIONES']}}" formapago="{{$pedido['FORMAPAGO']}}" cambio="{{$pedido['CAMBIO']}}" colonia="{{$pedido['TUCUPITA']}}" sucursal="TUCUPITA" status="{{$pedido['STATUS']}}"
							productos="{{$pedido['PRODUCTOS']}}" total="{{$pedido['TOTAL']}}" >Mostrar Datos</button></p></div>
							<div class="col"><p class="fecha">{{$pedido['FECHAHORA']}}</p></div>
							<div class="col"><p class="pe-{{$pedido['id']}}"><i class="fs-4 fas fa-store"></i>&nbsp;{{$pedido["STATUS"]}}</p></div>
							
						</div>
				@endif
				@if ($pedido["STATUS"]=="Domicilio")
				
					<div class="row camino div-pedido-{{$pedido['id']}}">
						<div class="col"><p style="">{{$pedido['id']}}</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos {{$pedido['id']}} btn btn-primary botones1" id-pedido="{{$pedido['id']}}" token-pedido="{{$pedido['idPedido']}}"  nombre="{{$pedido['NOMBRE']}}" telefono="{{$pedido['TELEFONO']}}" direccion="{{$pedido['DIRECCION']}}" email="{{$pedido['EMAIL']}}" fecha="{{$pedido['FECHAHORA']}}" observaciones="{{$pedido['OBSERVACIONES']}}" formapago="{{$pedido['FORMAPAGO']}}" cambio="{{$pedido['CAMBIO']}}" colonia="{{$pedido['']}}" sucursal="TUCUPITA" status="{{$pedido['STATUS']}}"
							productos="{{$pedido['PRODUCTOS']}}" total="{{$pedido['TOTAL']}}" >Mostrar Datos</button></p></div>
						<div class="col"><p class="fecha">{{$pedido['FECHAHORA']}}</p></div>
						<div class="col"><p class="pe-{{$pedido['id']}}"><i class="fs-4 fas fa-truck-moving"></i>&nbsp;En Camino</p></div>
						
					</div>
				@endif
				@if ($pedido["STATUS"]=="Entregado")

					<div class="row entregado div-pedido-{{$pedido['id']}}">
						<div class="col"><p style="">{{$pedido['id']}}</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos {{$pedido['id']}} btn btn-primary botones1" id-pedido="{{$pedido['id']}}" token-pedido="{{$pedido['idPedido']}}"  nombre="{{$pedido['NOMBRE']}}" telefono="{{$pedido['TELEFONO']}}" direccion="{{$pedido['DIRECCION']}}" email="{{$pedido['EMAIL']}}" fecha="{{$pedido['FECHAHORA']}}" observaciones="{{$pedido['OBSERVACIONES']}}" formapago="{{$pedido['FORMAPAGO']}}" cambio="{{$pedido['CAMBIO']}}" colonia="{{$pedido['']}}" sucursal="TUCUPITA" status="{{$pedido['STATUS']}}"
							productos="{{$pedido['PRODUCTOS']}}" total="{{$pedido['TOTAL']}}" >Mostrar Datos</button></p></div>
						<div class="col"><p class="fecha">{{$pedido['FECHAHORA']}}</p></div>
						<div class="col"><p class="pe-{{$pedido['id']}}"><i class="fs-4 fas fa-check"></i>&nbsp;{{$pedido["STATUS"]}}</p></div>
						
					</div>
				@endif
				@if ($pedido["STATUS"]=="Cancelado")

					<div class="row cancelado div-pedido-{{$pedido['id']}}">
						<div class="col"><p style="">{{$pedido['id']}}</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos {{$pedido['id']}} btn btn-primary botones1" id-pedido="{{$pedido['id']}}" token-pedido="{{$pedido['idPedido']}}"  nombre="{{$pedido['NOMBRE']}}" telefono="{{$pedido['TELEFONO']}}" direccion="{{$pedido['DIRECCION']}}" email="{{$pedido['EMAIL']}}" fecha="{{$pedido['FECHAHORA']}}" observaciones="{{$pedido['OBSERVACIONES']}}" formapago="{{$pedido['FORMAPAGO']}}" cambio="{{$pedido['CAMBIO']}}" colonia="{{$pedido['']}}" sucursal="TUCUPITA" status="{{$pedido['STATUS']}}"
							productos="{{$pedido['PRODUCTOS']}}" total="{{$pedido['TOTAL']}}" >Mostrar Datos</button></p></div>
						<div class="col"><p class="fecha">{{$pedido['FECHAHORA']}}</p></div>
						<div class="col"><p class="pe-{{$pedido['id']}}"><i class="fs-4 fas fa-exclamation-triangle"></i>&nbsp;{{$pedido["STATUS"]}}</p></div>
						
					</div>
				@endif
				
			@endforeach
		</div>
	
	</div>

</section>

<script type="text/javascript" src="{!! asset('js/clientes/pedidos.js') !!}"></script>
@endsection