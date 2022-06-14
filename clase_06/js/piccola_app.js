let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let btn1 = document.getElementById('btn1');
let resultado = document.getElementById('resultado');
let btn2 = document.getElementById('btn2');

// btn1.addEventListener('click', sumar);

// function sumar(){
//    let a = parseInt(n1.value);
//    let b = parseInt(n2.value);
//    let c = a + b;
//    n1.value = "";
//    n2.value = "";
//    resultado.innerHTML = c;
// }
//let di = 10;
btn1.addEventListener('click', function(){
    let a = parseInt(n1.value);
   let b = parseInt(n2.value);      
   sumar(a,b);
   btn1.classList.add('mover_100');
   // toggle
});

function sumar(a,b){    
    let c = a+b;
    //resultado.innerHTML = "<h1>" + c + "</h1>";
    resultado.innerHTML = `<h1 style="color:#f00">${c}</h1>`;
    document.body.style.background = "#0f0";
}


btn2.addEventListener('click', function(){
    n1.value = "";
    n2.value = "";
    document.body.style.background = "#fff";
    resultado.innerHTML = "";
    btn1.classList.remove('mover_100');
} );