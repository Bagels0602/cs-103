let first;
let second;
function addition() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=String(Number(first)+Number(second));
    document.getElementById("input-2").value="";
    document.getElementById("input-1").value="";
    if (Number(first)+Number(second)<0) {
        document.getElementById("output").style.color="red"
    }
    else {
        document.getElementById("output").style.color="black"
    }
}

function subtraction() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=String(Number(first)-Number(second));
    document.getElementById("input-2").value="";
    document.getElementById("input-1").value="";
    if (Number(first)-Number(second)<0) {
        document.getElementById("output").style.color="red"
    }
    else {
        document.getElementById("output").style.color="black"
    }
}

function multiplication() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=String(Number(first)*Number(second));
    document.getElementById("input-2").value="";
    document.getElementById("input-1").value="";
    if (Number(first)*Number(second)<0) {
        document.getElementById("output").style.color="red"
    }
    else {
        document.getElementById("output").style.color="black"
    }
}

function division() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=String(Number(first)/Number(second));
    document.getElementById("input-2").value="";
    document.getElementById("input-1").value="";
    if (Number(first)/Number(second)<0) {
        document.getElementById("output").style.color="red"
    }
    else {
        document.getElementById("output").style.color="black"
    }
}

function exponentiation() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    let temp = 1;
    for (let limit=0; limit<Number(second); limit=limit+1) {
        temp=Number(first)*temp;
    }
    document.getElementById("output").innerHTML=String(temp)
    document.getElementById("input-2").value="";
    document.getElementById("input-1").value="";
    if (temp<0) {
        document.getElementById("output").style.color="red"
    }
    else {
        document.getElementById("output").style.color="black"
    }
}

