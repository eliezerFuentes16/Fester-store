<?php 
$seccion="catalogo";
 ?>

@extends('clientes.layouteC')

@section('container')
<head>
	<title>Fester | Productos</title>
	<link rel="shortcut icon" href="{!! asset('media/logo.ico') !!}" />
	<link rel="stylesheet" type="text/css" href="{!! asset('css/menues.css') !!}">
</head>

<!-- --------------------------------------------- -->


	<div class="carrito">
			<a href="/catalogo/carrito" class="btn btn-primary boton-carrito"><img src="{!! asset('media/carrito.png') !!}" style="width:80px; position: absolute; left:0px; top:0"><p class="cantidad-carrito">0</p></a>
			<div class="total-carrito"></div>
		</div>
	
	<div class="div-container" buscar="{{$buscar}}">
		
		<div>
			<h1 class="text-center">Productos</h1>
			<h5  class="text-center">¿Realizaste Un Pedido?</h5>
			<a href="/catalogo/carrito/seguimiento" class="fs-5 text-center  d-block" style="width:250px; margin-left:calc(50% - 125px)">Dar Seguimiento</a>
		</div>
		<div class="flex-container">
			@foreach ($productos as $producto)
			<div class="flex-item">
				<div class="div-img">
					<img loading="lazy" src="{!! asset('media/Productos') !!}/{{ $producto->FOTO }}" alt="nombre">
				</div> 
				<div class="div-producto">
					<h3 class="nombre-producto{{ $producto->id }} nombre-producto">{{ $producto->NOMBRE }}</h3><p class="text-success fs-5">${{ $producto->PRECIO }}</p>
					<p class="descripcion">{{ $producto->DESCRIPCION }}</p>
					<div class="formulario">
						<form>
							
					    	<div class="div-cantidad">
					    		<span class="menos {{ $producto->id }}"><i class="fas fa-minus"></i></span>
								<input type="number" min="1" disabled="True" value="1" name="cantidad" class="cantidad cantidad{{ $producto->id }}">
								<span class="mas {{ $producto->id }}"><i class="fas fa-plus"></i></span>
							</div>
							<button nombre="{{ $producto->NOMBRE }}" ide="{{ $producto->id }}" descripcion="{{ $producto->DESCRIPCION }}" precio="{{ $producto->PRECIO }}" class="btn btn-elegir text-light agregar" style="background-color: rgb(0,81,168)">
								<i class="fas fa-plus-circle "></i>&nbsp;Agregar
							</button>
						</form>
					</div>
				</div>
			</div>
			@endforeach
		</div>
	</div>
	<script type="text/javascript" src="{!! asset('js/clientes/menues.js') !!}"></script>
@endsection
