const divContainer=document.querySelector(".div-container");
let sucursal=divContainer.getAttribute("sucursal");
let colonia=divContainer.getAttribute("colonia");
let formaPagoEfectivo=document.querySelector(".formaPagoEfectivo");
let formaPagoTarjeta=document.querySelector(".formaPagoTarjeta");
let radios=document.getElementsByClassName("radios");
let inputC=document.querySelector(".input-C");
let inputT=document.querySelector(".div-pago-tarjeta");
let progreso2=document.querySelector(".progreso2");
let divStatusPedido2=document.querySelector(".div-status-pedido2");

let status2=document.querySelector(".status2");
let divContainerStatus=document.querySelector(".div-container-status");
let folio=document.querySelector(".folio");
let divOrdenes=document.querySelector(".div-ordenes");
let divObservaciones=document.querySelector(".observaciones");
let factura=document.querySelector(".factura");
let ticket=document.querySelector(".ticket");
let divDatosFactura=document.querySelector(".div-datos-factura");

factura.addEventListener("click",()=>{
	divDatosFactura.style.height="250px";
});
ticket.addEventListener("click",()=>{
	divDatosFactura.style.height="0";

})
// const socket=io();
alert("Socket Activado2")
for (var i = 0; i < radios.length; i++) {
	radios[i].addEventListener("click",()=>{
		inputC.style.display="none";
		inputT.style.height="0";
	})
}
formaPagoEfectivo.addEventListener("click",()=>{
	inputC.style.display="block";
})

formaPagoTarjeta.addEventListener("click",()=>{
	inputT.style.height="360px";
})
inputC.style.display="none";


let pedidos=[]
const IDBRequest= window.indexedDB.open("pedidos",1);
const leerTodo=()=>{
	IDBRequest.addEventListener("error",()=>{console.log("error")})
	IDBRequest.addEventListener("success",()=>{
		let db=IDBRequest.result;
		console.log("leerTodo2")

		const IDBt=db.transaction("pedido","readonly");
		const objectStore2=IDBt.objectStore("pedido");
		const cursor=objectStore2.openCursor();
		cursor.addEventListener("success",()=>{
			if (cursor.result){
				pedidos.push([cursor.result.key,cursor.result.value]);
				cursor.result.continue();
			}else{
				divContainer.innerHTML="<h1>Pedido</h1>"

				console.log("pedidos")
				let pedido2=0;
				let total2=0;
				for (let z = 0; z < pedidos.length; z++) {
					pedido2++;
					total2=pedidos[z][1].total+total2;
					
					
					divContainer.innerHTML+=`<div class="div-pedido div-pedido${pedidos[z][0]}">

				<div class="div-producto">
					<h2>${pedidos[z][1].nombre}</h2>
					<p class="fs-4">${pedidos[z][1].cantidad}</p>
					<p class="fs-4">$${pedidos[z][1].total.toFixed(2)}</p>
					<span><i class="fas fa-times cerrar borrarP" ide="${pedidos[z][0]}"></i></span>
				</div>
				<div class="div-detalles">
					<p>${pedidos[z][1].descripcion}</p>
					
				
					
				</div>
				<br><hr>
			</div>`
					
					
					
				}console.log(pedidos.length)
				if (pedidos.length!=0){
					divContainer.innerHTML+=`<h3 class="pb-4 text-end total">Total: $${total2.toFixed(2)}</h3><div class="div-button">

					<a href="/Catalogo" class="btn btn-primary">Volver al Catalogo</a>
					<button href="" class="btn btn-primary hacer-pedido">Hacer Pedido</button>
					</div>`
					let btnHacerPedido=document.querySelector(".hacer-pedido");
					btnHacerPedido.addEventListener("click",function(event){
						event.preventDefault();
						idPedido=event.target.getAttribute("id-pedido")
						
						modal.style.height = "100%";
						modalC.style.width="90%"
						setTimeout(()=>{

							modal.style.padding="20px"
						},650)
						body.style.position = "static";
						body.style.height = "100%";
						body.style.overflow = "hidden";
						
					})

				}else{
					divContainer.innerHTML+=`
					<p class="text-center fs-3 text-danger">No ha pedido ningun producto</p>
					<a href="/Catalogo" class="btn btn-primary m-auto d-block">Volver al Catalogo</a>`
				}
				console.log(total2)
				pedido2=0;
				total2=0;
				pedidos=[];
				
				let cerrar=document.getElementsByClassName("borrarP");
				
				for (let x = 0; x < cerrar.length; x++) {
					cerrar[x].addEventListener("click",function(e){
						ide=parseInt(e.target.getAttribute("ide"));
						eliminarProductoPedido(ide)
						
					})
				}
			}
		})
	})
}

