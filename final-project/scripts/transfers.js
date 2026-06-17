const filterButtons = document.querySelectorAll(".filter-btn");
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const mainNav = document.querySelector("#mainNav");
const url = "data/transfer.json";
const container = document.querySelector("#contentContainer");

document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedEl = document.getElementById("lastModified");
    if (lastModifiedEl) {
        lastModifiedEl.textContent = new Date(document.lastModified).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    
    hamburgerBtn.addEventListener('click', () => {
        mainNav.classList.toggle('open');
        hamburgerBtn.classList.toggle('open');
    });

    getClubAffairs();
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");
        // Target .news-card since that is what we are creating now
        const newsCards = document.querySelectorAll(".news-card");

        newsCards.forEach(card => {
            const cardCategory = card.getAttribute("data-category");
            
            if (filterValue === "all" || cardCategory === filterValue) {
                card.style.display = "flex";
                card.style.opacity = "0";
                setTimeout(() => { card.style.opacity = "1"; }, 50);
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Fetch the JSON data
async function getClubAffairs() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    container.innerHTML = "<p>Failed to load data.</p>";
  }
}

// Generate the HTML elements
function displayMembers(items) {
  container.innerHTML = ""; 

  items.forEach((item) => {
    const card = document.createElement("section");
    card.className = "news-card"; 
    card.setAttribute("data-category", item.category || "transfers"); 
    card.innerHTML = `
    <div class="card-img-wrap">
      <img src="images/${item.image}" alt="${item.title}" loading="lazy" style="max-width: 100%; height: auto; display: block;">
      <h2>${item.title}</h2>
      <p>${item.description}</p>
    </div>
    `;

    container.appendChild(card);
  });
}
