function a() {
    document.getElementById("a").play();


}

function b() {
    document.getElementById("b").play();
}

function c() {
    document.getElementById("c").play();
}

function d() {
    document.getElementById("d").play();
}

function e() {
    document.getElementById("e").play();
}

function f() {
    document.getElementById("f").play();
}

function g() {
    document.getElementById("g").play();
}

window.addEventListener("keydown", checkKey, false)

function checkKey(key) {
    if (key.keyCode == "49") {
        document.getElementById("a").play();
    } else if (key.keyCode == "50") {
        document.getElementById("b").play();
    } else if (key.keyCode == "51") {
        document.getElementById("c").play();
    } else if (key.keyCode == "52") {
        document.getElementById("d").play();
    } else if (key.keyCode == "53") {
        document.getElementById("e").play();
    } else if (key.keyCode == "54") {
        document.getElementById("f").play();
    } else if (key.keyCode == "55") {
        document.getElementById("g").play();
    }
}