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
    behavior:"smooth"
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
emailjs.init("YPwIh_XbAFhCJkZon");

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const btn = document.getElementById("send-btn");
  const status = document.getElementById("form-status");

  btn.innerText = "Sending...";
  btn.disabled = true;

  const templateParams = {
    from_name: document.getElementById("from_name").value,
    email: document.getElementById("from_email").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_sf0aoyu", "template_bh5r86y", templateParams)
    .then(function() {
      status.innerText = "✅ Message sent successfully!";
      status.style.color = "green";
      btn.innerText = "Send";
      btn.disabled = false;
      document.getElementById("contact-form").reset();
    }, function(error) {
      status.innerText = "❌ Failed to send. Please try again.";
      status.style.color = "red";
      btn.innerText = "Send";
      btn.disabled = false;
    });
});