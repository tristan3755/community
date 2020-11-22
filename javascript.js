


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

let mesLiens = [
  {
    name: "Services",
    lien: "#categorie",
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
    lien: "#Equipe",
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

  monMenu.addEventListener("click", (event) => {
    let menu = document.getElementById("menuResponsive");
    menu.style.display = "none";
  });

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

/////////////////////////*t*//////////////////////////

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
    nom: "Matthieu Simonin",
    job: "Directeur d'agence",
    image: "./ressources/images/boss.jpg",
  },

  {
    nom: "Abdelah Boumaza",
    job: "Formateur hygiène sécurité",
    image: "./ressources/images/abdela.jpg",
  },

  {
    nom: "Céllia Mouzard",
    job: "Chargée de communication",
    image: "./ressources/images/cellia.jpg",
  },

  {
    nom: "Christophers Pestelard ",
    job: " Commercial",
    image: "./ressources/images/christophers.jpg",
  },

  {
    nom: "Matthieu Zacharie",
    job: " Formateur Anglais",
    image: "./ressources/images/math.jpg",
  },
];

for (i in equipe) {

  let imageDiv = document.createElement("div");
  imageDiv.classList.add("imageDiv");

  let imgBox = document.createElement("div");
  imgBox.classList.add("imgBox");

  let imagePerso = document.createElement("img");
  imagePerso.src = equipe[i].image;


  imgBox.appendChild(imagePerso);
  imageDiv.appendChild(imgBox);

  let job = document.createElement("div");
  job.classList.add("job");

  imageDiv.appendChild(job);

  let jobText = document.createElement("p");
  jobText.innerHTML = equipe[i].nom;

  job.appendChild(jobText);

  let jobText2 = document.createElement("p");
  jobText2.innerHTML = equipe[i].job;
  jobText2.style.fontFamily = "raleway";

  job.appendChild(jobText2);


    if (window.matchMedia("(max-width: 700px)").matches) {

     
    
      imagePerso.addEventListener('click',(e)=>{
        e.target.style.transform = "translate(0px,-60px)";
        e.target.style.transition = "2s ease-in-out";
      })

  
    }else{


    imagePerso.addEventListener('mouseover',(e)=>{
      e.target.style.transform = "translate(-60px,-60px)";
      e.target.style.transition = "2s ease-in-out";
    })

    imagePerso.addEventListener('mouseout',(e)=>{
      e.target.style.transform = "translate(0px,0px)";
      e.target.style.transition = "2s ease-in-out";
    })
   
    
  }


  document.getElementById("gallery").appendChild(imageDiv);
}




/*************************** catégorie ******************************/

let mesServices = [
  {
    name: "Graphisme",
    image: "./ressources/images/7.png",
    description:
      "Identité visuelle Logo Cartes de visite Flyers/ Brochures/ Affiches...",
  },

  {
    name: "Web",
    image: "./ressources/images/6.png",
    description:
      "Création site internet Vitrine & E-Commerce Community management  ",
  },

  {
    name: "Impression",
    image: "./ressources/images/1.png",
    description: "Impression de tous vos outils de communication",
  },

  {
    name: "Photo & vidéo",
    image: "./ressources/images/5.png",
    description: "Shooting produits Photos & Vidéos d'entreprise",
  },

  {
    name: "Grands Formats",
    image: "./ressources/images/2.png",
    description: "Création d'Enseigne Réalisation de Vitrines Signalétique",
  },

  {
    name: "Publicité",
    image: "./ressources/images/3.png",
    description:
      "Objets publicitaires Textiles Vitrophanie Covering voiture Affiches Bache",
  },

  {
    name: "Formation",
    image: "./ressources/images/4.png",
    description:
      "Objets publicitaires Textiles Vitrophanie Covering voiture Affiches Bache",
  },
];

