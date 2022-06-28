let caja2 = document.getElementById('caja2');

let caja3 = document.querySelector('#caja3');

let cajas = document.querySelectorAll('.caja');

let caja4 = document.getElementById('caja4');
// caja3.addEventListener('click', (e)=>{
//     alert('hola');
// })

caja3.onclick = ()=>{
    //document.body.style.background = "#222";
    // caja2.style.background = "#f00";
    caja2.style.cssText = "background: #f00; border: #00f solid 4px";
}

// el.style.cssText = "background-color: black; color: white;";
// el.style.border = "#000 solid 2px";
// el.classList.add("clase1", "clase2");
// el.classList.remove("clase");
// el.classList.toggle("clase");
// document.getElementById("estilo").href = "css/estilosjs.css";

// let bordes_caja4 = "no";

// caja4.onclick = ()=>{

// if(bordes_caja4 == "no"){
//     caja4.classList.add("bordes");
//     bordes_caja4 = "si";
// }else{
//     caja4.classList.remove("bordes");
//     bordes_caja4 = "no";
// }

// }

caja4.onclick = ()=>{

    caja4.classList.toggle("bordes");
}


let btn_mo = document.getElementById('btn_mo');

let modo = "claro";
btn_mo.onclick = ()=>{
    if(modo == "claro"){
    document.getElementById("estilos").href = "css/modo_oscuro.css";
    modo = "oscuro";
    }else{
        document.getElementById("estilos").href = "css/estilos.css";
        modo = "claro";  
    }
}

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
alert(dias[2]);