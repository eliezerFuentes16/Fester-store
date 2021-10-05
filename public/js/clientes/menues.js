let container=document.querySelector(".div-container");

let buscar=container.getAttribute("buscar");

if (buscar=="True"){
	buscar=true;
}else{
	buscar=false;
}
// alert(buscar)
const flexContainer=document.querySelector(".flex-container")
const crearProducto=(id,name,content, price, img, contador,broma)=>{
	let flexitem=document.createElement("DIV");
	flexitem.classList.add("flex-item")
	flexitem.innerHTML=`
		<div class="div-img">
			<img loading="lazy" src="http://localhost:8000/media/Productos/${ img }" alt="${name}">
		</div> 
		<div class="div-producto">
			<h3 class="nombre-producto${id} nombre-producto">${name}</h3><p class="text-success fs-5">$${price}</p>
			<p class="descripcion">${content}</p>
			<div class="formulario">
				<form>
							
					<div class="div-cantidad">
						<span class="menos ${id} menos${contador}"><i class="fas fa-minus"></i></span>
						<input type="number" min="1" disabled="True" value="1" name="cantidad" class="cantidad cantidad${id}">
						<span class="mas ${id} mas${contador}"><i class="fas fa-plus"></i></span>
					</div>
					<button nombre="${name}" ide="${id}" descripcion="${content}" precio="${price}" class="btn btn-elegir text-light agregar agregar${contador}" style="background-color: rgb(0,81,168)">
						<i class="fas fa-plus-circle "></i>&nbsp;Agregar
					</button>
				</form>
			</div>
		</div>`

	return flexitem;
}
let broma=0;
function eventoMas(e){
	let id=this.classList.item(1);
	console.log(id);
	let cantidad=document.querySelector(".cantidad"+id);
	cantidad.setAttribute("value",parseInt(cantidad.value)+1);
}

function eventoMenos(e){
	let id=this.classList.item(1);
	console.log(id);
	let cantidad=document.querySelector(".cantidad"+id);
	if (cantidad.value!=1){
		cantidad.setAttribute("value",parseInt(cantidad.value)-1);
	}
}

function eventoAgregar(e){
			e.preventDefault();
			// Parametros el boton
			nombre=e.target.getAttribute("nombre");
			precio=e.target.getAttribute("precio");
			ide=e.target.getAttribute("ide");
			sucursal=e.target.getAttribute("sucursal");
			precio=e.target.getAttribute("precio");
			
			
			let total=parseFloat(precio);
			
			
		
			console.log(total)
			
			// Ver descripcion y nombre del producto y cantidad
			let descripcion=e.target.getAttribute("descripcion");
			let nombreProducto=document.querySelector(".nombre-producto"+ide);
			let cantidad=document.querySelector(".cantidad"+ide);
			cantidad2=cantidad.value;
			// Creando pedido
			if (cantidad2!=0){
				nombreProducto.innerHTML=nombre+'&nbsp;<i class="fas fa-check text-success"></i>';

				let objeto={
					id:ide,
					nombre:nombre,
					descripcion:descripcion,
					precio:total,
					cantidad:cantidad2,
					total:parseFloat(total)*parseInt(cantidad2),
					sucursal:sucursal
				};
				agregarPedido(objeto);
				cantidad.setAttribute("value",1);
				cambiarCarrito();
				total=0
			}
		}

let ProductosTodos;
let contador=6
if (buscar==false){
fetch("/api/Catalogo/Productos").then(e=>e.json()).then(res=>{
	console.log(res)
	ProductosTodos=res

	const cargarMasPublis= entry =>{
		if (entry[0].isIntersecting){
			cargarProductos(12) 
			broma++
			console.log(broma)
		};
		
	}
	console.log(ProductosTodos,"ProductosTodos")
	
		const observer = new IntersectionObserver(cargarMasPublis);

		const cargarProductos=num=>{
		const documentFragment=document.createDocumentFragment();
			for (let i = 0; i < num; i++){
				if (ProductosTodos[contador]!=undefined){
					newPublicacion=crearProducto(ProductosTodos[contador].id,ProductosTodos[contador].NOMBRE,ProductosTodos[contador].DESCRIPCION,ProductosTodos[contador].PRECIO,ProductosTodos[contador].FOTO,broma,contador)

					documentFragment.appendChild(newPublicacion)
					
					
					flexContainer.appendChild(documentFragment)

					if (i==num-1){
						observer.observe(newPublicacion)
					}

					contador++
				}
			}
				mas2=document.getElementsByClassName("mas"+broma);
				let menos2=document.getElementsByClassName("menos"+broma);
				let agregar2=document.getElementsByClassName("agregar"+broma);
				
				for (let i = 0; i < mas2.length; i++) {

					mas2[i].addEventListener("click",eventoMas, true)
				}
				for (let i1 = 0; i1 < menos2.length; i1++) {
					menos2[i1].addEventListener("click",eventoMenos, true)
				}

				for (let b = 0; b < agregar2.length; b++) {
					agregar2[b].addEventListener("click",eventoAgregar, true)
				}
		}

		cargarProductos(6)

	
	// setInterval(cargarProductos,3, 10000)
	
	
})
}
let pedidos=[];

const Cantidadcarrito=document.querySelector(".cantidad-carrito");
	const totalcarrito=document.querySelector(".total-carrito");



const IDBRequest= indexedDB.open("pedidos",1);

IDBRequest.addEventListener("upgradeneeded",()=>{
	const db=IDBRequest.result;
	db.createObjectStore("pedido", {
		autoIncrement: true
	})
	db.createObjectStore("pedidos", {
		autoIncrement: true
	})
})

IDBRequest.addEventListener("success",()=>{
	cambiarCarrito();
})
const agregarPedido=(objeto)=>{
	const db=IDBRequest.result;
	const IDBt=db.transaction("pedido","readwrite");
	const objectStore2=IDBt.objectStore("pedido");
	objectStore2.add(objeto)
	IDBt.addEventListener("complete",()=>{
		console.log("Objeto Agregado");
	})
}


const todo=()=>{

	let mas=document.getElementsByClassName("mas");
	const menos=document.getElementsByClassName("menos");
	let agregar=document.getElementsByClassName("agregar");
	
	for (let i = 0; i < mas.length; i++) {
		mas[i].addEventListener("click",eventoMas, true)
	}
	for (let i1 = 0; i1 < menos.length; i1++) {
		menos[i1].addEventListener("click",eventoMenos, true)
	}

	for (let b = 0; b < agregar.length; b++) {
		agregar[b].addEventListener("click",eventoAgregar, true)
	}
}
const cambiarCarrito=()=>{
	const db=IDBRequest.result;
	const IDBt=db.transaction("pedido","readonly");
	const objectStore2=IDBt.objectStore("pedido");
	const cursor=objectStore2.openCursor();
	cursor.addEventListener("success",()=>{
		if (cursor.result){
			pedidos.push([cursor.result.key,cursor.result.value]);
			cursor.result.continue();
		}else{
			let pedido2=0;
			let total2=0;
			for (let z = 0; z < pedidos.length; z++) {
				pedido2++;
				total2=pedidos[z][1].total+total2;
			}
			Cantidadcarrito.textContent=pedido2;
			totalcarrito.textContent=total2.toFixed(2) + " $";
			pedido2=0;
			total2=0;
			pedidos=[];
		}
	})	
}
todo()
// Conexion a indexedDB


