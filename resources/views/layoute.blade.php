<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="{!! asset('bootstrap/css/bootstrap.css') !!}">
	
	<link rel="stylesheet" type="text/css" href="{!! asset('icons/css/all.css') !!}">
	<link rel="stylesheet" type="text/css" href="{!! asset('css/layoute.css') !!}">
	<meta name="viewport" content="width=device-width, initial-scale=0.75">
	<link rel="shortcut icon" href="{!! asset('media/logo.ico') !!}" />
</head>
<body>
	<span class="d-hidden sucursal2" sucursal="Tucupita"></span>
	<div class="header-div">
		<header class="header">
			<div class="div-header">
				<a href="/catalogo"><img width="120" height="120" id="logo" class="m-2" src="{!! asset('media/logo.png') !!}"></a>
				<ul>
					<li><a title="Cerrar Sesión" href="/login/clientes" class="salir">Salir&nbsp;<i class="fas fa-sign-in-alt"></i></a></li>
				</ul>
			</div>
		</header>
	</div>
			<div class="div-nav">
				<nav>
					<div class="div-barra"><i class="fas fa-bars barra"></i></div>
					<ul>
						<div class="div-li">
							@if ($seccion=='administracion')
							<li class="li"><a title="Ver Sus Ordenes Actuales" href="/administracion" id="activo">
							@else 
							<li class="li"><a title="Ver Sus Ordenes Actuales" href="/administracion" id="">
							@endif

							<i class="fas fa-list-ul">&nbsp;</i>Ordenes</a></li>
							@if ($seccion=='ordenesE')
							<li class="li"><a title="Ver Todos Sus Pedidos" href="/administracion/pedidos" id="activo">

							@else 
								<li class="li"><a title="Ver Todos Sus Pedidos" href="/administracion/pedidos" id="">
							@endif
							<i class="fas fa-truck-loading"></i>&nbsp;Ordenes entregadas</a></li>
							
						</div>

						<div class="div-li-responsive">
							<li class="li"><a title="Ver Sus Ordenes Actuales" href="/administracion" id=""><i class="fas fa-list-ul">&nbsp;</i>Ordenes</a></li>
							<li class="li"><a title="Ver Todas Sus Pedidos" href="/administracion/pedidos" id=""><i class="fas fa-truck-loading"></i>&nbsp;{{ $seccion }}Ordenes entregadas</a></li>
							
							<li class="li"><a title="Cerrar o abrir la tienda" href="/login"><i class="fas fa-sign-in-alt"></i>&nbsp;Salir</a></li>
						</div>
					</ul>
				</nav>
			</div>

			
			@yield('container')
			

	<script type="text/javascript" src="{!! asset('js/layoute.js') !!}"></script>
	</body>
</html>