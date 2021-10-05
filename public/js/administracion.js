let divBody=document.querySelector(".div-body");
let notificacion=document.getElementById("audio");

notificacion.muted = false;

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
			// let colonia=this.getAttribute("colonia");
			// let sucursal=this.getAttribute("sucursal");
			let status2=this.getAttribute("status");
			let total=this.getAttribute("total");
			let factura=this.getAttribute("factura");
			let NombreRazonSocial=this.getAttribute("NombreRazonSocial");
			let rfc=this.getAttribute("rfc");
			
			let observaciones=this.getAttribute("observaciones");
			
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
			let divRazonSocial=""
			if (factura=="True"){
				divRazonSocial=`
				<p><strong>Factura: </strong> Si</p>
				<p><strong>Nombre o razon social: </strong>${NombreRazonSocial}</p>
				<p><strong>RFC: </strong>${rfc}</p>`
			}else{
				divRazonSocial=`
				<p><strong>Factura: </strong> No</p>
				`
			}
			


			divObservaciones.innerHTML=`
				<p><strong>Nombre: </strong>${nombre}</p>
				<p><strong>Dirección: </strong>${direccion}</p>
				<p><strong>Telefono: </strong>${telefono}</p>
				<p><strong>Email: </strong>${email}</p>
				<p><strong>Observaciones: </strong>${observaciones}</p>
				<p><strong>Total: </strong>$${total}</p>
				<p><strong>Forma de pago: </strong>${formapago}</p>
				${divRazonSocial}
				${cambioDe}
				
			`
			let divBotones=document.querySelector(".div-botones")
			
			divBotones.innerHTML=`
			<button class="btn btn-primary boton2 imprimir${idPedido}"
					id-pedido="${idPedido}" 
					nombre="${nombre}" 
					telefono="${ telefono }" 
					direccion="${ direccion }" 
					email="${ email }" 
					fecha="${ fecha }" 
					observaciones="${observaciones}" 
					formapago="${formapago}" 
					cambio="${cambio}" 
					status="${status}" 
					productos="${PRODUCTOS}" 
					total="${total}"
					factura="${factura}"
					rfc="${rfc}
					NombreRazonSocial="${NombreRazonSocial}>IMPRIMIR TICKET</button>`
					

			let btnImprimir=document.querySelector(`.imprimir${idPedido}`);
			btnImprimir.addEventListener("click",()=>{
				let divImprimir="";
				divImprimir=document.createElement("DIV");
				divImprimir.innerHTML="";
				divProduto=document.createElement("DIV");
				divImprimir.setAttribute("id",`imprimir${idPedido}`);
				divProduto.innerHTML="";

				let idPedidoInformacion2=this.getAttribute("id-pedido");
				let nombre2=this.getAttribute("nombre");
				let telefono2=this.getAttribute("telefono");
				let direccion2=this.getAttribute("direccion");
				let email2=this.getAttribute("email");
				let fecha2=this.getAttribute("fecha");
				let formapago2=this.getAttribute("formapago");
				let cambio2=this.getAttribute("cambio");
				let observaciones2=this.getAttribute("observaciones");
				// let colonia=this.getAttribute("colonia");
				// let sucursal=this.getAttribute("sucursal");
				let status3=this.getAttribute("status");
				let total2=this.getAttribute("total");
				//let factura=this.getAttribute("factura");
				
				let observaciones=this.getAttribute("observaciones");
				let PRODUCTOS2=JSON.parse(this.getAttribute("productos"));
				divProduto.innerHTML=""

				for (var i = 0; i < PRODUCTOS2.length; i++) {
					console.log(PRODUCTOS2[i][1].nombre)
					let extra="";
				
					divProduto.innerHTML+=`
					<p style="margin:auto;width:300px; padding: 5px 6px; font-size:17px">${PRODUCTOS2[i][1].cantidad}&nbsp;<strong>
					${PRODUCTOS2[i][1].nombre}</strong></p>
					`
				}
				

				divImprimir.innerHTML=`
				<h2 style="margin:auto;width:300px; text-align: center">Fester</h2>
			    
			     <p style="margin:auto;width:300px; padding: 5px 6px; font-size:17px">Folio: ${idPedidoInformacion2}</p>
			     <p style="margin:auto;width:300px; padding: 5px 6px; font-size:17px">${fecha2}</p>
			    
			    <span style="margin:auto;display: block;width:300px; ">--------------------------------</span>
			    <p style="margin:auto;width:300px; padding: 5px 6px; font-size:17px">${nombre2}</p>
			    <p style="margin:auto;width:300px; padding: 5px 6px; font-size:17px"><strong>${telefono2}</strong></p>
			    <p style="margin:auto;width:300px; padding: 5px 6px; font-size:17px">${direccion2}</p>
			    <span style="margin:auto;width:300px; text-align: center; display: block;">--------------------------------</span>
			    <h1 style="margin:auto;width:300px; text-align: center">Orden</h1>
			    ${divProduto.innerHTML}
			    <p style="margin:auto;width:300px; padding:6px 5px"><strong>Observaciones: </strong>${observaciones2}</p>
			    <span style="margin:auto;width:300px; text-align: center; display: block;">--------------------------------</span>

			    <p style="margin:auto;width:300px;font-size:22px;padding:6px 10px"><strong>Total:</strong> $${total2}</p>
			    <span style="margin:auto;display: block;width:300px; text-align: center;">********************</span>
			    <span style="margin:auto;display: block;width:300px; text-align: center;">*********Gracias por su compras*********</span>
			    <span style="margin:auto;display: block;width:300px; text-align: center;">*************</span>
			    <span style="margin:auto;display: block;width:300px; text-align: center;">********************</span>`
					
			    section2=document.querySelector(".section2")
				divImprimir.style.display="none";
				divImprimir.style.overflow="hidden";
				divImprimir.style.margin="auto";
				divImprimir.style.width="400px";
				console.log(section2)
			    section2.appendChild(divImprimir)

			 	function imprSelec(nombre) {
			  	 let ficha = document.getElementById(nombre);
			   	 let ventimp = window.open(' ', 'popimpr');
			   	 ventimp.document.write( ficha.innerHTML );
			   	 ventimp.document.close();
			   	 ventimp.print( );
			   	 ventimp.close();
			  	}
			  	imprSelec(`imprimir${idPedido}`)
			})

		})
	}
}
const btnMarcar=()=> 
{
	let btnMarcarComo=document.getElementsByClassName("botones2");

	let t;
	let pedido;
	let numero;
	let idPedido;
	let status;
	for (var i = 0; i < btnMarcarComo.length; i++) {
		btnMarcarComo[i].addEventListener("click",function(e){
			e.preventDefault()
			idPedidos=event.target.getAttribute("id-pedido");
			idP=event.target.getAttribute("id-token-pedido");
			status=this.classList.item(5);
			
			console.log(idPedidos);
			if (status=="nue"){
				pedido=document.querySelector(".div-pedido-"+idPedidos);
				pPedido=document.querySelector(".pe-"+idPedidos);
				aPedido=document.querySelector(".boton-"+idPedidos);
				let datos={
					tipoE:"CambiarStatus",
					idPedido:idPedidos,
					idToken:idP,
					NuevoStatus:"En Bodega",
					
				}
				socket.send(JSON.stringify(datos))
				pedido.classList.replace("nuevo","cocina");
				pPedido.innerHTML='<i class="fas fa-store"></i>&nbsp;En Bodega';
				aPedido.innerHTML="En Bodega";
				aPedido.classList.replace("nue","coci");

			}else if (status=="coci"){
				pedido=document.querySelector(".div-pedido-"+idPedidos);
				pPedido=document.querySelector(".pe-"+idPedidos);
				aPedido=document.querySelector(".boton-"+idPedidos);
				
				let datos={
					tipoE:"CambiarStatus",
					idPedido:idPedidos,
					idToken:idP,
					NuevoStatus:"Domicilio",
					
				}
				socket.send(JSON.stringify(datos))
				pedido.classList.replace("cocina","camino");
				pPedido.innerHTML='<i class="fas fa-truck-moving"></i>&nbsp;En Camino';
				aPedido.innerHTML="Entregado";
				aPedido.classList.replace("coci","cami");

			}else if (status=="cami"){
				pedido=document.querySelector(".div-pedido-"+idPedidos);
				pPedido=document.querySelector(".pe-"+idPedidos);
				aPedido=document.querySelector(".boton-"+idPedidos);
				
				let datos={
					tipoE:"CambiarStatus",
					idPedido:idPedidos,
					idToken:idP,
					NuevoStatus:"Entregado",
					
				}
				socket.send(JSON.stringify(datos))
				pedido.classList.replace("camino","entregado");
				pPedido.innerHTML='<i class="fas fa-check"></i>&nbsp;Entregado';
				aPedido.innerHTML="Pedido Cancelado";
				aPedido.classList.replace("cami","entre");
				try{
					t[idPedidos]=setInterval(desplazar_pedido,60000,idPedidos)
				}catch{
					errores=e
				}

			}else if (status=="entre"){
				pedido=document.querySelector(".div-pedido-"+idPedidos);
				pPedido=document.querySelector(".pe-"+idPedidos);
				aPedido=document.querySelector(".boton-"+idPedidos);
				let datos={
					tipoE:"CambiarStatus",
					idPedido:idPedidos,
					idToken:idP,
					NuevoStatus:"Cancelado",
					
				}
				socket.send(JSON.stringify(datos))
				pedido.classList.replace("entregado","cancelado");
				pPedido.innerHTML='<i class="fas fa-exclamation-triangle"></i>&nbsp;Cancelado';
				aPedido.innerHTML="Volver";
				aPedido.classList.replace("entre","cance");
				try{
					clearTimeout(t[idPedidos])
				}catch{
					console.log('Entregado')
				}
				try{
					t[idPedidos]=setInterval(desplazar_pedido,60000,idPedidos)
				}catch{
					errores=e
				}

				

			}else if (status=="cance"){
				pedido=document.querySelector(".div-pedido-"+idPedidos);
				pPedido=document.querySelector(".pe-"+idPedidos);
				aPedido=document.querySelector(".boton-"+idPedidos);
				let datos={
					tipoE:"CambiarStatus",
					idPedido:idPedidos,
					idToken:idP,
					NuevoStatus:"Entregado",
					
				}
				socket.send(JSON.stringify(datos))
				pedido.classList.replace("cancelado","entregado");
				pPedido.innerHTML='<i class="fas fa-check"></i>&nbsp;Entregado';
				aPedido.innerHTML="Pedido Cancelado";
				aPedido.classList.replace("cance","entre");
				try{
					clearTimeout(t[idPedidos])
				}catch{
					errores=e
				}
				try{
					t[idPedidos]=setInterval(desplazar_pedido,60000,idPedidos)
				}catch{
					errores=e
				}
				console.log("volve")

			}
			
		})
	}

}


