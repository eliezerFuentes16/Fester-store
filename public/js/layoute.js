const barra=document.querySelector(".barra");
const divResponsive=document.querySelector(".div-li-responsive");
let sucursal=document.querySelector(".sucursal2").getAttribute("sucursal");
let ubicacionPrincipal=window.pageYOffset;
let headerDiv=document.querySelector(".header-div");
let divNav=document.querySelector(".div-nav");
let abierto=false;
console.log(sucursal)


barra.addEventListener("click",()=>{
	if (abierto==false)
	{
		divResponsive.style.height="160px"
		abierto=true
	}else{
		divResponsive.style.height="0"
		abierto=false
	}
})

window.onscroll=function(){
	let desplazamiento=window.pageYOffset;
	if (ubicacionPrincipal >= desplazamiento){
		headerDiv.style.top="0";
		divNav.style.top="124px";
	}else{
		
		headerDiv.style.top="-126px";
		divNav.style.top="-1px";
		
		abierto=false;
	}

	ubicacionPrincipal=desplazamiento;
}