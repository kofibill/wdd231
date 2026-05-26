//get the current date and time
let today = document.getElementById("lastModified").textContent = new Date();

const hamburgerBtn = document.querySelector("#hamburgerBtn");
const mainNav = document.querySelector("#mainNav");
hamburgerBtn.addEventListener('click', () => {
	mainNav.classList.toggle('open');
	hamburgerBtn.classList.toggle('open');
});

//catch the element to display the weather
const place = document.getElementById("place");
const icon = document.getElementById("icon");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const UV = document.getElementById("UV");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

//get url for the current weather api
const url = "https://api.openweathermap.org/data/2.5/weather?lat=5.7132&lon=-0.1540&units=metric&appid=be6c9795fd118f5e7d5ca5ec799bd5e5";

//code to fetch the weather data with async function
async function getWeather() {
    try {   
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json(); 
            place.textContent = data.name;
            icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            icon.alt =
            description.textContent = data.weather[0].description;
            temperature.textContent = `${data.main.temp} °C`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
            wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
            UV.textContent = `UV Index: ${data.uvi}`;
            sunrise.textContent = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
            sunset.textContent = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
        }   
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
getWeather();

//catch the element to display the weather forecast
const todayforcast = document.getElementById("todayforcast");
const Tuesday = document.getElementById("Tuesday");
const Wednesday = document.getElementById("Wednesday");
//get url for the weather forecast api
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=5.7132&lon=-0.1540&units=metric&appid=be6c9795fd118f5e7d5ca5ec799bd5e5";
//code to fetch the weather forecast data with async function
async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            todayforcast.textContent = `Today: ${data.list[0].weather[0].description}, Temp: ${data.list[0].main.temp} °C`;
            Tuesday.textContent = `Tuesday: ${data.list[8].weather[0].description}, Temp: ${data.list[8].main.temp} °C`;
            Wednesday.textContent = `Wednesday: ${data.list[16].weather[0].description}, Temp: ${data.list[16].main.temp} °C`;
        }
    } catch (error) {
        console.error("Error fetching forecast data:", error);
    }
}
getForecast();

const jsonUrl = "data/members.json";
// Map numeric membership levels to readable text
const MEMBERSHIP_MAP = {
    2: 'Silver',
    3: 'Gold'
};

async function loadSpotlightMembers() {
    try {
        // 1. Fetch data from the JSON source
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const members = await response.json();

        // 2. Filter for Silver (2) and Gold (3) members
        const premiumMembers = members.filter(member => 
            member.membershipLevel === 2 || member.membershipLevel === 3
        );

        // 3. Randomly shuffle the filtered array using Fisher-Yates algorithm
        for (let i = premiumMembers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [premiumMembers[i], premiumMembers[j]] = [premiumMembers[j], premiumMembers[i]];
        }

        // 4. Select the top 3 members from the shuffled list
        const spotlightSelection = premiumMembers.slice(0, 3);

        // 5. Render the spotlight cards to the DOM
        displaySpotlights(spotlightSelection);

    } catch (error) {
        console.error('Failed to load chamber spotlights:', error);
        document.getElementById('spotlight-container').innerHTML = 
            '<p class="error-msg">Unable to load spotlights at this time.</p>';
    }
}

function displaySpotlights(selectedMembers) {
    const container = document.getElementById('spotlight-container');
    container.innerHTML = ''; // Clear existing content

    selectedMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card', `level-${MEMBERSHIP_MAP[member.membershipLevel].toLowerCase()}`);

        card.innerHTML = `
            <span class="badge">${MEMBERSHIP_MAP[member.membershipLevel]} Member</span>
            <h3>${member.name}</h3>
            <p class="tagline">"${member.tagline}"</p>
            <hr />
            <img src="images/${member.image}" alt="${member.name} Logo" class="member-logo" />
            <div class="contact-info">
                <p><strong>📍 Address:</strong> ${member.address}</p>
                <p><strong>📞 Phone:</strong> ${member.phone}</p>
                <p><strong>🌐 Website:</strong> <a href="${member.website}" target="_blank" rel="noopener">${member.website}</a></p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Execute the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadSpotlightMembers);