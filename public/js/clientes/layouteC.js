let ubicacionPrincipal=window.pageYOffset;
let headerDiv=document.querySelector(".header-div");
let divNav=document.querySelector(".div-nav");
let user2=document.querySelector(".user2");
let ulOption=document.querySelector(".ul-option");
let perfil=document.querySelector(".perfil");
// let body=document.querySelector(".body")
console.log(perfil)
let desplegado=false;

if (perfil!=null){
	let perfilOpcion=document.querySelector("#perfil-opcion");
	perfil.addEventListener("click",()=>{
		if (!desplegado) {
			perfilOpcion.style.height="120px";
			desplegado=true
		}
		else if (desplegado) {
			perfilOpcion.style.height="0";
			desplegado=false
		}



	});

}


window.onscroll=function(){
	let desplazamiento=window.pageYOffset;
	if (ubicacionPrincipal >= desplazamiento){
		headerDiv.style.top="0";
		divNav.style.top="124px";
	}else{
		
		headerDiv.style.top="-126px";
		divNav.style.top="-1px";
		try{
			ulOption.style.height="0px"
			ulOption.style.padding="0"
			abierto=false;	
		}catch{
			error="error"
		}
		
	}

	ubicacionPrincipal=desplazamiento;
}
let abierto=false;
try{
	user2.addEventListener("click",()=>{
		if (abierto==false)
		{
			try{
				ulOption.style.height="80px"
				ulOption.style.padding="8px"
				abierto=true;
			}catch{
				error="error"

			}
			
		}else{
			try{
				ulOption.style.height="0px"
				ulOption.style.padding="0"
				abierto=false;	
			}catch{
				error="error"
			}
		}

	})
}catch{
	error="error"
}

let barraAbierta=false;
let barra=document.querySelector(".div-barra");
let divResponsive=document.querySelector(".div-li-responsive");

let logueado=divResponsive.getAttribute("logueado");
if (logueado!=""){
	logueado=true
}else{
	logueado=false

}
// alert(logueado)
barra.addEventListener("click",()=>{
	if (barraAbierta==false){
		if (logueado==true) divResponsive.style.height="200px"
		else divResponsive.style.height="100px"
		barraAbierta=true;
	}else{
		divResponsive.style.height="0"
		barraAbierta=false;
	}


})

// VISA = /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
//     MASTERCARD = /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]   {4}$/;
//     AMEX = /^3[47][0-9-]{16}$/;
//     CABAL = /^(6042|6043|6044|6045|6046|5896){4}[0-9]{12}$/;
//     NARANJA =   /^(589562|402917|402918|527571|527572|0377798|0377799)[0-9]*$/;

//     $("#err_nro_tarjeta").html("");
//     if(luhn(codigo)){
//         if(opt == "VISA" && !codigo.match(VISA)){
//             alert(msg);
//         }

// calve publica: pk_test_51JePvOJmZWIJXcPLfWNd0jqc2VZ1XKkCzRMKJpfMPipaGTeYf0kcql67mTLrJzZmdscs6JzlKVqJxvPu2xvbvYO800lMkAcrF9
// clave privada: sk_test_51JePvOJmZWIJXcPLDG5pD2n4ojMhobiNYsKu0Lma9iU4azYlmO2HHwY0Oxd6bRKAqiIfu2El2TYW4cmnjtdCQZ4V00oDEHFZ7b
