function check(){
    age=document.getElementById("age").value;
    if(Number(age)>=18){
        document.getElementById("container").style.visibility="visible";
        document.getElementById("under-18").style.display="none";
    }
    else if (Number(age)<18){
        document.getElementById("under-18").style.display="block";
        document.getElementById("container").style.visibility="hidden";
    }
    document.getElementById("age").value=""

}