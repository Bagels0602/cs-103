const arr=[];

function addItem() {
    arr.push(document.getElementById("input").value);
    document.getElementById("input").value="";
    console.log(arr);
}

function revealItems() {
    for (let i=0; i<arr.length; i=i+1){
        let li=document.createElement("li");
        li.textContent=arr[i];
        document.getElementById("output").appendChild(li);
    }
}