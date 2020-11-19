window.addEventListener("scroll", (event) => {
  nav();
});

function nav() {
  let nav = document.querySelector("header");
  nav.style.display = "flex";
}

/**********navBarResponsive ******************/

document.getElementById("boutonMenu").addEventListener("click", (event) => {
  menu();
});

document.getElementById("croix").addEventListener("click", (event) => {
  menuOff();
});


function menu() {
  let menu = document.getElementById("menuResponsive");
  menu.style.display = "flex";
}


function menuOff() {
  let menu = document.getElementById("menuResponsive");
  menu.style.display = "none";
}


let mesLiens = [{
    name: "Services",
    lien: "",
  },

  {
    name: "A propos",
    lien: "",
  },

  {
    name: "Projects",
    lien: "",
  },

  {
    name: "Contact",
    lien: "#foot",
  },

  {
    name: "l'équipe",
    lien: "",
  },

  {
    name: "Formation",
    lien: "",
  },
];

for (i in mesLiens) {
  let monMenu = document.createElement("a");
  monMenu.href = mesLiens[i].lien;
  monMenu.innerHTML = mesLiens[i].name;

  monMenu.addEventListener('click', (event) => {

    let menu = document.getElementById("menuResponsive");
    menu.style.display = "none";


  })

  document.getElementById("liens").appendChild(monMenu);
}

/**********navBarResponsive ******************/

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

window.addEventListener("load", (event) => {
  setInterval(switchOnC, 500);
  let off = setInterval(switchOffC, 700);
  setTimeout(() => {
    clearInterval(off);
  }, 4000);
});

function switchOnC() {
  let o = document.getElementById("c");
  o.style.opacity = "1";
  o.style.color = "white";
  o.style.textShadow = "white 5px 2px 5px";
}

function switchOffC() {
  let o = document.getElementById("c");
  o.style.opacity = "0.5";
  o.style.color = "whitesmoke";
  o.style.textShadow = "none";
}

/////////////////////////* o*//////////////////////////

window.addEventListener("load", (event) => {
  setInterval(switchOn, 300);
  let off = setInterval(switchOff, 500);
  setTimeout(() => {
    clearInterval(off);
  }, 1500);
});

function switchOn() {
  let o = document.getElementById("o");
  o.style.opacity = "1";
  o.style.color = "white";
  o.style.textShadow = "white 5px 2px 5px";
}

function switchOff() {
  let o = document.getElementById("o");
  o.style.opacity = "0.5";
  o.style.color = "whitesmoke";
  o.style.textShadow = "none";
}

/////////////////////////* m*//////////////////////////

window.addEventListener("load", (event) => {
  setInterval(switchOnM, 550);
  let off = setInterval(switchOffM, 700);
  setTimeout(() => {
    clearInterval(off);
  }, 3000);
});

function switchOnM() {
  let o = document.getElementById("m");
  o.style.opacity = "1";
  o.style.color = "white";
  o.style.textShadow = "white 5px 2px 5px";
}

function switchOffM() {
  let o = document.getElementById("m");
  o.style.opacity = "0.5";
  o.style.color = "whitesmoke";
  o.style.textShadow = "none";
}

/////////////////////////* mm*//////////////////////////

window.addEventListener("load", (event) => {
  setInterval(switchOnMM, 600);
  let off = setInterval(switchOffMM, 750);
  setTimeout(() => {
    clearInterval(off);
  }, 4000);
});

function switchOnMM() {
  let o = document.getElementById("mm");
  o.style.opacity = "1";
  o.style.color = "white";
  o.style.textShadow = "white 5px 2px 5px";
}

function switchOffMM() {
  let o = document.getElementById("mm");
  o.style.opacity = "0.5";
  o.style.color = "whitesmoke";
  o.style.textShadow = "none";
}

/////////////////////////* u*//////////////////////////

window.addEventListener("load", (event) => {
  setInterval(switchOnU, 590);
  let off = setInterval(switchOffU, 700);
  setTimeout(() => {
    clearInterval(off);
  }, 4000);
});

function switchOnU() {
  let o = document.getElementById("u");
  o.style.opacity = "1";
  o.style.color = "white";
  o.style.textShadow = "white 5px 2px 5px";
}

function switchOffU() {
  let o = document.getElementById("u");
  o.style.opacity = "0.5";
  o.style.color = "whitesmoke";
  o.style.textShadow = "none";
}

/////////////////////////* n*//////////////////////////

window.addEventListener("load", (event) => {
  setInterval(switchOnN, 620);
  let off = setInterval(switchOffN, 780);
  setTimeout(() => {
    clearInterval(off);
  }, 5000);
});

function switchOnN() {
  let o = document.getElementById("n");
  o.style.opacity = "1";
  o.style.color = "white";
  o.style.textShadow = "white 5px 2px 5px";
}

function switchOffN() {
  let o = document.getElementById("n");
  o.style.opacity = "0.5";
  o.style.color = "whitesmoke";
  o.style.textShadow = "none";
}

/////////////////////////* i*//////////////////////////

window.addEventListener("load", (event) => {
  setInterval(switchOnI, 600);
  let off = setInterval(switchOffI, 730);
  setTimeout(() => {
    clearInterval(off);
  }, 3500);
});

