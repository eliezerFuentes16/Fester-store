{% extends "clientes/layouteC.html" %}

{% block content %}
	<head>
		
		<link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='css/index.css') }}">
	</head>
	<section style="margin-top:176px">

		<div class="div-ordene border-secondary">
			<hr>
				<a href="/Catalogo" class="btn btn-primary d-block m-auto" style="width:180px">Ordene aquí</a>
			<hr>

		</div>
		
		<div class="flex-container d-flex">

			<div class="flex-item w-50" style="min-width:400px;">
				
					<h5 class="text-center">Es usuario administrador</h5>
					<a href="" class="m-auto fs-5 d-block text-center">Ingrese aqui</a>
				
			</div>
			<div class="flex-item w-50" style="min-width:400px">
				<h5 class="text-center">¿Realizaste Un Pedido?</h5>
				<a href="/Catalogo/Carrito/Seguimiento" class="m-auto fs-5 d-block text-center">Dar Seguimiento</a>
			</div>

		</div>



	</section>
	
{% endblock %}


