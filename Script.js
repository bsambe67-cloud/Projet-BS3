// =======================================
// BS3 ENTREPRISE MULTISERVICES
// script.js
// =======================================

// ================= MENU RESPONSIVE =================

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}

const contactButton = document.querySelector(".contact-btn");
const contactSection = document.getElementById("contact");

if (contactButton && contactSection) {

    contactButton.addEventListener("click", (event) => {

        event.preventDefault();
        contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}

// ================= FERMER LE MENU MOBILE =================

const liens = document.querySelectorAll("nav a");

liens.forEach((lien) => {

    lien.addEventListener("click", () => {

        if (window.innerWidth < 768) {

            menu.classList.remove("active");

        }

    });

});

// ================= RECHERCHE PRODUITS =================

const recherche = document.getElementById("search");
const cartes = document.querySelectorAll(".card");

if (recherche) {

    recherche.addEventListener("keyup", () => {

        const valeur = recherche.value.toLowerCase();

        cartes.forEach((carte) => {

            const texte = carte.innerText.toLowerCase();

            if (texte.includes(valeur)) {

                carte.style.display = "block";

            } else {

                carte.style.display = "none";

            }

        });

    });

}

// ================= BOUTONS PRODUITS =================

const boutons = document.querySelectorAll(".card button");

boutons.forEach((btn) => {

    btn.addEventListener("click", function () {

        const produit = this.parentElement.querySelector("h3").textContent;

        const numero = "221778794493";

        const message =
            "Bonjour BS3, je suis intéressé par : " + produit;

        window.open(

            `https://wa.me/${numero}?text=${encodeURIComponent(message)}`,

            "_blank"

        );

    });

});

// ================= HEADER AU SCROLL =================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.18)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});

// ================= BOUTON RETOUR EN HAUT =================

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0a8f08";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";
topBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ================= ANIMATION DES SECTIONS =================

const sections = document.querySelectorAll("section");

function afficherSections(){

    sections.forEach((section)=>{

        const position = section.getBoundingClientRect().top;

        if(position < window.innerHeight - 120){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", afficherSections);

afficherSections();
// ================= HERO SLIDER =================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide)=>{

        slide.classList.remove("active");

    });

    dots.forEach((dot)=>{

        dot.classList.remove("active");

    });

    if(slides[index]){

        slides[index].classList.add("active");

    }

    if(dots[index]){

        dots[index].classList.add("active");

    }

}

function nextSlide(){

    if(slides.length === 0) return;

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

if(slides.length > 0){

    showSlide(0);

    setInterval(nextSlide,5000);

}

// ================= CLIC SUR LES POINTS =================

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide=index;

        showSlide(currentSlide);

    });

});

// ================= ANIMATION DES CARTES =================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".card").forEach((card)=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".6s";

    observer.observe(card);

});

// ================= COMPTEUR DES STATISTIQUES =================

const statistiques = document.querySelectorAll(".stat h2");

function animerCompteur(element){

    const texte = element.innerText;

    const valeur = parseInt(texte.replace(/\D/g,""));

    if(isNaN(valeur)) return;

    let compteur = 0;

    const increment = Math.max(1, Math.ceil(valeur/100));

    const timer = setInterval(()=>{

        compteur += increment;

        if(compteur >= valeur){

            compteur = valeur;
            clearInterval(timer);
        }

        if(texte.includes("%")){

            element.innerText = compteur + "%";

        }else if(texte.includes("+")){

            element.innerText = compteur + "+";

        }else if(texte.toLowerCase().includes("j")){

            element.innerText = compteur + "j/7";

        }else{

            element.innerText = compteur;

        }

    },20);

}

const statsObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            animerCompteur(
                entry.target.querySelector("h2")
            );

            statsObserver.unobserve(entry.target);

        }

    });

});

document.querySelectorAll(".stat").forEach((stat)=>{

    statsObserver.observe(stat);

});

// ================= PRELOADER =================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

    console.log("Bienvenue sur BS3 Entreprise Multiservices");

});

// ================= DATE AUTOMATIQUE =================

const footerDate = document.getElementById("annee");

if(footerDate){

    footerDate.textContent = new Date().getFullYear();

}

// ================= EFFET PARALLAX HERO =================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x = (e.clientX/window.innerWidth-0.5)*20;
    const y = (e.clientY/window.innerHeight-0.5)*20;

    heroImage.style.transform =
        `translate(${x}px,${y}px)`;

});

// ================= MESSAGE D'ACCUEIL =================

setTimeout(()=>{

    console.log(
        "Merci de visiter BS3 Entreprise Multiservices."
    );

},1500);

// ================= FIN DU SCRIPT =================