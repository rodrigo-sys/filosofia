const $botonEnviarRespuestas = document.querySelector("#botonEnviarRespuestas");
$botonEnviarRespuestas.onclick = function(){
	main();
	return false;
}

function main(){

	/*
	 Que se entienda porque estoy
	 eliminando y agregando frameworks; y ocultando la navbar.
	 */
	function agregar_framework(framework, href){
		link = document.createElement('link');
		link.setAttribute('rel','stylesheet');
		link.setAttribute('href', href);

		div_framework = document.querySelector(`#${framework}`);
		div_framework.appendChild(link);
	}

	function eliminar_framework(framework){
		div_framework = document.querySelector(`#${framework} link`);
		div_framework.remove();
	}
	
	eliminar_framework("skeleton");
	agregar_framework('bootstrap', "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");

	navbar = document.querySelector('div.navbar');
	navbar.style.display = "none";

	let cantidad_aciertos = 0;
	let cantidad_errores = 0;
	let respuestas_correctas = document.querySelectorAll("input[value='respuesta_correcta']");

	for(i=0; i < respuestas_correctas.length; i++){
		if(respuestas_correctas[i].checked){
			cantidad_aciertos++;
		}
		else{
			cantidad_errores++;
		}
	}


	let cantidad_preguntas = respuestas_correctas.length //porque cada pregunta tiene una respuesta correcta
	let porcentaje_aciertos = (100 / cantidad_preguntas) * cantidad_aciertos;
	let porcentaje_errores = (100 / cantidad_preguntas) * cantidad_errores;

	console.log(`cantidad_aciertos: ${cantidad_aciertos}`);
	console.log(`cantidad_errores: ${cantidad_errores}`);
	console.log(`Porcentaje de aciertos: ${porcentaje_aciertos}`);
	console.log(`Porcentaje de errores: ${porcentaje_errores}`);

	if(porcentaje_aciertos > 1){
		if(porcentaje_aciertos <= 40){
			var mensaje = "Debe ponerse a estudiar más <b>-desastre-</b>";
		}
		else if(porcentaje_aciertos <= 69){
			var mensaje = "Esta bien pero debe ponerse a estudiar más <b>-regular-</b>";
		}
		else if(porcentaje_aciertos === 70){
			var mensaje = "Buenas respuestas <b>-bueno-</b>";
		}
		else if(porcentaje_aciertos > 70){
			var mensaje = "Muy buenas respuestas";
		}
	}
	else{
			var mensaje = "todo mal";
	}

	bootbox.alert(mensaje);

	const $botonOkModal = document.querySelector("button[class='btn btn-primary bootbox-accept']")
	$botonOkModal.onclick = function(){
		agregar_framework('skeleton','../css/skeleton.css')
		eliminar_framework('bootstrap')

		navbar.style.display = "";
		return false;
	}
}
