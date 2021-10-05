<!DOCTYPE html>
<html>
<head>
	<title>Iniciar Sección | fester</title>
	<link rel="stylesheet" type="text/css" href="{!! asset('bootstrap/css/bootstrap.css') !!}">
	<link rel="shortcut icon" href="{!! asset('media/logo.ico') !!}" />
	<link rel="stylesheet" type="text/css" href="{!! asset('icons/css/all.css') !!}">
	<link rel="stylesheet" type="text/css" href="{!! asset('css/estilos.css') !!}">
	

</head>
<body>
	<form class="form" method="POST">
		<div class="form__container">
			<h2 class="form__title">Administración</h2>
			<div class="form__group">
				<div>
					<input required="True" autocomplete="off" type="text" id="name" class="form__input" name="user" placeholder=" ">
					<label for="name" class="form__label">Usuario</label>
					<span class="form__line"></span>
				</div>
				
				<div>	
					<input required="True" autocomplete="off" type="password" id="password" class="form__input" name="password" placeholder=" ">
					<label for="name" class="form__label">Contraseña</label>
					<span class="form__line"></span>
				</div>
				
				<button id="button" type="submit" id="button" value="Acceder">Acceder</button>
				<a href="/Catalogo" class="text-center mt-4 d-block">Volver al Catalogo</a>
			</div>
		</div>
		
	</form>

</body>
</html>