for (i in mesServices) {
  let monBloc = document.createElement("div");
  monBloc.classList.add("bloc");
  monBloc.style.height = "350px";
  monBloc.style.width = "300px";
  monBloc.style.maxWidth="100%"
  monBloc.style.margin = "20px";
  monBloc.style.display = "flex";
  monBloc.style.flexDirection = "column";
  monBloc.style.alignItems = "center";

  document.getElementById("services").appendChild(monBloc);

  let monTitre = document.createElement("p");
  monTitre.innerHTML = mesServices[i].name;
  monTitre.style.fontSize = "25px";
  monTitre.style.fontFamily = "raleway";

  monBloc.appendChild(monTitre);

  let monCercle = document.createElement("div");
  monCercle.classList.add("cercle");
  monCercle.style.position = "relative";
  monCercle.style.borderRadius = "50%";
  monCercle.style.width = "160px";
  monCercle.style.height = "160px";
  monCercle.style.display = "flex";
  monCercle.style.flexDirection = "column";
  monCercle.style.alignItems = "center";
  monCercle.style.justifyContent = "center";

  let monSpan = document.createElement("span");
  monSpan.style.position = "absolute";
  monSpan.style.top = "5px";
  monSpan.style.left = "5px";
  monSpan.style.right = "5px";
  monSpan.style.bottom = "5px";
  monSpan.style.backgroundColor = "white";
  monSpan.style.borderRadius = "50%";

  monCercle.appendChild(monSpan);

  monBloc.appendChild(monCercle);

  let monImage = document.createElement("img");
  monImage.classList.add("imageService");
  monImage.src = mesServices[i].image;
  monImage.style.height = "160px";
  monImage.style.width = "160px";
  monImage.style.position = "relative";
  monImage.style.zIndex = "6";

  monCercle.appendChild(monImage);

  let maDescription = document.createElement("p");
  maDescription.innerHTML = mesServices[i].description;
  maDescription.style.fontFamily = "raleway";
  maDescription.style.textAlign = "center";
  maDescription.style.margin = "20px";

  monBloc.appendChild(maDescription);
}

/****************************** Portfolio ***************************/

let mesSitesVitrines = [
  {
    image: "./ressources/images/ImagesPortfolio/cookoon.jpg",
    lien: "https://lecookoon-nancy.fr/",
  },
  {
    image: "./ressources/images/ImagesPortfolio/voiture.jpg",
    lien: "http://glpermis.fr//",
  },
];

for (i in mesSitesVitrines) {
  let monSite = document.createElement("img");
  monSite.classList.add("site");
  monSite.style.height = "auto";
  monSite.style.width = "600px";
  monSite.style.maxWidth = "80%";
  monSite.style.margin = "50px";
  monSite.style.filter = "grayscale(60%)";

  monSite.src = mesSitesVitrines[i].image;

  monSite.addEventListener("mouseover", (event) => {
    monSite.style.transition = "2s";
    monSite.style.transform = "scale(1.1)";
    monSite.style.cursor = "pointer";
    monSite.style.boxShadow = " black 5px 5px 5px";
    monSite.style.filter = "grayscale(0%)";
  });

  monSite.addEventListener("mouseout", (event) => {
    monSite.style.transition = "2s";
    monSite.style.transform = "scale(1)";
    monSite.style.cursor = "pointer";
    monSite.style.boxShadow = " none";
    monSite.style.filter = "grayscale(60%)";
  });

  monSite.addEventListener("click", click(i));


  document.getElementById("creation").appendChild(monSite);
}

function click(liens) {
  return function () {
    window.open((mesSitesVitrines[liens].lien), "_blank");
  };
}


let mesSitesCommerce = [
  {
    image: "./ressources/images/ImagesPortfolio/fleures.jpg",
    lien: "https://latelier81-athome.com/",
  },
  {
    image: "./ressources/images/ImagesPortfolio/keller.jpg",
    lien: "https://groupekeller.fr/",
  },
];

for (i in mesSitesCommerce) {
  let monSite = document.createElement("img");
  monSite.classList.add("site");
  monSite.style.height = "auto";
  monSite.style.width = "600px";
  monSite.style.maxWidth="80%"
  monSite.style.margin = "50px";
  monSite.style.filter = "grayscale(60%)";

  monSite.src = mesSitesCommerce[i].image;

  monSite.addEventListener("mouseover", (event) => {
    monSite.style.transition = "2s";
    monSite.style.transform = "scale(1.1)";
    monSite.style.cursor = "pointer";
    monSite.style.boxShadow = " black 5px 5px 5px";
    monSite.style.filter = "grayscale(0%)";
  });

  monSite.addEventListener("mouseout", (event) => {
    monSite.style.transition = "2s";
    monSite.style.transform = "scale(1)";
    monSite.style.cursor = "pointer";
    monSite.style.filter = "grayscale(60%)";
    monSite.style.boxShadow = "none";
  });

  monSite.addEventListener("click", click2(i));

  
  document.getElementById("Ecommerce").appendChild(monSite);
}

