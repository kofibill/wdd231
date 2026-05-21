//Last Modified
let today = document.getElementById("lastModified").textContent = new Date();


// Variables for directory
const url = "./data/members.json";
const container = document.querySelector("#memberContainer");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

// Fetch the JSON data
async function getMemberData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    container.innerHTML = "<p>Failed to load member directory.</p>";
  }
}

// Generate the member HTML elements
function displayMembers(members) {
  container.innerHTML = ""; // Clear existing contents

  members.forEach((member) => {
    const card = document.createElement("section");
    card.className = "member-card";

    // Convert membership numeric levels to text labels
    const levels = { 1: "Bronze", 2: "Silver", 3: "Gold" };
    const levelText = levels[member.membershipLevel] || "General";

    card.innerHTML = `
    <div class="card-img-wrap">
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" style="max-width: 100%; height: auto; display: block;">
      <h2>${member.name}</h2>
      <p class="tagline"><em>"${member.tagline}"</em></p>
      <hr>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
      <span class="badge level-${member.membershipLevel}">${levelText} Member</span>
    </div>
    `;

    container.appendChild(card);
  });
}
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const mainNav = document.querySelector("#mainNav");
hamburgerBtn.addEventListener('click', () => {
	mainNav.classList.toggle('open');
	hamburgerBtn.classList.toggle('open');
});


// View toggle event listeners
gridBtn.addEventListener("click", () => {
  container.className = "grid-view";
  gridBtn.classList.add("active");
  listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
  container.className = "list-view";
  listBtn.classList.add("active");
  gridBtn.classList.remove("active");
});

// Initialize fetch operation
getMemberData();


