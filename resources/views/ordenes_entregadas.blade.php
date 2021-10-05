<?php 
$seccion="ordenesE";
 ?>
@extends('layoute')

@section('container')
	<head>
		<link rel="stylesheet" type="text/css" href="{!! asset('css/ordenes_E.css') !!}">
		<title>Administracion | Ordenes Entregadas</title>
	</head>
<section>

<div id="tvesModal" class="modalContainer dis-mostrar">
	<div class="modal-content informacion">
		<i class="fas fa-times cerrar"></i>
			<p class="folio"></p>
			<h3>Orden</h3>
			<div class="div-productos-pedido"></div>
			
			<h3>Observaciones</h3>
			<div class="div-observaciones-pedido"></div>
			
			<div class="div-botones p-4"><!-- <button class="btn btn-primary boton1">ACEPTAR</button> --><button class="btn btn-primary boton2">IMPRIMIR TICKET</button></div>
	</div>
</div> 

	<h2>Ordenes Entregadas</h2>
	<div class="div-form">
		<form method="POST">
			<div class="form-div">
				<div class="">
					<label>Desde:&nbsp;</label><input type="date" name="fecha_desde">
				</div>
				<div >
					<label>Hasta:&nbsp;&nbsp;</label><input type="date" name="fecha_hasta">
				</div>
			</div>
			<div class="form-div div-button-aceptar">
				<button class="btn btn-primary">Buscar</button>	
			</div>
		</form>
	</div>

	<div class="div-container">
		<div class="row">
			<div class="col" style="max-width:150px"><p>Folio</p></div>
			<div class="col"><p>Información Cliente</p></div>
			<div class="col"><p>Fecha</p></div>
			<div class="col"><p>Estatus</p></div>
		</div>

		<div class="div-body">

			@foreach ($pedidos as $pedido)
				
				@if($pedido["STATUS"]=="Entregado")

					<div class="row entregado div-pedido-{{$pedido['idPedido']}}">
						<div class="col"><p style="">{{$pedido['id']}}</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos 1 btn btn-primary botones1" id-pedido="{{$pedido['id']}}" token-pedido="{{$pedido['idPedido']}}"  nombre="{{$pedido['NOMBRE']}}" telefono="{{$pedido['id']}}" direccion="{{$pedido['id']}}" email="{{$pedido['EMAIL']}}" fecha="{{$pedido['FECHAHORA']}}" observaciones="{{$pedido['OBSERACIONES']}}" formapago="{{$pedido['FORMAPAGO']}}" cambio="{{$pedido['CAMBIO']}}" colonia="Tucupita" sucursal="{{$pedido['id']}}" status="{{$pedido['STATUS']}}"
							productos="{{$pedido['PRODUCTOS']}}" total="{{$pedido['TOTAL']}}" >Mostrar Datos</button></p></div>
						<div class="col"><p class="fecha">{{$pedido['FECHAHORA']}}</p></div>
						<div class="col"><p class="pe-1"><i class="fs-4 fas fa-check"></i>&nbsp;{{$pedido['STATUS']}}</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos boton-1 btn btn-primary botones2 entre" id-token-pedido="{{$pedido['idPedido']}}">Pedido Cancelado</button></p></div>
					</div>
				@endif
				@if($pedido["STATUS"]=="Cancelado")
					<div class="row cancelado div-pedido-{{$pedido['idPedido']}}">
						<div class="col"><p style="">{{$pedido['id']}}</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos 1 btn btn-primary botones1" id-pedido="{{$pedido['id']}}" token-pedido="{{$pedido['idPedido']}}"  nombre="{{$pedido['NOMBRE']}}" telefono="{{$pedido['id']}}" direccion="{{$pedido['id']}}" email="{{$pedido['EMAIL']}}" fecha="{{$pedido['FECHAHORA']}}" observaciones="{{$pedido['OBSERACIONES']}}" formapago="{{$pedido['FORMAPAGO']}}" cambio="{{$pedido['CAMBIO']}}" colonia="Tucupita" sucursal="{{$pedido['id']}}" status="{{$pedido['STATUS']}}"
							productos="{{$pedido['PRODUCTOS']}}" total="{{$pedido['TOTAL']}}" >Mostrar Datos</button></p></div>
						<div class="col"><p class="fecha">{{$pedido['FECHAHORA']}}</p></div>
						<div class="col"><p class="pe-1"><i class="fs-4 fas fa-exclamation-triangle"></i>&nbsp;{{$pedido['STATUS']}}</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos boton-1 btn btn-primary botones2 cance" id-token-pedido="{{$pedido['idPedido']}}">Volver</button></p></div>
					</div>
				@endif
				
			@endforeach


		</div>
	</div>
</section>

<script type="text/javascript" src="{!! asset('js/ordenes_E.js') !!}"></script>
@endsection