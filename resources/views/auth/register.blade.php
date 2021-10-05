@extends('layouts.app')

@section('content')
<link rel="stylesheet" type="text/css" href="{!! asset('bootstrap/css/bootstrap.css') !!}">
    <link rel="shortcut icon" href="{!! asset('media/logo.ico') !!}" />
    <link rel="stylesheet" type="text/css" href="{!! asset('icons/css/all.css') !!}">
    <link rel="stylesheet" type="text/css" href="{!! asset('css/clientes/registerC.css') !!}">
<title>Registrarse | Fester</title>
                    <form method="POST" action="{{ route('register') }}" class="form" style=" position: absolute; right:  0; left: 0; top:0; bottom:0;margin:auto:">
                        <div class="form__container pb-4">
                            <h2 class="form__title pt-4">Registrarse</h2>
                        @csrf
                            <div class="form__group">
                                <div class="d-flex div-inputs">
                            <!-- <div class="form-group row"> -->
                                    
                                        

                                        <div class="">
                                            <input placeholder=" " id="user" type="text" class="form__input @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                                            <label for="name" class="form__label">Nombre</label>
                                             <span class="form__line"></span>
                                            @error('name')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                         </div>


                                    
                                        <!-- <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label> -->

                                        <div class="">
                                            <input placeholder=" " id="email" type="email" class="form__input @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
                                            <label for="name" class="form__label">Email</label>
                                             <span class="form__line"></span>
                                            @error('email')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        
                                        </div>
                                    </div>
                                    
                                    <div class="d-flex div-inputs">

                                            <div class="">
                                                <input placeholder=" " id="password" type="password" class="form__input @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
                                                <label for="password" class="form__label">Contraseña</label>
                                                <span class="form__line"></span>
                                                @error('password')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>


                                            <div class="">
                                                <input placeholder=" " id="password" type="password" class="form__input" name="password_confirmation" required autocomplete="new-password">
                                                <label for="password_confirmation" class="form__label">Confirmar contraseña</label>
                                                <span class="form__line"></span>
                                            </div>
                                       
                                    </div>
                                    <button type="submit" id="button" value="Acceder" class="">Acceder</button>
                                    <p class="text-center mt-4">Ya estas registrado? <a href="/login/clientes">Accede Aqui</a></p>
                            </div>
                        </div>  <!-- form-container -->
                    </form>
             
@endsection
