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