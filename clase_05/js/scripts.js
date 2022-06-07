// alert('Hola Mundo');

// console.log('Hola Mundo');


// let numero1 = "5";
// let numero2 = 7;
// let nombre = "Pedro";
// let apellido = "Blanco";
// let vive = false;

// //numero1 = 5;

// let resultado = nombre + ' ' + apellido;

// console.log(resultado);


let btn_1 = document.getElementById('btn_1');

btn_1.addEventListener('click', function(){
    suma(5,6);
}); 

function suma(a,b){
    alert(a+b);
}