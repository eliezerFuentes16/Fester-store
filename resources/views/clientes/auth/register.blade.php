<!DOCTYPE html>
<html>
<head>
	<title>Empresa | Registrarse</title>
	<link rel="stylesheet" type="text/css" href="{!! asset('bootstrap/css/bootstrap.css') !!}">
	<link rel="shortcut icon" href="{!! asset('media/logo.ico') !!}" />
	<link rel="stylesheet" type="text/css" href="{!! asset('icons/css/all.css') !!}">
	<link rel="stylesheet" type="text/css" href="{!! asset('css/clientes/registerC.css') !!}">

</head>
<body>
	<form class="form" method="POST" action="{{ route('register') }}">
		<div class="form__container">
			<h2 class="form__title pt-4">Registrarse</h2>
			<div class="form__group">
				<div class="d-flex div-inputs">
					<div>
						<input required="True" autocomplete="off" type="text" id="name" class="form__input" name="name" placeholder=" ">
						<label for="name" class="form__label">Nombre</label>
						<span class="form__line"></span>
					</div>
					@csrf
					<div>
						<input required="True" autocomplete="off" type="email" id="email" class="form__input" name="email" placeholder=" ">
						<label for="name" class="form__label">Email</label>
						<span class="form__line"></span>
					</div>
				</div>
				<div class="d-flex div-inputs">
				
					<div>	
						<input required="True" autocomplete="off" type="password" id="user" class="form__input" name="password" placeholder=" ">
						<label for="name" class="form__label">Contraseña</label>
						<span class="form__line"></span>
					</div>

					<div>	
						<input required="True" autocomplete="off" type="password" id="password" class="form__input" name="password_confirmation" placeholder=" ">
						<label for="name" class="form__label">Confirmar contraseña</label>
						<span class="form__line"></span>
					</div>

				</div>
				
				<button type="submit" id="button" value="Acceder">Acceder</button>
				<p class="text-center mt-4">Ya estas registrado? <a href="/login/clientes">Accede Aqui</a></p>
				
			</div>
		</div>
		
	</form>

</body>
</html>