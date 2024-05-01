function check() {
    let input = document.getElementById("input").value;
    document.getElementById("output").innerHTML = `you entered ${input} into the input!`;
    document.getElementById("input").value="";
}