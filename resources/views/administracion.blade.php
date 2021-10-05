<?php 
$seccion="administracion";
 ?>
@extends('layoute')

@section('container')
<head>
	<link rel="stylesheet" type="text/css" href="{!! asset('css/administracion.css') !!}">
	<title>Administracion | Ordenes</title>
</head> 
<section class="section2">

<div id="tvesModal" class="modalContainer dis-mostrar">
	<div class="modal-content informacion" id="imprimir">
		<i class="fas fa-times cerrar"></i>
			<p class="folio">Folio 6</p>
			<h3>Orden</h3>
			<div class="div-productos-pedido">
			
			</div>
			<h3>Observaciones</h3>
			<div class="div-observaciones-pedido">
				
			</div>
			
			<div class="div-botones p-4"><!-- <button class="btn btn-primary boton1">ACEPTAR</button> --><!-- <button class="btn btn-primary boton2">IMPRIMIR TICKET</button> --></div>
	</div>
</div> 
<!-- Notificacion -->
<audio controls id="audio" class="d-none" muted>
    <source id="notificacion" src="{!! asset('media/notificacion.mp3') !!}" type="audio/mpeg">
</audio>
<!-- Notificacion -->
	<h2>Orden</h2>
	<div class="div-container">
		<div class="row">
			<div class="col"><p>Folio</p></div>
			<div class="col"><p>Información Cliente</p></div>
			<div class="col"><p>Fecha</p></div>
			<div class="col"><p>Estado</p></div>
			<div class="col"><p>Marcar Como</p></div>
		</div>

		<div class="div-body">
			@foreach ($pedidos as $pedido)
				@if ($pedido["STATUS"]=="Nuevo")
					<div class="row nuevo div-pedido-{{$pedido['id']}}">
						<div class="col"><p style="">{{$pedido['id']}}</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos {{$pedido['id']}} btn btn-primary botones1"
							id-pedido="{{$pedido['id']}}" token-pedido="{{$pedido['idPedido']}}"  nombre="{{$pedido['NOMBRE']}}" telefono="{{$pedido['TELEFONO']}}" direccion="{{$pedido['DIRECCION']}}" email="{{$pedido['EMAIL']}}" fecha="{{$pedido['FECHAHORA']}}" observaciones="{{$pedido['OBSERVACIONES']}}" formapago="{{$pedido['FORMAPAGO']}}" cambio="{{$pedido['CAMBIO']}}" colonia="Tucupita" sucursal="{{$pedido['DIRECCION']}}" status="{{$pedido['STATUS']}}" productos="{{$pedido['PRODUCTOS']}}" total="{{$pedido['TOTAL']}}" factura="{{$pedido['FACTURA']}}" NombreRazonSocial="{{$pedido['NombreRazonSocial']}}" rfc="{{$pedido['rfc']}}"
							>Mostrar Datos</button></p></div>
						<div class="col"><p class="fecha">{{$pedido['FECHAHORA']}}</p></div>
						<div class="col"><p class="pe-1"><i class="fs-4 fas fa-cart-plus"></i>&nbsp;{{$pedido['STATUS']}}</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos boton-1 btn btn-primary botones2 nue" id-token-pedido="{{$pedido['idPedido']}}">En Bodega</button></p></div>
					</div>
				@endif
				@if($pedido["STATUS"]=="En Bodega")
					<div class="row cocina div-pedido-{{$pedido['id']}}">
							<div class="col"><p style="">{{$pedido['id']}}</p></div>
							<div class="col"><p style=""><button id-pedido="{{$pedido['id']}}" class="botonsitos 1 btn btn-primary botones1" id-pedido="{{$pedido['id']}}" token-pedido="{{$pedido['idPedido']}}"  nombre="{{$pedido['NOMBRE']}}" telefono="{{$pedido['TELEFONO']}}" direccion="{{$pedido['DIRECCION']}}" email="{{$pedido['EMAIL']}}" fecha="{{$pedido['FECHAHORA']}}" observaciones="{{$pedido['OBSERVACIONES']}}" formapago="{{$pedido['FORMAPAGO']}}" cambio="{{$pedido['CAMBIO']}}" colonia="Tucupita" sucursal="{{$pedido['id']}}" status="{{$pedido['STATUS']}}"
							productos="{{$pedido['PRODUCTOS']}}" total="{{$pedido['TOTAL']}}" >Mostrar Datos</button></p></div>
							<div class="col"><p class="fecha">{{$pedido['FECHAHORA']}}</p></div>
							<div class="col"><p class="pe-1"><i class="fs-4 fas fa-store"></i>&nbsp;{{$pedido['STATUS']}}</p></div>
							<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos boton-1 btn btn-primary botones2 coci" id-token-pedido="{{$pedido['idPedido']}}">En Camino</button></p></div>
						</div>
				@endif
				@if($pedido["STATUS"]=="Domicilio")
					<div class="row camino div-pedido-{{$pedido['idPedido']}}">
						<div class="col"><p style="">{{$pedido['id']}}</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos 1 btn btn-primary botones1" id-pedido="{{$pedido['id']}}" token-pedido="{{$pedido['idPedido']}}"  nombre="{{$pedido['NOMBRE']}}" telefono="{{$pedido['id']}}" direccion="{{$pedido['DIRECCION']}}" email="{{$pedido['EMAIL']}}" fecha="{{$pedido['FECHAHORA']}}" observaciones="{{$pedido['OBSERACIONES']}}" formapago="{{$pedido['FORMAPAGO']}}" cambio="{{$pedido['CAMBIO']}}" colonia="Tucupita" sucursal="{{$pedido['id']}}" status="{{$pedido['STATUS']}}"
							productos="{{$pedido['PRODUCTOS']}}" total="{{$pedido['TOTAL']}}" >Mostrar Datos</button></p></div>
						<div class="col"><p class="fecha">{{$pedido['FECHAHORA']}}</p></div>
						<div class="col"><p class="pe-1"><i class="fs-4 fas fa-truck-moving"></i>&nbsp;En Camino</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos boton-1 btn btn-primary botones2 cami" id-token-pedido="{{$pedido['idPedido']}}">{{$pedido['STATUS']}}</button></p></div>
					</div>
				@endif
				@if($pedido["STATUS"]=="Entregado")

					<div class="row entregado div-pedido-{{$pedido['idPedido']}}">
						<div class="col"><p style="">{{$pedido['id']}}</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos 1 btn btn-primary botones1" id-pedido="{{$pedido['id']}}" token-pedido="{{$pedido['idPedido']}}"  nombre="{{$pedido['NOMBRE']}}" telefono="{{$pedido['id']}}" direccion="{{$pedido['DIRECCION']}}" email="{{$pedido['EMAIL']}}" fecha="{{$pedido['FECHAHORA']}}" observaciones="{{$pedido['OBSERACIONES']}}" formapago="{{$pedido['FORMAPAGO']}}" cambio="{{$pedido['CAMBIO']}}" colonia="Tucupita" sucursal="{{$pedido['id']}}" status="{{$pedido['STATUS']}}"
							productos="{{$pedido['PRODUCTOS']}}" total="{{$pedido['TOTAL']}}" >Mostrar Datos</button></p></div>
						<div class="col"><p class="fecha">{{$pedido['FECHAHORA']}}</p></div>
						<div class="col"><p class="pe-1"><i class="fs-4 fas fa-check"></i>&nbsp;{{$pedido['STATUS']}}</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos boton-1 btn btn-primary botones2 entre" id-token-pedido="{{$pedido['idPedido']}}">Pedido Cancelado</button></p></div>
					</div>
				@endif
				@if($pedido["STATUS"]=="Cancelado")
					<div class="row cancelado div-pedido-{{$pedido['idPedido']}}">
						<div class="col"><p style="">{{$pedido['id']}}</p></div>
						<div class="col"><p style=""><button href="" id-pedido="{{$pedido['id']}}" class="botonsitos 1 btn btn-primary botones1" id-pedido="{{$pedido['id']}}" token-pedido="{{$pedido['idPedido']}}"  nombre="{{$pedido['NOMBRE']}}" telefono="{{$pedido['id']}}" direccion="{{$pedido['DIRECCION']}}" email="{{$pedido['EMAIL']}}" fecha="{{$pedido['FECHAHORA']}}" observaciones="{{$pedido['OBSERACIONES']}}" formapago="{{$pedido['FORMAPAGO']}}" cambio="{{$pedido['CAMBIO']}}" colonia="Tucupita" sucursal="{{$pedido['id']}}" status="{{$pedido['STATUS']}}"
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.3/socket.io.min.js"></script>
	<script type="text/javascript" src="{!! asset('js/administracion.js') !!}"></script>

@endsection

