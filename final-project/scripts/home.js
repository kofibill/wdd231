const container = document.getElementById('banner-container')
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
function checkVisitorHistory(){
  //Getting elements from the page
  const container = document.getElementById('banner-container');
  const message = document.getElementById('message');
  const currentTime = Date.now();
  //determine the logic based on if they have visited the page or not
  const lastVisit = localStorage.getItem('lastWebpageVisit');
  //no initial visits displays this
  if (!lastVisit){
    message.textContent = 'Welcome! Let us know if you have any questions.';
  } else {
    // Returning visitor - do the math
        const timeDifference = currentTime - parseInt(lastVisit);
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000;// this is for the time in a whole day
        const daysBetween = Math.floor(timeDifference / oneDayInMilliseconds);

        if(timeDifference < oneDayInMilliseconds){
            message.textContent = 'You came back so soon! That\'s Awesome!';
        } else if(daysBetween === 1){
            message.textContent = `You visited this page ${daysBetween} one day ago!`;
        } else {
            message.textContent = `You visited this page ${daysBetween} days ago!`;
        }
    }
    //showing the banner with the message in it
    container.style.display = 'block';
    //Update the localStorage box with today's date for next time
    localStorage.setItem('lastWebpageVisit', currentTime);
}
// Run the script automatically as soon as the page loads
    window.onload = checkVisitorHistory;

// Function to close the message area when "X" is clicked
    const closeButton = document.getElementById('close-banner');
    if (closeButton){
        closeButton.addEventListener('click',()=>{
            container.style.display='none';});
    }
});