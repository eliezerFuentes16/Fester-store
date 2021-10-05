let divContainer=document.querySelector(".div-container");
// alert("hola")

const divMostrar=document.querySelector(".div-mostrar");

const cerrar=document.querySelector(".cerrar");
const folio=document.querySelector(".folio");
const informacion=document.querySelector(".informacion");
const body = document.getElementsByTagName("body")[0];
const modalC=document.querySelector(".modal-content")
let modal = document.getElementById("tvesModal");
let btn = document.getElementById("btnModal");
let span = document.getElementsByClassName("close")[0];
const divObservaciones=document.querySelector(".div-observaciones-pedido");
const divProductosPedidos=document.querySelector(".div-productos-pedido")


const btnMostrar=()=>{
	let btnMostrarDatos=document.getElementsByClassName("botones1");
	for (var b = 0; b < btnMostrarDatos.length; b++) {
		btnMostrarDatos[b].addEventListener("click",function(event){
			event.preventDefault();
			idPedido=event.target.getAttribute("id-pedido")
			console.log(idPedido)
			modal.style.height = "100%";
			modalC.style.width="97%"
			setTimeout(()=>{

				modal.style.padding="20px"
			},650)
			body.style.position = "static";
			body.style.height = "100%";
			body.style.overflow = "hidden";
			folio.innerHTML="Folio "+idPedido
			divProductosPedidos.innerHTML=""
			let idPedidoInformacion=this.getAttribute("id-pedido");
			let nombre=this.getAttribute("nombre");
			let telefono=this.getAttribute("telefono");
			let direccion=this.getAttribute("direccion");
			let email=this.getAttribute("email");
			let fecha=this.getAttribute("fecha");
			let formapago=this.getAttribute("formapago");
			let cambio=this.getAttribute("cambio");
			let colonia=this.getAttribute("colonia");
			let sucursal=this.getAttribute("sucursal");
			let status2=this.getAttribute("status");
			let total=this.getAttribute("total");
			let PRODUCTOS;
			console.log(this.getAttribute("productos"))
			console.log(typeof this.getAttribute("productos"))
			
			PRODUCTOS=JSON.parse(this.getAttribute("productos"));
			console.log(typeof PRODUCTOS)
			
			// console.log(total)
			let cambioDe="";
			if (cambio){
				cambioDe=`<p><strong>Cambio de: </strong>$${cambio}</p>`
			}

			console.log(typeof PRODUCTOS)
			for (var i = 0; i < PRODUCTOS.length; i++) {
				console.log(PRODUCTOS[i][1].nombre)
				let extra="";
				
				divProductosPedidos.innerHTML+=`
				<p>${PRODUCTOS[i][1].cantidad}&nbsp;<strong>
				${PRODUCTOS[i][1].nombre}</strong></p>
				`
			}
			


			divObservaciones.innerHTML=`
				<p><strong>Nombre: </strong>${nombre}</p>
				<p><strong>Dirección: </strong>${direccion}</p>
				<p><strong>Telefono: </strong>${telefono}</p>
				<p><strong>Email: </strong>${email}</p>
				<p><strong>Total: </strong>$${total}</p>
				<p><strong>Forma de pago: </strong>${formapago}</p>
				${cambioDe}
				
			`





		})
	}
}


const fCerrar=()=>{
	modal.style.height = "0%";
		modalC.style.width="0%"
		setTimeout(()=>{

			modal.style.padding="0"
		},650)
		body.style.position = "inherit";
		body.style.height = "auto";
		body.style.overflow = "visible";
}

cerrar.addEventListener("click",()=>{
	fCerrar()

})

window.addEventListener("click",()=> {
	if (event.target == modal) {
		fCerrar()

	}
})



btnMostrar()