let divContainer=document.querySelector(".div-container");


const divMostrar=document.querySelector(".div-mostrar");

const cerrar=document.querySelector(".cerrar");
const folio=document.querySelector(".folio");
const informacion=document.querySelector(".informacion");
const body = document.getElementsByTagName("body")[0];
const modalC=document.querySelector(".modal-content")
let modal = document.getElementById("tvesModal");
let btn = document.getElementById("btnModal");
let span = document.getElementsByClassName("close")[0];

btnMostrar()

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


// DEsplazar los pedidos o Cambiar su estado
let pedidoParaVerificar;

function desplazar_pedido(ides){
	pedidoParaVerificar=document.querySelector(".div-pedido-"+ides);
	pedidoParaVerificar.style.display="none"
	// pedidoParaVerificar.style.transition="height 0.7s"
	// // pedidoParaVerificar.style.width="0"
	// pedidoParaVerificar.style.height="0"

}

btnMarcar()







// Eventos socket


// const socket=io();
//alert("Socket Activado")
// socket.on("message",(obj)=>{
// 	if (obj.tipoE=="RegistrarP"){
// 		datos=obj.datos
		
// 			console.log(datos.folio);
// 			console.log(datos);
// 			notificacion.play();
// 			// divBody.innerHTML+=`<div class="row ${datos.claseD} div-pedido-${datos.folio}">
// 			// 			<div class="col"><p style="">${datos.folio}</p></div>
// 			// 			<div class="col"><p style=""><a href="" id-pedido="${datos.folio}" class="botonsitos ${datos.folio} btn btn-primary botones1">Mostrar Datos</a></p></div>
// 			// 			<div class="col"><p class="fecha">${datos.fechahora}</p></div>
// 			// 			<div class="col"><p class="pe-${datos.folio}"><i class="${datos.icono}"></i>&nbsp;${datos.status}</p></div>
// 			// 			<div class="col"><p style=""><a href="" id-pedido="${datos.folio}" class="botonsitos boton-${datos.folio} btn btn-primary botones2 ${datos.claseB}" id-token-pedido="${datos.idPedido}">${datos.textBtn}</a></p></div>
// 			// 		</div>`;
// 			// `<button href="" id-pedido="28" 
// 			// class="botonsitos 28 btn btn-primary botones1" 
// 			// token-pedido="2499034" 
// 			// nombre="Eliezer Fuentes" 
// 			// telefono="04166876793" 
// 			// direccion="Delfin Mendoza" 
// 			// email="eliezermario008@gmail.com" 
// 			// fecha="2021-09-21 15:29:49" 
// 			// observaciones="Tengo Hambre" 
// 			// formapago="Mandar Terminal Bancaria"
// 			// cambio="" colonia="Delfin-Mendoza"
// 			// sucursal="Tucupita" status="Domicilio"
// 			// productos="[[54,{&quot;id&quot;:&quot;1&quot;,&quot;nombre&quot;:&quot;Festegral 2Kg&quot;,&quot;descripcion&quot;:&quot;Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compr&quot;,&quot;precio&quot;:113.81,&quot;cantidad&quot;:&quot;1&quot;,&quot;total&quot;:113.81,&quot;sucursal&quot;:&quot;Tucupita&quot;}]]" 
// 			// total="113.81">Mostrar Datos</button>`

