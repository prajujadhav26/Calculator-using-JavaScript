function view(num){
    document.getElementById("screen").value += num;
}

function clr(){
    document.getElementById("screen").value = "";
}

function calculate(){
    let a = document.getElementById("screen").value;
    let b = eval(a);
    document.getElementById("screen").value = b;
}

function backspace(){
    var str = document.getElementById("screen").value;
     str = str.substr(0, str.length-1);
     document.getElementById("screen").value = str;
}

function sin(){
    let y = document.getElementById("screen").value;
    let z = Math.sin(y);
    document.getElementById("screen").value = z;
}

function cos(){
    let y = document.getElementById("screen").value;
    let z = Math.cos(y);
    document.getElementById("screen").value = z;
}

function tan(){
    let y = document.getElementById("screen").value;
    let z = Math.tan(y);
    document.getElementById("screen").value = z;
}

function pi(num){
    // let y = document.getElementById("screen").value;
    let numb = Math.PI;
    // let y = 3.14159265359
    var b = numb.toFixed(4)
    document.getElementById("screen").value += b;
}

function e(){
    let numb = Math.E;
    var b = numb.toFixed(4);
    document.getElementById("screen").value += b;
}