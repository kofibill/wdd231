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
if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', () => {
        mainNav.classList.toggle('open');
        hamburgerBtn.classList.toggle('open');
    });
}

});

// 1. Import your data from the .mjs file
import localAttractions from '../data/localattraction.mjs';

// 2. Select the HTML element where the cards will go
const cardContainer = document.getElementById('card-container');

// 3. Loop through the data to dynamically build your 8 cards
localAttractions.forEach(attraction => {
  // Create the main card container element
  const card = document.createElement('div');
  card.className = 'attraction-card';

  // Build the exact structure required by your prompt
  card.innerHTML = `
    <h2>${attraction.name}</h2>
    <img src="images/${attraction.image}" alt="${attraction.name}" loading="lazy" style="max-width: 100%; height: auto; display: block;">
    <address><strong>Address:</strong> ${attraction.address}</address>
    <p><strong>Description:</strong> ${attraction.description}</p>
    <button type="button">Learn More</button>
  `;

  // Append the newly created card to your webpage container
  cardContainer.appendChild(card);
});
