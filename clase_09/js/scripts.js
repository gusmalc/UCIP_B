let mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

let aa = document.querySelectorAll('#box1>div');

let n = 1;
aa.forEach( (mes, i) => {
    // console.log(mes);
    // let x = n + " -- " + i;
    let x = `${n} -a- ${abc()}`;
    mes.innerHTML = x;
    n++;
});

function abc(){
    alert('ok');
    return 5
} 