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

    const resultsDiv = document.getElementById('results');
        if (resultsDiv) {
            const params = new URLSearchParams(window.location.search);

            resultsDiv.innerHTML = `
            <p><strong>Full Name:</strong> ${params.get("firstName") || 'N/A'} ${params.get("lastName") || 'N/A'}</p>
            <p><strong>Date or Birth:</strong> ${params.get("birthdate") || 'N/A'}</p>
            <p><strong>Email:</strong> ${params.get("email") || 'N/A'}</p>
            <p><strong>Phone number:</strong> ${params.get("phone") || 'N/A'}</p>
            <p><strong>Emergency Contact:</strong> ${params.get("emgContact") || 'N/A'}</p>
            <p><strong>Video Upload:</strong> ${params.get("player-video") || 'N/A'}</p>
            <p><strong>Preferred Position:</strong> ${params.get("positions") || 'N/A'}</p>
            <p style="margin-top: 20px; font-weight: bold;">Thank you for applying to Fc Brcelona! We will review your application</p>
            `;
        }

    //this is for the hamburger menu
    const hamburgerBtn = document.querySelector("#hamburgerBtn");
    const mainNav = document.querySelector("#mainNav");
    hamburgerBtn.addEventListener('click', () => {
        mainNav.classList.toggle('open');
        hamburgerBtn.classList.toggle('open');
    })
});    