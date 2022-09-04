// ----- querySelector(elementoTag class .nombreClass o id #nombreId) -----
const btnCopiar = document.querySelector(".copiar");
const inputTexto = document.querySelector(".texto");
const inputMensaje = document.querySelector(".ingresar");
// Elimine onclick como propiedad de los botones
const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");

// ----- Definir que tipo de elementp es mensaje -----
let mensaje = document.querySelector(".mensaje");
const imagen = document.querySelector(".imagen"); // 1. para que pueda ser utilizado en cualquier parte del código

// addEventListener Registra un evento a un objeto en específico. Es una funcion que se puede aplicar a cualquier elemento html, requier dos parametros que son tipo y listener
/**
 * tipo
 * Una cadena representando el tipo de evento a escuchar.
 * listener
 * El objeto que recibe una notificación cuando un evento de el tipo especificado ocurre. Debe ser un objeto implementando la interfaz EventListener o solo una function en JavaScript.
 */
btnEncriptar.addEventListener("click", encriptar);

function encriptar() {
	const textoEncriptado = encriptarTexto(inputTexto.value);
	// Agregado
	mensaje.innerHTML = textoEncriptado; // 2. Es una propiedad utilizada para elemntos html que pinten textos, como los de tipo heading (ej. h1), párrafo, etc.
	imagen.style.display = "none"; // 3 para no pintar la imagen
	ingresar.style.display = "none";
	inputTexto.value = "";
}

 btnDesencriptar.addEventListener("click", desencriptartexto);
function desencriptartexto() {
	const textoDesencriptado = desencriptar(inputTexto.value);
	// Agregado
	// const imagen = document.querySelector(".imagen"); // 1.
	mensaje.innerHTML = textoDesencriptado; // 2
	imagen.style.display = "none"; // 3
	ingresar.style.display = "none";
	inputTexto.value = "";
};


function encriptarTexto(textoAEncriptar) {
	// La letra "e" es convertida para "enter"
	// La letra "i" es convertida para "imes"
	// La letra "a" es convertida para "ai"
	// La letra "o" es convertida para "ober"
	// La letra "u" es convertida para "ufat"
	let codigo = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];
	// lista de Arays dentro de otro arays

	textoAEncriptar = textoAEncriptar.toLowerCase(); //para que solo reciba letras minusculas

	for (let i = 0; i < codigo.length; i++) {
		//recorrido de i = indice
		if (textoAEncriptar.includes(codigo[i][0])) {
			textoAEncriptar = textoAEncriptar.replaceAll(
				//repaso por el indice del array
				codigo[i][0],
				codigo[i][1]
			);
		}
	}
	return textoAEncriptar;
}

function desencriptar(textoDesencriptar){
	let codigo = [ // i
	["a", "ai"], //0
	["e", "enter"], //1 
	["i", "imes"], //2 
	["o", "ober"], //3
	["u", "ufat"]  //4
];// lista de Arays dentro de otro arays
	textoDesencriptar = textoDesencriptar.toLowerCase();
	for (let i = 0; i < codigo.length; i++){
		if (textoDesencriptar.includes(codigo[i][1])){
			textoDesencriptar = textoDesencriptar.replaceAll(
				codigo[i][1],
				codigo[i][0]
			);
		}

	}
	return textoDesencriptar
}

btnCopiar.addEventListener("click", copiar);

function copiar() {
	// mensaje.select(); select() se utiliza solo en elementos html del tipo input o textarea
	// navigator.clipboard.writeText(mensaje.value);
	// mensaje es una variable que apunta a un elemnto HTML de tipo parrafo por lo que no se uitiliza el value para leer su contenido, por ello uso innerHTML
	inputTexto.value = mensaje.innerHTML;
	mensaje.innerHTML = "";
	imagen.style.display = "inline"; // para pintar la imagen
	alert("Texto copiado");
}
