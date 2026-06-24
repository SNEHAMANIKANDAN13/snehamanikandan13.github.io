var homeSection = document.getElementById("headline");
var aboutSection = document.querySelector(".about-container");
var skillsSection = document.querySelector(".skillsection");
var projectSection = document.querySelector(".project");
var contactSection = document.querySelector(".contact-section");
var certificateSection = document.querySelector(".certificate-section");
var seeresume=document.getElementById("resume");

// Home
function home(){
  homeSection.scrollIntoView({
    behavior:"insta"
  });
}

// About
function about(){
  aboutSection.scrollIntoView({
    behavior: "smooth"
  });
}

// Skills
function skills(){
  skillsSection.scrollIntoView({
    behavior: "smooth"
  });
}

// Projects
function project(){
  projectSection.scrollIntoView({
    behavior: "smooth"
  });
}

// Contact
function contact(){
  contactSection.scrollIntoView({
    behavior: "smooth"
  });
}

// Certificates (if you want to add click in navbar later)
function certificate(){
  certificateSection.scrollIntoView({
    behavior: "smooth"
  });
}
function seeresume(){
window.open("sneharesume.pdf", "_blank");}