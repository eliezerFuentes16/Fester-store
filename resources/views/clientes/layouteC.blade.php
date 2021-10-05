
<!DOCTYPE html>
<html lang="es">
<head>
	<link rel="stylesheet" type="text/css" href="{!! asset('bootstrap/css/bootstrap.css') !!}">
	
	<link rel="stylesheet" type="text/css" href="{!! asset('icons/css/all.css') !!}">
	
	<link rel="stylesheet" type="text/css" href="{!! asset('css/clientes/layouteC.css') !!}">
	<meta name="description" content="Comida"/>
	<meta name="viewport" content="width=device-width, initial-scale=0.75">
	<link rel="shortcut icon" href="{!! asset('media/logo.ico') !!}" />
	
</head>
<body style="" class="body">
	<div id="navbar">
		<div class="header-div">
			<header class="header">
				<div class="div-header" style="">
					<a href="/catalogo"><img width="120" height="120" id="logo" class="m-2" src="{!! asset('media/logo.png') !!}"></a><!-- <h2 class="sucursal">Fester</h2> -->
					<ul>

							@auth
							
		            		<li class="user2"><a title="Login" href="/login/clientes" class="salir">Salir&nbsp;<i class="fas fa-sign-in-alt"></i></a></li>
		            		@else
		            		<li><a title="Iniciar Sección" href="/login/clientes" class="salir">Acceder&nbsp;<i class="fas fa-sign-in-alt"></i></a></li>
		            		@endguest
							<!-- <li class="user2"><a title="Login" href="/login/Clientes" class="salir">Salir&nbsp;<i class="fas fa-sign-in-alt"></i></a></li> -->

					</ul>
				</div>
			</header>
		</div>
		
			<div class="div-nav">
					<nav>

						
						<div class="div-li-responsive" logueado="{{ Auth::user()['id'] }}">
							@if ($seccion=="catalogo")
							
							<li class="li"><a title="Ver Productos" href="/catalogo" id="activo2">

							@else
							<li class="li"><a title="Ver Productos" href="/catalogo" id="">

							@endif
							<i class="fas fa-fill-drip"></i>&nbsp;Productos</a></li>

							@if ($seccion=="carrito")

							<li class="li"><a title="Ver Carrito" href="/catalogo/carrito" id="activo2">

							@else
							<li class="li"><a title="Ver Carrito" href="/catalogo/carrito" id="">

							@endif

							<i class="fas fa-shopping-cart"></i>&nbsp;Carrito</a></li>
									
							@auth

								@if ($seccion=="pedidos")
								<li class="li">
									<a class="opcion-perfil pt-2 pb-2" title="Ver mi Perfil" href="/pedidos" id="activo2">
								@else 
									<li class="li">
									<a class="opcion-perfil pt-2 pb-2" title="Ver mi Perfil" href="/pedidos" id="">
								@endif
									<i class="fas fa-list-ul"></i>&nbsp; Pedidos</a>
								</li>

								@if ($seccion=="pedidosE")

								<li class="li">

									<a class="opcion-perfil pt-2 pb-2" title="Ver mi Perfil" id="activo2" href="/pedidos/entregados">
								@else 
									<li class="li">

									<a class="opcion-perfil pt-2 pb-2" title="Ver mi Perfil" id="" href="/pedidos/entregados">
								@endif


									<i class="fas fa-truck-loading"></i>&nbsp; Pedidos Entregados</a>
								</li>
							@endguest
						</div>

						<ul class="div-li2">
								@if ($seccion=="catalogo")
									<form class="form-buscar-responsive" method="POST">
										<input type="search" placeholder="Buscar Producto" class="form-control input-buscar" style="" name="input-buscar">
										@csrf
										<input type="hidden" name="sucursal" value="Tucupita">
										<input type="hidden" name="seccion" value="catalogo">
										<button class="btn btn-primary boton-buscar">Buscar</button>
									</form>
								@endif
							
								<div class="div-barra"><i class="fas fa-bars barra"></i></div>
							
							
							<div class="div-li position-relative">
								
								<li class="li">
									@if ($seccion=="catalogo")
										<a title="Ver Productos" href="/catalogo" id="activo">
									@else 
										<a title="Ver Productos" href="/catalogo" id="">
									@endif

								<i class="fas fa-fill-drip"></i>&nbsp;Productos</a></li>


								<li class="li">
									@if ($seccion=="carrito")

										<a title="Ver Carrito" href="/catalogo/carrito" id="activo">
									@else
										<a title="Ver Carrito" href="/catalogo/carrito" id="">
									@endif
										<i class="fas fa-shopping-cart"></i>&nbsp;Carrito</a></li>

								@auth
									<li class="li perfil">
										@if ($seccion=="pedidosE" or $seccion=="pedidos")
											<a id="activo">
										@else 
											<a id="">
										@endif
											<i class="fas fa-list-ul"></i>&nbsp;Pedidos<i style="margin-left: 2px; " class="fas fa-angle-down"></i></a></li>

									<ul class="position-absolute" style="" id="perfil-opcion">
										

										<li>
											@if ($seccion=="pedidos")
												<a class="opcion-perfil pt-2 pb-2" title="Ver mi Perfil" href="/pedidos" id="activo2">
											@else 
												<a class="opcion-perfil pt-2 pb-2" title="Ver mi Perfil" href="/pedidos" id="">
											@endif


											<i class="fas fa-list-ul"></i>&nbsp; Pedidos</a>
										</li>

										<li>
											@if ($seccion=="pedidosE")
												<a class="opcion-perfil pt-2 pb-2" title="Ver mi Perfil" id="activo2" href="/pedidos/entregados">
											@else 
												<a class="opcion-perfil pt-2 pb-2" title="Ver mi Perfil" id="" href="/pedidos/entregados">
											@endif


											<i class="fas fa-truck-loading"></i>&nbsp; Pedidos Entregados</a>
										</li>
									</ul>
								@endguest
								

									<li class="li position-absolute li-form">
										@if ($seccion=="catalogo")
											<form style="" method="POST">
												@csrf

												<input type="search" placeholder="Buscar Producto" class="form-control input-buscar" name="input-buscar">
												<input type="hidden" name="seccion" value="catalogo">
												<input type="hidden" name="sucursal" value="Tucupita">
												<button class="btn btn-primary boton-buscar" >Buscar</button>
											</form>
										@endif
									</li>
								
							</div>
						</ul>
					</nav>
				</div>
			
		</div>
			<!-- Block content -->
			@yield('container')
			
		

			<footer id="footer">
				<div>
					<a target="_blank" href="https://www.facebook.com/Easyordermenutab/" style=""><i style="" class="bg-light fab fa-facebook text-primary fs-4 icn-easy-order"></i>&nbsp; <span class="easy-order">EasyOrder</span></a>
					<a href="https://easyordertab.com/privacidad" target="_blank" style=""><i class="fas fa-lock"></i>&nbsp;<span class="politica-privacidad">Politica de Privacidad</span></a>
				</div>
			</footer>
		

	<script type="text/javascript" src="{!! asset('js/clientes/layouteC.js') !!}"></script>
</body>
</html>