const filterButtons = document.querySelectorAll(".filter-btn");
const newsCards = document.querySelectorAll(".news-card");
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const mainNav = document.querySelector("#mainNav");
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
hamburgerBtn.addEventListener('click', () => {
	mainNav.classList.toggle('open');
	hamburgerBtn.classList.toggle('open');
})
});
filterButtons.forEach(button => {
button.addEventListener("click", () => {
            // Manage Active Class on Buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            // Filter Cards Visibility
            newsCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                
                if (filterValue === "all" || cardCategory === filterValue) {
                    card.style.display = "flex";
                    // Brief fade animation entry effect
                    card.style.opacity = "0";
                    setTimeout(() => { card.style.opacity = "1"; }, 50);
                } else {
                    card.style.display = "none";
                }
        });
    });
});