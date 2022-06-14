// alert('ok');
// console.log('Algo');

// let persona = {
//     nombre: "Juan",
//     edad: 25,
//     estudia: false,
//     saluda: function(){
//         alert('Hola soy Juan');
//     }
// }

// let caja1 = document.getElementById('caja1');

// alert(persona.edad);
// let x = "edad";
// alert(persona[x]);
// alert(caja1.id);

function sumar(a,b){
    let c = a + b;
    alert(c);
}


//sumar(5,3);

//persona.saluda();

// let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// alert(dias[6]);

let btn1 = document.getElementById('btn1');
let valor = document.getElementById('valor');


btn1.addEventListener('click', function(){
    
    valor.value = btn1.innerHTML;
});
