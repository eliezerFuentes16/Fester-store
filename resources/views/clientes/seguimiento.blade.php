
<?php 
$seccion="carrito";
 ?>
@extends('clientes.layouteC')

@section('container')

<head>
	<title>Fester | Seguimiento</title>
	<link rel="stylesheet" type="text/css" href="{!! asset('css/clientes/seguimiento.css') !!}">
	
</head>

	<section>
		<form class="d-flex m-auto div-form" style="width: calc(70% + 160px); max-width: calc(300px + 175px);">
			<input type="search" name="" placeholder="N° del pedido" class="form-control input-num-seguimiento" style="width:70%; max-width: 300px">
			<button class="btn btn-primary ms-4 btn-seguimiento">Dar Seguimiento</button>
		</form>

		<a href="/catalogo" class="btn btn-primary m-auto d-block w-25 mt-5" style="min-width:255px">Volver al Catalogo</a>

	</section>

	<div class="modalContainer2 div-mostrar2">
	<div class="modal-content2">
		<div class="div-status-pedido pt-4">
			<h3 class="text-center status"></h3>
			<i class="fas fa-times cerrar2 fs-2"></i>

			
		</div>
		
		<div class="div-informacion-pedido" style="">
			<p class="folio"></p>
			<h3>Orden</h3>
			<div class="div-ordenes">
				
			</div>
			

			<h3>Observaciones</h3>
			<div class="observaciones">
				
			</div>
			
		</div>
	</div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.3/socket.io.min.js"></script>
<script type="text/javascript" src="{!! asset('js/clientes/seguimiento.js') !!}"></script>
@endsection