window.addEventListener("scroll", (event) => {
  nav();
});

function nav() {
  let nav = document.querySelector("header");
 nav.style.display="flex"
}

/*************sect1 **************/

window.addEventListener("scroll", (event) => {
  
  separation();
  apparition();
});


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

///////////////////////////////*C*///////////////////////////



/////////////////////////* o*//////////////////////////



window.addEventListener("load", (event) => {

  setInterval(switchOn,300)
  setInterval(switchOff,500)
  setTimeout(stop,1500)
  
  
});




function switchOn(){

  let o=document.getElementById("o")
  o.style.opacity="1"
  o.style.color="white"
  o.style.textShadow="white 1px 5px 15px"
  
}

function switchOff(){

  let o=document.getElementById("o")
  o.style.opacity="0.5"
  o.style.color="whitesmoke"
  o.style.textShadow="none"
 
  }

function stop(){

  
  clearInterval(switchOff,switchOn)

}
 


/////////////////////////* m*//////////////////////////

document.getElementById("m").addEventListener("mouseover", (event) => {
  
});

document.getElementById("m").addEventListener("mouseout", (event) => {

});


/////////////////////////* mm*//////////////////////////

document.getElementById("mm").addEventListener("mouseover", (event) => {
  
});

document.getElementById("mm").addEventListener("mouseout", (event) => {
 
});


/////////////////////////* u*//////////////////////////

document.getElementById("u").addEventListener("mouseover", (event) => {
 
});

document.getElementById("u").addEventListener("mouseout", (event) => {
 
});


/////////////////////////* n*//////////////////////////

document.getElementById("n").addEventListener("mouseover", (event) => {
 
});

document.getElementById("n").addEventListener("mouseout", (event) => {
  
});


/////////////////////////* i*//////////////////////////

document.getElementById("i").addEventListener("mouseover", (event) => {
  
});

document.getElementById("i").addEventListener("mouseout", (event) => {
 
});


/////////////////////////* t*//////////////////////////

document.getElementById("t").addEventListener("mouseover", (event) => {
  
});

document.getElementById("t").addEventListener("mouseout", (event) => {
 
});

///////////////////////////////*y*///////////////////////////

document.getElementById("y").addEventListener("mouseover", (event) => {
  
});

document.getElementById("y").addEventListener("mouseout", (event) => {
  
});




