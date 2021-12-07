function clearScreen() {
    document.getElementById("result").value = "";
}
   
function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function backspace(){
    var x = document.getElementById("result").value;
    var y =  x.substring(0, x.length - 1);
    document.getElementById("result").value = y;

}