let pedidosV=[];

const verificarPedido=()=>{
	let total2=0;
	console.log(total2, "total2")
	pedidosV=[]
	console.log(pedidosV, "pedidos")
	let db=IDBRequest.result;

	const IDBt=db.transaction("pedido","readonly");
	const objectStore2=IDBt.objectStore("pedido");
	const cursor=objectStore2.openCursor();
	cursor.addEventListener("success",()=>{
		if (cursor.result){
			pedidosV.push([cursor.result.key,cursor.result.value]);
			cursor.result.continue();
		}else{
			console.log(pedidosV.length)
			if (pedidosV.length==0){
				divContainer.innerHTML=`<h1>Pedido</h1>
				<p class="text-center fs-3 text-danger">No ha pedido ningun producto</p>
				<a href="/Catalogo" class="btn btn-primary m-auto d-block">Volver al Catalogo</a>`
			}else{
				for (let i = 0; i < pedidosV.length; i++) {
					total2=pedidosV[i][1].total+total2;
				}
				document.querySelector(".total").textContent="Total: $"+total2
			}
		}
	})
	
}

const eliminarProductoPedido=(key)=>{
	

	let db=IDBRequest.result;
	let IDBo=db.transaction("pedido","readwrite");
	let objectStore2=IDBo.objectStore("pedido");
	objectStore2.delete(key)
	
		console.log("listo")
		let divPedido=document.querySelector(".div-pedido"+key);
		divPedido.style.width="0"
		divPedido.style.overflow="hidden"
		divPedido.style.height="0"
		divPedido.style.padding="0"
		//leerTodo()
		verificarPedido()
}


// let pedidoYaRealizado=false;
// IDBRequest.addEventListener("success",()=>{

// 	let db3=IDBRequest.result;
// 	pedidosTable=[]
// 	const IDBt3=db3.transaction("pedidos","readonly");
// 	const objectStore3=IDBt3.objectStore("pedidos");
// 	const cursor3=objectStore3.openCursor();
// 	cursor3.addEventListener("success",()=>{
// 		if (cursor3.result){
// 			pedidosTable.push([cursor3.result.key,cursor3.result.value]);
// 			cursor3.result.continue();
// 		}else{
// 			// console.log(JSON.parse(pedidosTable[0][1].datosPedido))
// 			//console.log(pedidosTable[0][0])
// 			if (pedidosTable.length!=0){

// 				divContainer.style.display="none"
// 				datosProductos=pedidosTable

// 				for (var i = 0; i < datosProductos.length; i++) {
// 					datosPersona=datosProductos[i][1].datosPersona
// 					datosPedido=JSON.parse(datosProductos[i][1].datosPedido)
// 					let idP=pedidosTable[i][1].idPedido
// 					console.log(datosPedido)
// 					console.log(datosPersona.total)
// 					console.log(idP)
// 					datos={
// 						tipoE:"VerificarPedido",
// 						idPedido:idP
// 					};
// 					socket.send(JSON.stringify(datos))
// 					const borrarPedido=(idPedido2)=>{
// 						let db=IDBRequest.result;
// 						let IDBo=db.transaction("pedidos","readwrite");
// 						let objectStore2=IDBo.objectStore("pedidos");

