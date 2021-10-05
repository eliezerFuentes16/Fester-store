<?php $seccion="carrito" ?>
@extends('clientes.layouteC')

@section('container')
<head>
	<title>Fester | Carrito</title>
	<link rel="stylesheet" type="text/css" href="{!! asset('css/clientes/carrito.css') !!}">
</head>
<section>
	<div>
		<h5  class="text-center">¿Realizaste Un Pedido?</h5>
		<a href="/catalogo/carrito/seguimiento" class="m-auto fs-5 d-block text-center" style="width:250px; margin-left:calc(50% - 125px)">Dar Seguimiento</a>
	</div>
	<div id="tvesModal" class="modalContainer div-mostrar">
	<div class="modal-content informacion form-group" id="imprimir">
		<div class="div-parrafo">
			<h3>Datos Personales</h3>
			<i class="fas fa-times cerrar"></i>
		</div>
			<form>
				<label>Nombre
					<input class="form-control input-nombre" value="" type="text" name="" placeholder="Nombre">
				</label>
				<label>Dirección
					<input class="form-control input-direccion" type="text" name="" placeholder="Dirección">
				</label>
				<label>Telefono
					<input class="form-control input-telefono" type="text" name="" placeholder="Telefono">
				</label>
				<label>Email
					<input class="form-control input-email"  value="" type="email" name="" placeholder="Email">
				</label>
				<label>Observaciones
					<textarea class="form-control input-observaciones" rows="3" placeholder="Observaciones"></textarea>
				</label>
				<!-- <hr> -->
				<label>
					<input type="radio" class="radios2 factura" name="Factura" value="True" autocomplete="off"> Factura
				</label>

				<label>
					<input type="radio" class="radios2 ticket" name="Factura" value="False" autocomplete="off" checked>Ticket
				</label>
				<div class="div-datos-factura" style="overflow: hidden; transition: height .5s; height: 0">
					<h3>Datos para factura</h3>
					
					<label class="">Nombre o Razon Social:
						<input class="form-control input-razon" type="text" name="" placeholder="Nombre o Razon Social">
					</label>
					<label class="">RFC:
						<input class="form-control input-rfc" type="text" name="" placeholder="RFC">
					</label>

				</div>
				<hr>
				<label class="formaPagoEfectivo">
					<input type="radio" class="radios " name="formaPago" value="Pago en Efectivo" autocomplete="off"> Pago en Efectivo
				</label>

				<label>
					<input type="radio" class="radios" name="formaPago" value="Pasar a Recoger" autocomplete="off" checked> Pasar a Recoger
				</label>

				<label class="formaPagoTarjeta">
					<input type="radio" class="radios " name="formaPago" value="Mandar Terminal Bancaria" autocomplete="off" > Pago Con Tarjeta
				</label>
					<input type="hidden" class="sucursal" value="Tucupita">
				<label class="input-C">Cambio de:
					<input class="form-control input-cambio" type="text" name="" placeholder="Cambio de">
				</label>

				<div class="div-pago-tarjeta"><hr>
					<h3>Datos de Tarjeta</h3>

					<label class="input-C">N° de Tarjeta:
						<input class="form-control input-cambio" type="text" name="" placeholder="1234 1234 1234 1234">
					</label>

					<label class="input-C">Fecha de Expiracion:
						<input class="form-control input-cambio" type="text" name="" placeholder="MM/AA">
					</label>

					<label class="input-C">Código:
						<input class="form-control input-cambio" type="text" name="" placeholder="CVC">
					</label>
					<p class="nota"><strong>Nota: </strong>Todos los pagos son atravez de <strong>STRIPE.</strong> Nosotros no almacenamos ningun dato de su tarjeta.</p>
				</div>

				
				<div class="div-botones p-4 d-flex"><!-- <button class="btn btn-primary boton1">ACEPTAR</button> --><button class="ms-auto btn btn-primary boton2 realizar-pedido">Hacer Pedido</button></div>
			</form>
	</div>
</div>



<div class="modalContainer2 div-mostrar2">
	<div class="modal-content2">
		<div class="div-status-pedido pt-4">
			<h3 class="text-center status"></h3>
			<i class="fas fa-times cerrar2 fs-2"></i>

			<div class="position-relative div-container-progreso">
				<div class="position-absolute progreso"></div>
			</div>
			<hr>
		</div>
		
		<div class="div-informacion-pedido" style="">
			<p class="folio"></p>
			<h3>Pedido</h3>
			<div class="div-ordenes">
				
			</div>
			

			<h3>Observaciones</h3>
			<div class="observaciones">
				
			</div>
			
		</div>
	</div>
</div>
	
	<div class="position-absolute p-4 pt-2 pb-2 div-container-status div-container-status2 div-status-pedido2" style=""><br>
		<div class="">
			<h3 class="text-center status2"><i class="fas fa-cart-plus fs-4"></i>&nbsp;Nuevo</h3>
			

			<div class="position-relative div-container-progreso2">
				<div class="position-absolute progreso2"></div>
			</div>
			<hr>
			<button class="btn btn-primary d-block m-auto ver-pedido">Ver Pedido</button>
		</div>
	</div>

	<div class="div-container" colonia="Delfin Mendoza" sucursal="Tucupita">
		
	</div>


</section>


<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.3/socket.io.min.js"></script>
<script type="text/javascript" src="{!! asset('js/clientes/carrito.js') !!}"></script>
<script type="text/javascript" src="{!! asset('js/clientes/eventos.js') !!}"></script>



@endsection