let age;
function check(){
    age=document.getElementById("age").value;
    if(Number(age)>=18 && Number(age)<120){
        document.getElementById("container").style.visibility="visible";
        document.getElementById("under-18").style.display="none";
    }
    else if (Number(age)%1 !==0) {
        document.getElementById("under-18").innerHTML="Please enter a whole number";
        document.getElementById("container").style.visibility = "hidden";
        document.getElementById("under-18").style.display="block";
    }
    else if (0<Number(age) && Number(age)<18){
        document.getElementById("under-18").innerHTML="Sorry, this page is for 18+ only"
        document.getElementById("under-18").style.display="block";
        document.getElementById("container").style.visibility="hidden";
    }
    else if (Number(age)<0) {
        document.getElementById("under-18").innerHTML="A negative number is not acceptable";
        document.getElementById("container").style.visibility = "hidden";
        document.getElementById("under-18").style.display="block";
    }
    else if (isNaN(Number(age))) {
        document.getElementById("under-18").innerHTML="User has failed to enter a number";
        document.getElementById("container").style.visibility = "hidden";
        document.getElementById("under-18").style.display="block";
    }
    else {
        document.getElementById("under-18").innerHTML="You may not see this content";
        document.getElementById("container").style.visibility = "hidden";
        document.getElementById("under-18").style.display="block";
    }
    document.getElementById("age").value=""

}

let date= new Date();

let day=date.getDate();
let month=date.getMonth() + 1;
let year =date.getFullYear();
let timeM=date.getMinutes();
let timeH=date.getHours();





if (timeH>=13){
    let timeH=date.getHours()-12;
    if (month<10 && day<10) {
        document.getElementById("time-date").innerHTML=
            `
                <h5>0${timeH}:${timeM}PM</h5>
                <h5>${"0" + month + "/" + "0" + day + "/" + year}</h5>
            `
        ;
    }
    else if (month<10) {
        document.getElementById("time-date").innerHTML=
            `
                <h5>0${timeH}:${timeM}PM</h5>
                <h5>${"0" + month + "/"  + day + "/" + year}</h5>
            `
        ;
    }
    else if (day<10) {
        document.getElementById("time-date").innerHTML=
            `
                <h5>0${timeH}:${timeM}PM</h5>
                <h5>${month + "/" + "0" +day + "/" + year}</h5>
            `
        ;
    }
    else {
        document.getElementById("time-date").innerHTML=
            `
                <h5>0${timeH}:${timeM}PM</h5>
                <h5>${month + "/" + day + "/" + year}</h5>
            `
        ;
    }
}

else if (timeH>12 && timeH<13){
    if (month<10 && day<10) {
        document.getElementById("time-date").innerHTML=
            `
                <h5>${timeH}:${timeM}PM</h5>
                <h5>${"0" + month + "/" + "0" + day + "/" + year}</h5>
            `
        ;
    }
    else if (month<10) {
        document.getElementById("time-date").innerHTML=
            `
                <h5>${timeH}:${timeM}PM</h5>
                <h5>${"0" + month + "/"  + day + "/" + year}</h5>
            `
        ;
    }
    else if (day<10) {
        document.getElementById("time-date").innerHTML=
            `
                <h5>${timeH}:${timeM}PM</h5>
                <h5>${month + "/" + "0" +day + "/" + year}</h5>
            `
        ;
    }
    else {
        document.getElementById("time-date").innerHTML=
            `
                <h5>${timeH}:${timeM}PM</h5>
                <h5>${month + "/" + day + "/" + year}</h5>
            `
        ;
    }
}

else {
    if (month<10 && day<10) {
        document.getElementById("time-date").innerHTML=
            `
                <h5>${timeH}:${timeM}AM</h5>
                <h5>${"0" + month + "/" + "0" + day + "/" + year}</h5>
            `
        ;
    }
    else if (month<10) {
        document.getElementById("time-date").innerHTML=
            `
                <h5>${timeH}:${timeM}AM</h5>
                <h5>${ "0" + month + "/" +  day + "/" + year}</h5>
            `
        ;
    }
    else if (day<10) {
        document.getElementById("time-date").innerHTML=
            `
                <h5>${timeH}:${timeM}AM</h5>
                <h5>${month + "/" +  "0" + day + "/" + year}</h5>
            `
        ;
    }
    else {
        document.getElementById("time-date").innerHTML=
            `
                <h5>${timeH}:${timeM}AM</h5>
                <h5>${month + "/" + day + "/" + year}</h5>
            `
        ;
    }
}