// 			console.log(obj.productitos)
// 			console.log(JSON.parse(obj.productitos))
// 			console.log(typeof obj.productitos)
// 					divBody.innerHTML+=`<div class="row nuevo div-pedido-${datos.folio}">
// 						<div class="col"><p style="">${datos.folio}</p></div>
// 						<div class="col"><p style=""><button href="" 
// 						id-pedido="${datos.folio}" 
// 						class="botonsitos ${datos.folio} btn btn-primary botones1"
// 						id-pedido="${datos.folio}" 
// 						token-pedido="${datos.idPedido}"  
// 						nombre="${datos.nombre}" 
// 						telefono="${datos.telefono}" 
// 						direccion="${datos.direccion}" 
// 						email="${datos.email}" 
// 						fecha="${datos.fechahora}" 
// 						observaciones="${datos.observaciones}"
// 						formapago="${datos.formaPago}" 
// 						cambio="${datos.cambio}" 
// 						colonia="Tucupita" 
// 						sucursal="${sucursal}" 
// 						status="${datos.status}" 
// 						productos='${obj.productitos}'
// 						total="${datos.total}" 
// 						>Mostrar Datos</button>
// 						</p></div>
// 						<div class="col"><p class="fecha">${datos.fechahora}</p></div>
// 						<div class="col"><p class="pe-${datos.folio}"><i class="fs-4 fas fa-cart-plus"></i>&nbsp;Nuevo</p></div>
// 						<div class="col"><p style=""><button id-pedido="${datos.folio}" class="botonsitos boton-${datos.folio} btn btn-primary botones2 nue" id-token-pedido="${datos.idPedido}">En Bodega</button></p></div>
// 					</div>`
// 			btnMostrar();
// 			btnMarcar();
		
// 	}

// })
const funcionfastidio=()=>{
	fetch("/api").then(e=>e.json()).then(res=>{
		console.log(res)
	})
}
setInterval(funcionfastidio, 5000)
