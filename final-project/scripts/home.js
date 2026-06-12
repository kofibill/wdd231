//get the current date and time
document.addEventListener('DOMContentLoaded', () => {

    // Last Modified Date
    const lastModifiedEl = document.getElementById("lastModified");
    if (lastModifiedEl) {
        lastModifiedEl.textContent = new Date(document.lastModified).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }    
//this is for the hamburger menu
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const mainNav = document.querySelector("#mainNav");
hamburgerBtn.addEventListener('click', () => {
	mainNav.classList.toggle('open');
	hamburgerBtn.classList.toggle('open');
})

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

});