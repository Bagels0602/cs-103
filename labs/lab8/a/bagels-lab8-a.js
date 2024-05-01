let first;
let second;
function addition() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=String(Number(first)+Number(second));
    document.getElementById("input-2").value="";
    document.getElementById("input-1").value="";
}

function subtraction() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=String(Number(first)-Number(second));
    document.getElementById("input-2").value="";
    document.getElementById("input-1").value="";
}

function multiplication() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=String(Number(first)*Number(second));
    document.getElementById("input-2").value="";
    document.getElementById("input-1").value="";
}

function division() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=String(Number(first)/Number(second));
    document.getElementById("input-2").value="";
    document.getElementById("input-1").value="";
}


