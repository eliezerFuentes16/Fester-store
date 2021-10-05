const socket=io();
// alert(sucursal)
// alert("Socket Activado")
// cPanel
//Usuario: eztbevzf
//Password: HwvSW5#nk^WP
// Hacer Pedido

// --------------------------------------------------------
const inputNombre=document.querySelector(".input-nombre");
const inputDireccion=document.querySelector(".input-direccion");
const inputTelefono=document.querySelector(".input-telefono");
const inputEmail=document.querySelector(".input-email");
const inputObservaciones=document.querySelector(".input-observaciones");
const inputCambio=document.querySelector(".input-cambio");
const btnPedido=document.querySelector(".realizar-pedido");

progreso2=document.querySelector(".progreso2");
divStatusPedido2=document.querySelector(".div-status-pedido2");

status2=document.querySelector(".status2");

progreso2.style.width="25%";
progreso2.style.backgroundColor="#e22e";
divStatusPedido2.style.backgroundColor="#e224";
status2.innerHTML=`
	<i class="fas fa-cart-plus mb-3 fs-4 icono"></i>&nbsp;Nuevo`;


const verificarPedido2=()=>{
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
				divContainer.innerHTML=`<h1>Orden</h1>
				<p class="text-center fs-3 text-danger">No ha pedido nigun producto</p>
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

const numeroR=(min, max)=> { 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const agregarPedidos=(objeto)=>{
	const db=IDBRequest.result;
	const IDBt=db.transaction("pedidos","readwrite");
	const objectStore2=IDBt.objectStore("pedidos");
	objectStore2.add(objeto)
	IDBt.addEventListener("complete",()=>{
		console.log("Objeto Agregado");
	})
}


btnPedido.addEventListener("click",(e)=>{
	e.preventDefault()

	let formaPago=document.querySelector('input[name="formaPago"]:checked');
	let factura=document.querySelector('input[name="Factura"]:checked');
	let nombreRazon=document.querySelector('.input-razon').value;
	let rfc=document.querySelector('.input-rfc').value;

	if (!inputNombre.value){
		inputNombre.classList.add("is-invalid")
	}else{
		inputNombre.classList.remove("is-invalid")
	}

	let validacionEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
	console.log(validacionEmail.test(inputEmail.value))
	if (!inputTelefono.value){
		inputTelefono.classList.add("is-invalid")
	}else{
		inputTelefono.classList.remove("is-invalid")
	}

	if (!inputDireccion.value){
		inputDireccion.classList.add("is-invalid")
	}else{
		inputDireccion.classList.remove("is-invalid")
	}

	if (!inputEmail.value || !validacionEmail.test(inputEmail.value)){
		inputEmail.classList.add("is-invalid")
	}else{
		inputEmail.classList.remove("is-invalid")
	}
	if (inputNombre.value && inputTelefono.value && inputDireccion.value && inputEmail.value && validacionEmail.test(inputEmail.value)){
		if(confirm("Desea realizar este pedido?")){
			

			// -------------------------------

			let total2=0;
			console.log(total2, "total2")
			let pedidosP=[]
			console.log(pedidosP, "pedidos")
			let db=IDBRequest.result;

			const IDBt=db.transaction("pedido","readonly");
			const objectStore2=IDBt.objectStore("pedido");
			const cursor=objectStore2.openCursor();
			cursor.addEventListener("success",()=>{
				if (cursor.result){
					pedidosP.push([cursor.result.key,cursor.result.value]);
					cursor.result.continue();
				}else{
					for (let i = 0; i < pedidosP.length; i++) {
						total2=pedidosP[i][1].total+total2;
					}
					// alert(factura.value)
					// alert(typeof factura.value)
					if (factura.value=="True"){
						factura=true
					}else{
						factura=false
					}
					// alert(factura)
					let idPedido=numeroR(1,10000000)
					

					// Yo inicialize el web socket (Hice la variable "socket") 
					// al principio de este archivo

					// Este objeto es el que se va a enviar al servidor
					// por websocket
					let datosPersonales={
						"datosPersona":{
							"nombre":inputNombre.value,
							"telefono":inputTelefono.value,
							"direccion":inputDireccion.value,
							"email":inputEmail.value,
							"observaciones":inputObservaciones.value,
							"formaPago":formaPago.value,
							"cambio":inputCambio.value,
							"sucursal":sucursal,
							"colonia":colonia,
							"total":total2,
							"factura":factura,
							"nombreRazon":nombreRazon,
							"rfc":rfc
						},"datosPedido":JSON.stringify(pedidosP),
						"idPedido":idPedido
						

					}
					// Enviar Pedido
					console.log(datosPersonales)
					// Enviar Socket o evento en tiempo real
					// aqui es donde yo mando el websocket al servidor
					// Obviamente no existe el controlador que la resiva
					// Porque es controlador estaba en python (flask)
					socket.send(JSON.stringify(datosPersonales))
					// Enviar Socket o evento en tiempo real
					
					// Esta funcion lo que hace es agregar el pedido a el localStorage
					agregarPedidos(datosPersonales)

					// TODAS ESTAS LINEAS COMENTADAS QUE SIGUEN ES 
					// EL ESCUCHA DEL EVENTO MESSAGE QUE LO QUE HACE ES 
					// RECIBIR Y CAMBIAR EN EL FRONT EN TIEMPO REAL 
					// EL STATUS DEL PEDIDO

					


					// socket.on("message",(obj)=>{
					// 	console.log(obj,"datos del evento")
					// 	console.log(obj.datos.idPedido,"datos del evento")
					// 	console.log(idPedido,"datos del evento")
					// 	if (obj.tipoE=="RegistrarP" && obj.datos.idPedido==idPedido){
					// 		let folio=document.querySelector(".folio");
					// 		let divOrdenes=document.querySelector(".div-ordenes");
					// 		let divObservaciones=document.querySelector(".observaciones");
					// 		console.log(obj.datos);
					// 		datos=obj.datos;
					// 		folio.textContent="Folio "+datos.folio;
					// 		console.log(Array(datos.productos))
					// 		divOrdenes.innerHTML="";
					// 		divObservaciones.innerHTML="";
					// 		//let productos2=JSON.stringify(datos.productos)
					// 		let cambio=""
					// 		if (datos.cambio!=""){
					// 			cambio=`<p><strong>Cambio de:</strong> $${datos.cambio}</p>`
					// 		}
					// 		divObservaciones.innerHTML+=`
					// 		<p><strong>Nombre:</strong> ${datos.nombre}</p>
					// 		<p><strong>Dirección:</strong> ${datos.direccion}</p>
					// 		<p><strong>Telefono:</strong> ${datos.telefono}</p>
					// 		<p><strong>Email:</strong> ${datos.email}</p>
					// 		<p><strong>Observaciones:</strong> ${datos.observaciones}</p>
					// 		<p><strong>Forma de pago:</strong> ${datos.formaPago}</p>
					// 		${cambio}
					// 		<p><strong>Total:</strong> $${datos.total}</p>

					// 		`
					// 		let productos=JSON.parse(datos.productos)
					// 		console.log(productos, "producto")
					// 		console.log(typeof productos, "productos[0]")
					// 		for (var i = 0; i < productos.length; i++) {
					// 			console.log(productos[i][1].nombre)
					// 			let extra="";
							
					// 			divOrdenes.innerHTML+=`
					// 				<p>${productos[i][1].cantidad}&nbsp;<strong>
					// 				${productos[i][1].nombre}</strong></p>
					// 			`
					// 		}

							
					// 		modal2.style.height = "100%";
					// 		modalC2.style.width="90%"
					// 		// setTimeout(()=>{

					// 		// 	// modal2.style.padding="0 20px 20px 20px"
					// 		// },650)
					// 		body.style.position = "static";
					// 		body.style.height = "100%";
					// 		body.style.overflow = "hidden";
					// 		progreso.style.width="25%";
					// 		progreso.style.backgroundColor="#e22e";
					// 		divStatusPedido.style.backgroundColor="#e224";
					// 		status.innerHTML=`
					// 			<i class="fas fa-cart-plus mb-3 fs-4 icono"></i>&nbsp;Nuevo`;

							
					// 		divContainer.innerHTML=`<h1>Orden</h1>
					// 			<p class="text-center fs-3 text-danger">No ha pedido ningun producto</p>
					// 			<a href="/Catalogo" class="btn btn-primary m-auto d-block">Volver al Catalogo</a>`
					// 		//divContainer.style.display="none";
					// 		// divContainerStatus.style.display="block";

						
					// 	}else if(obj.tipoE=="NuevoStatus"){
					// 		console.log(obj.datos,"STATUS CAMBIO")
					// 		console.log(idPedido)
					// 		console.log(obj.idToken,"obj.idToken")
					// 		if (idPedido==obj.idToken){
					// 			const borrarTodosPedido=()=>{
					// 				let db3=IDBRequest.result;
					// 				pedidosTable=[]
					// 				const IDBt3=db3.transaction("pedidos","readonly");
					// 				const objectStore3=IDBt3.objectStore("pedidos");
					// 				const cursor3=objectStore3.openCursor();
					// 				cursor3.addEventListener("success",()=>{
					// 					if (cursor3.result){
					// 						pedidosTable.push([cursor3.result.key,cursor3.result.value]);
					// 						cursor3.result.continue();
					// 					}else{
					// 						let db=IDBRequest.result;
					// 						let IDBo=db.transaction("pedidos","readwrite");
					// 						let objectStore2=IDBo.objectStore("pedidos");
											
					// 						for (var i = 0; i < pedidosTable.length; i++) {
					// 							objectStore2.delete(pedidosTable[i][0])
					// 						}

											
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
					// 				})
					// 			}
					// 			if (obj.datos=="En Bodega"){

					// 				console.log(status)
									
					// 				progreso.style.width="50%";
					// 				progreso.style.backgroundColor="#dd0e";
					// 				divStatusPedido.style.backgroundColor="#dd04";
					// 				status.innerHTML=`
					// 				<i class="fas fa-store mb-3 fs-4 icono"></i>&nbsp;En Bodega`;

					// 				progreso2.style.width="50%";
					// 				progreso2.style.backgroundColor="#dd0e";
					// 				divStatusPedido2.style.backgroundColor="#dd04";
					// 				status2.innerHTML=`
					// 				<i class="fas fa-store mb-3 fs-4"></i>&nbsp;En Bodega`;
					// 			}

					// 			else if (obj.datos=="Domicilio"){

					// 				console.log(status)
									
					// 				progreso.style.width="75%";
					// 				progreso.style.backgroundColor="#777";
					// 				divStatusPedido.style.backgroundColor="#ddd4";
					// 				status.innerHTML=`
					// 				<i class="fas fa-truck-moving mb-3 fs-4 icono"></i>&nbsp;En Camino`;


					// 				progreso2.style.width="75%";
					// 				progreso2.style.backgroundColor="#777";
					// 				divStatusPedido2.style.backgroundColor="#ddd4";
					// 				status2.innerHTML=`
					// 				<i class="fas fa-truck-moving mb-3 fs-4 icono"></i>&nbsp;En Camino`;

								
					// 			}else if (obj.datos=="Entregado"){

					// 				console.log(status)
					// 				let t=setInterval(borrarTodosPedido,10000)
									
					// 				progreso.style.width="100%";
					// 				progreso.style.backgroundColor="#4e3e";
					// 				divStatusPedido.style.backgroundColor="#4e34";
					// 				status.innerHTML=`
					// 				<i class="fas fa-check icono mb-3 fs-4"></i>&nbsp;Entregado`;

					// 				progreso2.style.width="100%";
					// 				progreso2.style.backgroundColor="#4e3e";
					// 				divStatusPedido2.style.backgroundColor="#4e34";
					// 				status2.innerHTML=`
					// 				<i class="fas fa-check icono mb-3 fs-4"></i>&nbsp;Entregado`;
					// 			}else if (obj.datos=="Cancelado"){
					// 				let t=setInterval(borrarTodosPedido,10000)
					// 				console.log(status)
									
					// 				progreso.style.width="100%";
					// 				progreso.style.backgroundColor="#f006";
					// 				divStatusPedido.style.backgroundColor="#f006";
					// 				status.innerHTML=`
					// 				<i class="fas fa-exclamation-triangle icono mb-3 fs-4"></i>&nbsp;Su Pedido Ha sido Cancelado`;
									
					// 				progreso2.style.width="100%";
					// 				progreso2.style.backgroundColor="#f006";
					// 				divStatusPedido2.style.backgroundColor="#f006";
					// 				status2.innerHTML=`
					// 				<i class="fas fa-exclamation-triangle icono mb-3 fs-4"></i>&nbsp;Su Pedido Ha sido Cancelado`;
								
					// 			}
					// 		}

					// 	}


					// })
										
					let db=IDBRequest.result;
					let IDBo=db.transaction("pedido","readwrite");
					let objectStore2=IDBo.objectStore("pedido");
					for (let i = 0; i < pedidosP.length; i++) {
						
						objectStore2.delete(pedidosP[i][0])
					}

					verificarPedido2()
					inputNombre.value=""
					inputTelefono.value=""
					inputDireccion.value=""
					inputEmail.value=""
				}
			})

			// --------------------------------
			fCerrar()
			
		}
	}
});


// socket.on("message",(obj)=>{
	
// 	if (obj.tipoE=="Id_Invalido"){
// 		console.log(obj)
		
// 	}
// })



// socket.on("message",(obj)=>{
	
// 	if (obj.tipoE=="verificarPedido"){
// 		console.log(obj)
		
// 	}
// })
