window.addEventListener("scroll", (event) => {
  nav();
});

function nav() {
  let nav = document.querySelector("header");
 nav.style.display="flex"
}

/*************sect1 **************/

window.addEventListener("scroll", (event) => {
  transitionC();
  separation();
  apparition();
});

document.getElementById("c").addEventListener("mouseover", (event) => {
  transitionC();
  separation();
  apparition();
  nav();
});

function transitionC() {
  let titre = document.getElementById("c");
  titre.style.color = "black";
  titre.style.backgroundColor = "whitesmoke";
  titre.style.borderRadius = "50%";
  titre.style.transform = "rotate(25deg)";
  titre.style.transition = "2s";
}

function separation() {
  let sep = document.querySelector(".separation");
  sep.style.width = "190px";
  sep.style.transition = "3s";
}

function apparition() {
  let app = document.querySelector(".sousTitre h1");
  app.style.color = "whitesmoke";
  app.style.transition = "10s";
}

///////////////////////////////*y*///////////////////////////

document.getElementById("y").addEventListener("mouseover", (event) => {
  transitionY();
});

document.getElementById("y").addEventListener("mouseout", (event) => {
  detransitionY();
});

function transitionY() {
  let titre = document.getElementById("y");
  titre.style.transform = "rotate(-45deg)";
  titre.style.transition = "500ms";
}

function detransitionY() {
  let titre = document.getElementById("y");
  titre.style.transform = "rotate(0deg)";
}

/////////////////////////* o*//////////////////////////

document.getElementById("o").addEventListener("mouseover", (event) => {
  transitionO();
});

window.addEventListener("load", (event) => {
  transitionO();
});

document.getElementById("o").addEventListener("mouseout", (event) => {
  detransitionO();
});

function transitionO() {
  let titre = document.getElementById("o");
  titre.style.transform = "rotate(-360deg)";
  titre.style.transition = "1s";
}

function detransitionO() {
  let titre = document.getElementById("o");
  titre.style.transform = "rotate(0deg)";
}

/////////////////////////* m*//////////////////////////

document.getElementById("m").addEventListener("mouseover", (event) => {
  transitionM();
});

document.getElementById("m").addEventListener("mouseout", (event) => {
  detransitionM();
});

function transitionM() {
  let titre = document.getElementById("m");
  titre.style.transform = "rotate(-45deg)";
  titre.style.transition = "500ms";
}

function detransitionM() {
  let titre = document.getElementById("m");
  titre.style.transform = "rotate(0deg)";
}

/////////////////////////* mm*//////////////////////////

document.getElementById("mm").addEventListener("mouseover", (event) => {
  transitionMM();
});

document.getElementById("mm").addEventListener("mouseout", (event) => {
  detransitionMM();
});

function transitionMM() {
  let titre = document.getElementById("mm");
  titre.style.transform = "rotate(-45deg)";
  titre.style.transition = "500ms";
}

function detransitionMM() {
  let titre = document.getElementById("mm");
  titre.style.transform = "rotate(0deg)";
}

/////////////////////////* u*//////////////////////////

document.getElementById("u").addEventListener("mouseover", (event) => {
  transitionU();
});

document.getElementById("u").addEventListener("mouseout", (event) => {
  detransitionU();
});

function transitionU() {
  let titre = document.getElementById("u");
  titre.style.transform = "rotate(-45deg)";
  titre.style.transition = "500ms";
}

function detransitionU() {
  let titre = document.getElementById("u");
  titre.style.transform = "rotate(0deg)";
}

/////////////////////////* n*//////////////////////////

document.getElementById("n").addEventListener("mouseover", (event) => {
  transitionN();
});

document.getElementById("n").addEventListener("mouseout", (event) => {
  detransitionN();
});

function transitionN() {
  let titre = document.getElementById("n");
  titre.style.transform = "rotate(-45deg)";
  titre.style.transition = "500ms";
}

function detransitionN() {
  let titre = document.getElementById("n");
  titre.style.transform = "rotate(0deg)";
}

/////////////////////////* i*//////////////////////////

document.getElementById("i").addEventListener("mouseover", (event) => {
  transitionI();
});

document.getElementById("i").addEventListener("mouseout", (event) => {
  detransitionI();
});

function transitionI() {
  let titre = document.getElementById("i");
  titre.style.transform = "rotate(-45deg)";
  titre.style.transition = "500ms";
}

function detransitionI() {
  let titre = document.getElementById("i");
  titre.style.transform = "rotate(0deg)";
}

/////////////////////////* t*//////////////////////////

document.getElementById("t").addEventListener("mouseover", (event) => {
  transitionT();
});

document.getElementById("t").addEventListener("mouseout", (event) => {
  detransitionT();
});

function transitionT() {
  let titre = document.getElementById("t");
  titre.style.transform = "rotate(-45deg)";
  titre.style.transition = "500ms";
}

function detransitionT() {
  let titre = document.getElementById("t");
  titre.style.transform = "rotate(0deg)";
}

/////////////////////////* separaition*//////////////////////////
