function disp(a) {
    let n = document.querySelector(".inp");
    n.value += a;
}
function opt(){
    let n = document.querySelector(".inp");
    try {
        n.value = eval(n.value)
    } catch (error) {
        n.value = "error"
    }
}
function del() {
    let n = document.querySelector(".inp");
    n.value = n.value.slice(0,-1);
}
function clr(){
    let n = document.querySelector(".inp");
    n.value = "";
}