// 						divContainer.innerHTML=`<h1>Pedido</h1>
// 							<p class="text-center fs-3 text-danger">No ha pedido ningun producto</p>
// 							<a href="/Catalogo" class="btn btn-primary m-auto d-block">Volver al Catalogo</a>`
						
						
// 						objectStore2.delete(idPedido2)
// 						divContainer.style.display="block"
// 						modal2.style.height = "0%";
// 						modalC2.style.width="0%"
// 						setTimeout(()=>{

// 							modal2.style.padding="0"
// 						},650)
// 						divStatusPedido2.style.display="none";
// 						body.style.position = "inherit";
// 						body.style.height = "auto";
// 						body.style.overflow = "visible";
// 					}
// 					socket.on("message",(obj)=>{

// 						if (obj.datos=="Nuevo"){
// 							progreso2.style.width="25%";
// 							progreso2.style.backgroundColor="#e22e";
// 							divStatusPedido2.style.backgroundColor="#e224";
// 							status2.innerHTML=`
// 								<i class="fas fa-cart-plus mb-3 fs-4 icono"></i>&nbsp;Nuevo`;
// 							progreso.style.width="25%";
// 							progreso.style.backgroundColor="#e22e";
// 							divStatusPedido.style.backgroundColor="#e224";
// 							status.innerHTML=`
// 								<i class="fas fa-cart-plus mb-3 fs-4 icono"></i>&nbsp;Nuevo`;

// 						}else if(obj.datos=="En Bodega"){
																
// 							progreso.style.width="50%";
// 							progreso.style.backgroundColor="#dd0e";
// 							divStatusPedido.style.backgroundColor="#dd04";
// 							status.innerHTML=`
// 								<i class="fas fa-utensils mb-3 fs-4 icono"></i>&nbsp;En Bodega`;

// 							progreso2.style.width="50%";
// 							progreso2.style.backgroundColor="#dd0e";
// 							divStatusPedido2.style.backgroundColor="#dd04";
// 							status2.innerHTML=`
// 								<i class="fas fa-utensils mb-3 fs-4"></i>&nbsp;En Bodega`;
						
// 						}else if(obj.datos=="Domicilio"){


// 							progreso.style.width="75%";
// 							progreso.style.backgroundColor="#777";
// 							divStatusPedido.style.backgroundColor="#ddd4";
// 							status.innerHTML=`
// 								<i class="fas fa-truck-moving mb-3 fs-4 icono"></i>&nbsp;En Camino`;

// 							progreso2.style.width="75%";
// 							progreso2.style.backgroundColor="#777";
// 							divStatusPedido2.style.backgroundColor="#ddd4";
// 							status2.innerHTML=`
// 								<i class="fas fa-truck-moving mb-3 fs-4 icono"></i>&nbsp;En Camino`;

// 						}else if(obj.datos=="Entregado"){

// 							let t=setInterval(borrarPedido,10000,pedidosTable[0][0])

// 							progreso.style.width="100%";
// 							progreso.style.backgroundColor="#4e3e";
// 							divStatusPedido.style.backgroundColor="#4e34";
// 							status.innerHTML=`
// 								<i class="fas fa-check icono mb-3 fs-4"></i>&nbsp;Entregado`;

// 							progreso2.style.width="100%";
// 							progreso2.style.backgroundColor="#4e3e";
// 							divStatusPedido2.style.backgroundColor="#4e34";
// 							status2.innerHTML=`
// 								<i class="fas fa-check icono mb-3 fs-4"></i>&nbsp;Entregado`;
						
// 						}else if (obj.datos=="Cancelado"){
// 							let t=setInterval(borrarPedido,10000,pedidosTable[0][0])

// 							progreso.style.width="100%";
// 							progreso.style.backgroundColor="#f006";
// 							divStatusPedido.style.backgroundColor="#f006";
// 							status.innerHTML=`
// 							<i class="fas fa-exclamation-triangle icono mb-3 fs-4"></i>&nbsp;Su Pedido Ha sido Cancelado`;
									
