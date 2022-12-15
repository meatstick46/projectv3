const homeSection = document.querySelector("#home-section");
const showcaseSection = document.querySelector("#showcase-section");
const registerSection = document.querySelector("#register-section");
const aboutSection = document.querySelector("#about-section");
const contactSection = document.querySelector("#contact-section");
const helpSection = document.querySelector("#help-section");
const reviewsSection = document.querySelector("#reviews-section");
const homeLink = document.querySelector("#home-link");
const serviceLink = document.querySelector("#services-link");
const registerLink = document.querySelector("#register-link");
const contactLink = document.querySelector("#contact-link");
const aboutLink = document.querySelector("#about-link");
const helpLink = document.querySelector("#help-link");
const reviewsLink = document.querySelector("#reviews-link");

async function getRandomUser(){
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const user = data.results[0];
  displayUser(user)
  console.log(data)
}

function displayUser(user){
  
  const profileImage = document.getElementById("profile-pic");

  profileImage.setAttribute("src", `${user.picture.large}`);
}

getRandomUser();


registerLink.addEventListener('click', function(e){
  registerSection.scrollIntoView({behavior: "smooth"});
});

serviceLink.addEventListener("click", function(e){
  showcaseSection.scrollIntoView({behavior: "smooth"})
});

// contactLink.addEventListener("click", function(e){
//   contactSection.scrollIntoView({behavior: "smooth"})
// });

aboutLink.addEventListener("click", function(e){
  aboutSection.scrollIntoView({behavior: "smooth"})
});

helpLink.addEventListener("click", function(e){
  helpSection.scrollIntoView({behavior: "smooth"})
});

// reviewsLink.addEventListener("click", function(e){
//   reviewsSection.scrollIntoView({behavior: "smooth"});
// })










