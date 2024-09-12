//--------1. Introducción a JavaScript

// Asigna a a y b valores numéricos y haz que c sea la suma de a y b. 
// Imprime el resultado en la consola
//let d = 11
//let e = 12
//let f = e+d
//console.log("La suma de a y b es: "+f)

// Solicita el nombre del usuario
//let nombre = prompt("Por favor, ingresa tu nombre:");

// Muestra un saludo en la consola
//console.log("¡Hola, " + nombre + "! Bienvenido.");


// --------2. Operadores lógicos y condicionales

// Declaración de variables
//let a = 15;  // Puedes cambiar estos valores
//let b = 10;
//let c = 20;

// Comparación de a, b y c para determinar el mayor
//if (a > b && a > c) {
  //console.log("El mayor es a: " + a);
//} else if (b > a && b > c) {
  //console.log("El mayor es b: " + b);
//} else if (c > a && c > b) {
  //console.log("El mayor es c: " + c);
//} else {
  //console.log("Algunos de los números son iguales.");
//}

//Es par
//let numero = prompt("Por favor, ingresa un numero:");
//if(numero % 2 == 0){
  //console.log("El número " + numero + " es par")
//}  else{
  //console.log("El número " + numero + " es impar")
//}

//--------3. Operadores de asignación y bucles

//let iteracion = 10

//while(iteracion !=1 0){
  //console.log(iteracion)
  //iteracion --
//}

//let numero;

//do {
  // Pide al usuario que ingrese un número
  //numero = prompt("Por favor, ingresa un número mayor a 100:");

  // Convierte el valor ingresado a número (prompt devuelve una cadena)
  //numero = Number(numero);

//} while (numero <= 100 || isNaN(numero));  // Verifica si el número es menor o igual a 100 o si no es un número

// Muestra en la consola el número ingresado correctamente
//console.log("Has ingresado el número: " + numero);
//------4. Funciones de JavaScript

// Función flecha para verificar si un número es par
//const esPar = (numero) => numero % 2 == 0;

// Pruebas con diferentes números
//let numeroIngresado = prompt('Ingrese numero para ver si es par')
//console.log(esPar(numeroIngresado));  // true, porque 4 es par
//console.log(esPar(7));  // false, porque 7 es impar
//console.log(esPar(10)); // true, porque 10 es par
//console.log(esPar(15)); // false, porque 15 es impar

//const convertirCelsiusAFarenheit = (valor) => valor*1.8+32;
//const gradosC = prompt('Ingrese la cantidad de C')
//console.log(gradosC+'C son equivalentes a '+convertirCelsiusAFarenheit(gradosC)+'F ')

//-------5. Objetos en JavaScript
/*
let persona = { 
  nombre: "Julian",
  edad: 21,
  ciudad: "Mendoza",

  cambiarCiudad(nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  }
}

console.log(persona);
persona.cambiarCiudad("Las Heras");
console.log(persona);
*/
/*
let libro = {
  titulo: 'El principito',
  autor: 'Antoine de Saint-Exupéry',
  anio: 1979,

  masde10anio(anioP) {
    if(anioP<2014){
      console.log("Libro antiguo")
    } else{
      console.log("Libro nuevo")
    }
    }
  }

  console.log(libro);
  libro.masde10anio(libro.anio);
*/

//-------6. Arrays
/*
const numeros = [1,2,3,4,5,6,7,8,9,10]
let numerosMultiplicados = [];
for (let i = 0; i < numeros.length; i++) {
  numerosMultiplicados.push(numeros[i] * 2)
}
console.log("Array original: ", numeros);
console.log("Array multiplicado por 2: ", numerosMultiplicados);
*/
/*
const pares = []
for (let i = 1; pares.length < 10; i++) {
  if (i % 2 === 0) {  // Verifica si el número es par
    pares.push(i);     // Agrega el número par al array
  }
}
console.log('Array:'+ pares);
*/
// Función para cambiar el color de todos los elementos <p> a azul
function cambiarColor() {
  // Selecciona todos los elementos <p> dentro del div con id "app"
  let parrafos = document.querySelectorAll('#app p');
  
  // Itera sobre los párrafos y cambia su color a azul
  parrafos.forEach(parrafo => {
    parrafo.style.color = 'blue';
  });
}

// Agrega un evento al botón para que dispare la función al hacer clic
document.getElementById('buttonChange').addEventListener('click', cambiarColor);

// Función para mostrar el valor ingresado en el campo de texto
function mostrarAlerta() {
  // Obtener el valor del campo de texto
  let valorIngresado = document.getElementById('texto').value;

  // Mostrar el valor en una alerta
  alert("El valor ingresado es: " + valorIngresado);
}

// Agregar un event listener al botón para mostrar el valor en la alerta
document.getElementById('mostrarValor').addEventListener('click', mostrarAlerta);

//--------8. Eventos en DOM
let elementosLista = document.querySelectorAll('#miLista li');
elementosLista.forEach(
  elemento => 
    {
  elemento.addEventListener(
    'click', () => 
      {
    // Muestra el texto del elemento <li> en la consola
    console.log(elemento.textContent);
  });
});

// Seleccionar el campo de texto y los botones
const campoTexto = document.getElementById('campoTexto');
const btnDeshabilitar = document.getElementById('btnDeshabilitar');
const btnHabilitar = document.getElementById('btnHabilitar');

// Función para deshabilitar el campo de texto
btnDeshabilitar.addEventListener('click', () => {
  campoTexto.disabled = true; // Deshabilita el input
});

// Función para habilitar el campo de texto
btnHabilitar.addEventListener('click', () => {
  campoTexto.disabled = false; // Habilita el input
});


// Seleccionamos los elementos del DOM
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const emailDisplay = document.getElementById('emailDisplay');
const deleteEmailBtn = document.getElementById('deleteEmail');

// Función para guardar el correo en localStorage
function saveEmail(email) {
  localStorage.setItem('email', email);
  displayEmail();
}

// Función para mostrar el correo guardado en el DOM
function displayEmail() {
  const savedEmail = localStorage.getItem('email');
  
  if (savedEmail) {
    emailDisplay.textContent = `Correo guardado: ${savedEmail}`;
    deleteEmailBtn.style.display = 'block'; // Muestra el botón de eliminar
  } else {
    emailDisplay.textContent = ''; // Limpiar el contenedor si no hay correo
    deleteEmailBtn.style.display = 'none'; // Ocultar el botón de eliminar
  }
}

// Función para eliminar el correo de localStorage
function deleteEmail() {
  localStorage.removeItem('email');
  displayEmail();
}

// Evento para enviar el formulario y guardar el correo
emailForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita el envío del formulario
  const email = emailInput.value;
  saveEmail(email);
  emailInput.value = ''; // Limpiar el campo de entrada
});

// Evento para eliminar el correo almacenado
deleteEmailBtn.addEventListener('click', deleteEmail);

// Mostrar el correo almacenado al cargar la página, si existe
window.addEventListener('load', displayEmail);