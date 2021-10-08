const socket=io();

const modalContainer2=document.querySelector(".modalContainer2");
const modalContent2=document.querySelector(".modal-content2");
const cerrar=document.querySelector(".cerrar2");
const btnSeguimiento=document.querySelector(".btn-seguimiento");
const inputSeguimiento=document.querySelector(".input-num-seguimiento");
const folio=document.querySelector(".folio");
const divOrdenes=document.querySelector(".div-ordenes");
let divObservaciones=document.querySelector(".observaciones");
let status=document.querySelector(".status");
const numeroR=(min, max)=> { 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

cerrar.addEventListener("click",()=>{
	modalContainer2.style.height="0"
	modalContent2.style.width="0"
})

btnSeguimiento.addEventListener("click",(e)=>{
	e.preventDefault()
	if (inputSeguimiento.value!=""){
		let numeroRandom=numeroR(1,1000000)
		datos333={
			tipoE:"seguimientoPedido",
			folio:inputSeguimiento.value,
			idPeticion:numeroRandom
		};
		socket.send(JSON.stringify(datos333))
		fetch("/api/seguimiento/"+inputSeguimiento.value).then(e=>e.json()).then(res=>{
			if (res.length==0){
					return inputSeguimiento.classList.add("is-invalid");
				}


			datos=res[[0]]
			console.log(datos);
		// })
		// socket.on("message",(obj)=>{
			// console.log(datos);
			
				
					
					folio.innerHTML="Folio "+datos.id;

					divOrdenes.innerHTML="";
					divObservaciones.innerHTML="";
					datos2=JSON.parse(datos.PRODUCTOS);
					console.log(datos2);
					for (var i = 0; i < datos2.length; i++) {
						
						divOrdenes.innerHTML+=`<p class="fs-5"><strong>${datos2[i][1].cantidad} ${datos2[i][1].nombre}</strong></p>`
						let cambio=""
						

					}
					let cambio="";
					
					
					if (datos.STATUS=="Nuevo"){
						status.innerHTML=`<i class="fas fa-cart-plus fs-4"></i>&nbsp;Nuevo`
					}else if (datos.STATUS=="En Bodega"){
						status.innerHTML=`<i class="fas fa-store fs-4"></i>&nbsp;En Bodega`
					}else if (datos.STATUS=="Domicilio"){
						status.innerHTML=`<i class="fas fa-truck-moving fs-4"></i>&nbsp;En Camino`
					}else if (datos.STATUS=="Entregado"){
						status.innerHTML=`<i class="fas fa-check fs-4"></i>&nbsp;Entregado`
					}else if (datos.STATUS=="Cancelado"){
						status.innerHTML=`<i class="fas fa-exclamation-triangle fs-4"></i>&nbsp;Su pedido ha sido cancelado`
					}

					if (datos.CAMBIO!=""){
						cambio=`<p><strong>Cambio de:</strong> $${datos.CAMBIO}</p>`
					}
					divObservaciones.innerHTML+=`
						<p class="fs-5"><strong>Nombre:</strong> ${datos.NOMBRE}</p>
						<p class="fs-5"><strong>Dirección:</strong> ${datos.DIRECCION}</p>
						<p class="fs-5"><strong>Telefono:</strong> ${datos.TELEFONO}</p>
						<p class="fs-5"><strong>Email:</strong> ${datos.EMAIL}</p>
						<p class="fs-5"><strong>Fecha:</strong> ${datos.FECHAHORA}</p>
						<p class="fs-5"><strong>Observaciones:</strong> ${datos.OBSERVACIONES}</p>
						<p class="fs-5"><strong>Forma de pago:</strong> ${datos.FORMAPAGO}</p>
						${cambio}
						<p class="fs-5"><strong>Total:</strong> $${datos.TOTAL}</p>`
					inputSeguimiento.classList.remove("is-invalid");
					modalContainer2.style.height="100%";
					modalContent2.style.width="97%";

				
			
			
		})
		
	}
	else{
		inputSeguimiento.classList.add("is-invalid")
	}

})
