function checkLike(){
    let like =document.getElementById("animals").value;
    let output=document.getElementById("output");


    if(String(like)==="yes"){
        document.getElementById("container").style.visibility="visible";
    } else {
        output.innerHTML="You are not allowed to see the content";
        document.getElementById("container").style.visibility="hidden";
    }


}
