function ramdom() {
    var ramdom = Math.round(Math.random() * 5) + 1;
    var ramdom2 = Math.round(Math.random() * 5) + 1;
    console.log(ramdom);
    var rd = document.querySelector(".dice-1");
    var rd2 = document.querySelector("#dice-2");
    rd.setAttribute("src", "images/dice" + ramdom + "@2x.png");
    rd2.setAttribute("src", "images/dice" + ramdom2 + "@2x.png");

}