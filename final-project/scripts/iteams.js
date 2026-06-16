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
});
import squad from '../data/team.mjs';
const container = document.getElementById('player-container');
const modal = document.getElementById('player-modal');
const closemodal = document.getElementById('close-modal');
const modaltitle = document.getElementById('modal-title');
const modaldesc = document.getElementById('modal-desc');

squad.forEach(player =>{
    const card = document.createElement('div');
    card.className = 'player-card';
    card.innerHTML = `
    <img src = "images/${player.image}" alt ="${player.name}" loading = "lazy" style = "width=100%; height=auto;">
    <h3>${player.name}</h3>
    <button class ="learn-more-btn" data-id ="${player.id}">Read More</button>`;
    container.appendChild(card);
});
//handles the learn more button to open the html modal
container.addEventListener('click',(e)=>{
    if (e.target.classList.contains('learn-more-btn')){
        const playerId = parseInt(e.target.getAttribute('data-id'));
        const clickedPlayer = squad.find(p =>p.id=== playerId);
        if(clickedPlayer){
            modaltitle.textContent = clickedPlayer.name;
            modaldesc.textContent = clickedPlayer.description;

            modal.classList.add('active');
        }
    }
});
// Close modal when clicking the 'X' button
closemodal.addEventListener('click', () => {
  modal.classList.remove('active');
});