// 							progreso2.style.width="100%";
// 							progreso2.style.backgroundColor="#f006";
// 							divStatusPedido2.style.backgroundColor="#f006";
// 							status2.innerHTML=`
// 							<i class="fas fa-exclamation-triangle icono mb-3 fs-4"></i>&nbsp;Su Pedido Ha sido Cancelado`;
								
// 						}

// 					})
// 					let cambio=""
// 					if (datosPersona.cambio!=""){
// 								cambio=`<p><strong>Cambio de:</strong> $${datosPedido.cambio}</p>`
// 							}
// 					divObservaciones.innerHTML+=`
// 						<p><strong>Nombre:</strong> ${datosPersona.nombre}</p>
// 						<p><strong>Dirección:</strong> ${datosPersona.direccion}</p>
// 						<p><strong>Telefono:</strong> ${datosPersona.telefono}</p>
// 						<p><strong>Email:</strong> ${datosPersona.email}</p>
// 						<p><strong>Observaciones:</strong> ${datosPersona.observaciones}</p>
// 						<p><strong>Forma de pago:</strong> ${datosPersona.formaPago}</p>
// 						${cambio}
// 						<p><strong>Total:</strong> $${datosPersona.total}</p>`

// 					for (var i2 = 0; i2 < datosPedido.length; i2++) {
// 								console.log(datosPedido[i2][1].nombre)
// 								let extra="";
								
// 								divOrdenes.innerHTML+=`
// 									<p>${datosPedido[i2][1].cantidad}&nbsp;<strong>
// 									${datosPedido[i][1].nombre}</strong></p>
// 								`
// 					}
// 				}

// 				modal2.style.height = "100%";
// 				modalC2.style.width="90%"
// 				progreso2.style.width="25%";
// 				progreso2.style.backgroundColor="#e22e";
// 				divStatusPedido2.style.backgroundColor="#e224";
// 				status2.innerHTML=`
// 					<i class="fas fa-cart-plus mb-3 fs-4 icono"></i>&nbsp;Nuevo`;
	
// 				divContainerStatus.style.display="block";
							
// 				body.style.position = "static";
// 				body.style.height = "100%";
// 				body.style.overflow = "hidden";
// 			}	

// 		}
// 	})

// })

leerTodo()

// Modal

const cerrar=document.querySelector(".cerrar");
const informacion=document.querySelector(".informacion");
const body = document.getElementsByTagName("body")[0];
const modalC=document.querySelector(".modal-content")
let modal = document.querySelector(".div-mostrar");
let verPedido = document.querySelector(".ver-pedido");

verPedido.addEventListener("click",(e)=>{
	e.preventDefault()
	modal2.style.height = "100%";
	modalC2.style.width="97%"
							
	body.style.position = "static";
	body.style.height = "100%";
	body.style.overflow = "hidden";
							

})


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


const modalC2=document.querySelector(".modal-content2")
let modal2 = document.querySelector(".div-mostrar2");
	

const progreso=document.querySelector(".progreso");
let divProgreso = document.querySelector(".div-container-progreso");
const divStatusPedido=document.querySelector(".div-status-pedido");
const status = document.querySelector(".status");
const icono=document.querySelector(".icono");


progreso.style.width="25%";
progreso.style.backgroundColor="#e22e";
divStatusPedido.style.backgroundColor="#e224";
status.innerHTML=`
	<i class="fas fa-cart-plus mb-3 fs-4 icono"></i>&nbsp;Nuevo`;


const cerrar2=document.querySelector(".cerrar2");

const fCerrar2=()=>{
	modal2.style.height = "0%";
		modalC2.style.width="0%"
		setTimeout(()=>{

			modal2.style.padding="0"
		},650)
		body.style.position = "inherit";
		body.style.height = "auto";
		body.style.overflow = "visible";
}

cerrar2.addEventListener("click",()=>{
	fCerrar2()

})