function switchOnI() {
  let o = document.getElementById("i");
  o.style.opacity = "1";
  o.style.color = "white";
  o.style.textShadow = "white 5px 2px 5px";
}

function switchOffI() {
  let o = document.getElementById("i");
  o.style.opacity = "0.5";
  o.style.color = "whitesmoke";
  o.style.textShadow = "none";
}

/////////////////////////* t*//////////////////////////

window.addEventListener("load", (event) => {
  setInterval(switchOnT, 620);
  let off = setInterval(switchOffT, 780);
  setTimeout(() => {
    clearInterval(off);
  }, 2000);
});

function switchOnT() {
  let o = document.getElementById("t");
  o.style.opacity = "1";
  o.style.color = "white";
  o.style.textShadow = "white 5px 2px 5px";
}

function switchOffT() {
  let o = document.getElementById("t");
  o.style.opacity = "0.5";
  o.style.color = "whitesmoke";
  o.style.textShadow = "none";
}

///////////////////////////////*y*///////////////////////////

window.addEventListener("load", (event) => {
  setInterval(switchOnY, 1000);
  let off = setInterval(switchOffY, 1200);
  setTimeout(() => {
    clearInterval(off);
  }, 6000);
});

function switchOnY() {
  let o = document.getElementById("y");
  o.style.opacity = "1";
  o.style.color = "white";
  o.style.textShadow = "white 5px 2px 5px";
}

function switchOffY() {
  let o = document.getElementById("y");
  o.style.opacity = "0.5";
  o.style.color = "whitesmoke";
  o.style.textShadow = "none";
}

///////////////////////////////*y*///////////////////////////

/*************************** sect3 ******************************/

let equipe = [


  {
    nom: 'Matthieu Simonin',
    job: 'Directeur d\'agence',
    image: './ressources/images/boss.jpg',
  },


  {
    nom: 'Abdelah Boumaza',
    job: 'Formateur hygiène sécurité',
    image: './ressources/images/abdela.jpg',
  },


  {
    nom: 'Céllia Mouzard',
    job: 'Chargée de communication',
    image: './ressources/images/cellia.jpg',
  },


  {
    nom: 'Christophers Pestelard ',
    job: ' Commercial',
    image: './ressources/images/christophers.jpg',
  },

  {
    nom: 'Matthieu Zacharie',
    job: ' Formateur Anglais',
    image: './ressources/images/math.jpg',
  },

]


for (i in equipe) {

  let imageDiv = document.createElement('div')
  imageDiv.classList.add('imageDiv')

  let imgBox = document.createElement('div')
  imgBox.classList.add('imgBox')

  let imagePerso = document.createElement('img')
  imagePerso.src = equipe[i].image

  imgBox.appendChild(imagePerso)
  imageDiv.appendChild(imgBox)

  let job = document.createElement('div')
  job.classList.add('job')

  imageDiv.appendChild(job)

  let jobText = document.createElement('p')
  jobText.innerHTML = equipe[i].nom

  job.appendChild(jobText)

  let jobText2 = document.createElement('p')
  jobText2.innerHTML = equipe[i].job
  jobText2.style.fontFamily = 'raleway'

  job.appendChild(jobText2)

  imgBox.addEventListener('click', (event) => {

    deplace()

  })

  function deplace() {
    imagePerso.style.transform = 'translate(-60px,-60px)'
    imagePerso.style.transition = '2s ease-in-out'
  }

  window.addEventListener('load', (event) => {

    setInterval(retour, 10000)

  })

  function retour() {

    imagePerso.style.transform = 'translate(0px,0px)'
    imagePerso.style.transition = '2s ease-in-out'

  }

  document.getElementById('gallery').appendChild(imageDiv)
}


/*************************** catégorie ******************************/


let mesServices=[

  {
    nom:'Graphisme',
    image:'.ressources/images/7.png',
    description:'Identité visuelle Logo Cartes de visite Flyers/ Brochures/ Affiches...',
  },

  {
    nom:'Web',
    image:'.ressources/images/6.png',
    description:"Création site internet Vitrine & E-Commerce Community management  "
  },

  {
    nom:'impression',
    image:'.ressources/images/1.png',
    description:'Impression de tous vos outils de communication'
  },

  {
    nom:'Photo & vidéo',
    image:'.ressources/images/5.png',
    description:'Shooting produits Photos & Vidéos d\'entreprise'
  },

  {
    nom:'Grands Formats',
    image:'.ressources/images/2.png',
    description:'Création d\'Enseigne Réalisation de Vitrines Signalétique'
  },


  {
    nom:'Publicité',
    image:'.ressources/images/3.png',
    description:'Objets publicitaires Textiles Vitrophanie Covering voiture Affiches Bache'
  },

  {
    nom:'Formation',
    image:'.ressources/images/4.png',
    description:'Objets publicitaires Textiles Vitrophanie Covering voiture Affiches Bache'
  },

]




for (i in mesServices){

let monBloc=document.createElement('div')
monBloc.classList.add('bloc')
monBloc.style.height='300px'
monBloc.style.width='300px'
monBloc.style.border='3px solid black'
monBloc.style.margin='20px'







document.getElementById('services').appendChild(monBloc)

}