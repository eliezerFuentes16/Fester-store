
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


<!-- <form id="payment-form">
    <div id="card-element"> -->
      <!-- Elements will create input elements here -->
    <!-- </div> -->

    <!-- We'll put the error messages in this element -->
<!--     <div id="card-errors" role="alert"></div>

    <button id="submit">Pay</button>
</form> -->





<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.3/socket.io.min.js"></script>
<script type="text/javascript" src="{!! asset('js/clientes/seguimiento.js') !!}"></script>

<!-- 
<script src="https://js.stripe.com/v3/"></script>
<script type="text/javascript">
	//var stripe = Stripe('pk_test_0Ga5yq6irMUHhWqoszTiR3Ib00nKcMInJI', {
	
	// Initialize Stripe.js with the same connected account ID used when creating
	// the PaymentIntent.
	var stripe = Stripe('pk_test_0Ga5yq6irMUHhWqoszTiR3Ib00nKcMInJI', {
	  stripeAccount: ''
	});

	// Set up Stripe.js and Elements to use in checkout form
var elements = stripe.elements();
var style = {
  base: {
    color: "#32325d",
  }
};

var card = elements.create("card", { style: style });
card.mount("#card-element");
</script> -->
@endsection