function click2(liens) {
  return function () {
    window.open(( mesSitesCommerce[liens].lien), "_blank");
  };
}


let mesPrints = [
  {
    image: "./ressources/images/ImagesPortfolio/fleures.jpg",
  },
  {
    image: "./ressources/images/ImagesPortfolio/keller.jpg",
  },
];

for (i in mesPrints) {
  let monPrint = document.createElement("img");
  monPrint.classList.add("site");
  monPrint.style.height = "auto";
  monPrint.style.width = "600px";
  monPrint.style.maxWidth="80%"
  monPrint.style.margin = "50px";
  monPrint.style.filter = "grayscale(60%)";

  monPrint.src = mesPrints[i].image;

  monPrint.addEventListener("mouseover", (event) => {
    monPrint.style.transition = "2s";
    monPrint.style.transform = "scale(1.1)";
    monPrint.style.cursor = "pointer";
    monPrint.style.boxShadow = " black 5px 5px 5px";
    monPrint.style.filter = "grayscale(0%)";
  });

  monPrint.addEventListener("mouseout", (event) => {
    monPrint.style.transition = "2s";
    monPrint.style.transform = "scale(1)";
    monPrint.style.cursor = "pointer";
    monPrint.style.filter = "grayscale(60%)";
    monPrint.style.boxShadow = "none";
  });

  document.getElementById("prints").appendChild(monPrint);
}

let mesIdentite = [
  {
    image: "./ressources/images/ImagesPortfolio/fleures.jpg",
  },
  {
    image: "./ressources/images/ImagesPortfolio/keller.jpg",
  },
];

for (i in mesIdentite) {
  let monLogo = document.createElement("img");
  monLogo.classList.add("site");
  monLogo.style.height = "auto";
  monLogo.style.width = "600px";
  monLogo.style.maxWidth="80%"
  monLogo.style.margin = "50px";
  monLogo.style.filter = "grayscale(60%)";

  monLogo.src = mesIdentite[i].image;

  monLogo.addEventListener("mouseover", (event) => {
    monLogo.style.transition = "2s";
    monLogo.style.transform = "scale(1.1)";
    monLogo.style.cursor = "pointer";
    monLogo.style.boxShadow = " black 5px 5px 5px";
    monLogo.style.filter = "grayscale(0%)";
  });

  monLogo.addEventListener("mouseout", (event) => {
    monLogo.style.transition = "2s";
    monLogo.style.transform = "scale(1)";
    monLogo.style.cursor = "pointer";
    monLogo.style.filter = "grayscale(60%)";
    monLogo.style.boxShadow = "none";
  });

  document.getElementById("logoVisuelle").appendChild(monLogo);
}

let mesEnseignes = [
  {
    image: "./ressources/images/ImageEnseigne/apresVous.jpg",
  },
  {
    image: "./ressources/images/ImageEnseigne/tulipe.jpg",
  },
];

for (i in mesEnseignes) {
  let monEnseigne = document.createElement("img");
  monEnseigne.classList.add("site");
  monEnseigne.style.height = "auto";
  monEnseigne.style.width = "600px";
  monEnseigne.style.maxWidth="80%"
  monEnseigne.style.margin = "50px";
  monEnseigne.style.filter = "grayscale(60%)";

  monEnseigne.src = mesEnseignes[i].image;



  monEnseigne.addEventListener("mouseover", (event) => {
    monEnseigne.style.transition = "2s";
    monEnseigne.style.transform = "scale(1.1)";
    monEnseigne.style.cursor = "pointer";
    monEnseigne.style.boxShadow = " black 5px 5px 5px";
    monEnseigne.style.filter = "grayscale(0%)";
  });

  monEnseigne.addEventListener("mouseout", (event) => {
    monEnseigne.style.transition = "2s";
    monEnseigne.style.transform = "scale(1)";
    monEnseigne.style.cursor = "pointer";
    monEnseigne.style.filter = "grayscale(60%)";
    monEnseigne.style.boxShadow = "none";
  });

  if(monEnseigne.style.transform >"scale(1)"){

    monEnseigne.style.filter="blur(2px)"

  }else{

    monEnseigne.style.filter="blur(0px)"

  }

 
  document.getElementById("enseigne").appendChild(monEnseigne);
}



