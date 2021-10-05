<!DOCTYPE html>
<html>
<head>
	<title>Login | Fester</title>
	<link rel="stylesheet" type="text/css" href="{!! asset('bootstrap/css/bootstrap.css') !!}">
	<link rel="shortcut icon" href="{!! asset('media/logo.ico') !!}" />
	<link rel="stylesheet" type="text/css" href="{!! asset('icons/css/all.css') !!}">
	<link rel="stylesheet" type="text/css" href="{!! asset('css/clientes/loginC.css') !!}">

</head>
<body>
	<form class="form" method="POST">
		<div class="form__container">
			<h2 class="form__title">Iniciar Sección</h2>
			<div class="form__group">
				<div>
					<input required="True" autocomplete="off" type="email" id="name" class="form__input" name="email" placeholder=" ">
					<label for="name" class="form__label">Email</label>
					<span class="form__line"></span>
				</div>
				@csrf
				<div>	
					<input required="True" autocomplete="off" type="password" id="password" class="form__input" name="password" placeholder=" ">
					<label for="name" class="form__label">Contraseña</label>
					<span class="form__line"></span>
				</div>
				
				<button id="button" type="submit" id="button" value="Acceder">Acceder</button>
				<p class="text-center mt-4">¿No estas registrado? <a href="/register">Registrate Aqui</a></p>
				<!-- <p class="text-center">¿Eres Administrador? <a href="/login" class="text-center mt-4">Entra aqui</a></p> -->
			</div>
		</div>
		<div id="container">
			<a href="/catalogo" style="width:100%"><img style="width:100%" src="{!! asset('media/foto.png') !!}"></a>
		</div>
	</form>

</body>
</html>