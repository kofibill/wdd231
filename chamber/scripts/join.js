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
});

const resultsDiv = document.getElementById('results');
    if (resultsDiv) {
        const params = new URLSearchParams(window.location.search);

        resultsDiv.innerHTML = `
        <p><strong>Full Name:</strong> ${params.get("firstName") || 'N/A'} ${params.get("lastName") || 'N/A'}</p>
        <p><strong>Organizational Title:</strong> ${params.get("organization") || 'N/A'}</p>
        <p><strong>Email:</strong> ${params.get("email") || 'N/A'}</p>
        <p><strong>Phone number:</strong> ${params.get("phone") || 'N/A'}</p>
        <p><strong>Organizational Name:</strong> ${params.get("orgName") || 'N/A'}</p>
        <p><strong>Membership Level:</strong> ${params.get("membership_level") || 'N/A'}</p>
        <p><strong>Description of Business:</strong> ${params.get("org_description") || 'N/A'}</p>
        <p style="margin-top: 20px; font-weight: bold;">Thank you for applying to the Adenta City Chamber of Commerce!</p>
        `;
    }
});
//this is for the NP modal box
const openModalBtn = document.getElementById('open-modal');
const dialogBox = document.getElementById('dialogbox');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', () =>{
	dialogBox.showModal();
});
closeModalBtn.addEventListener('click', () =>{
	dialogBox.close();
});
//this is for the bronze modal box
const openModalBtn1 = document.getElementById('open-modal1');
const closeModalBtn1 = document.getElementById('close-modal1');
const dialogBox1 = document.getElementById('dialogbox1');
openModalBtn1.addEventListener('click', () => {
	dialogBox1.showModal();
});
closeModalBtn1.addEventListener('click', () => {
	dialogBox1.close();
});
//this is for the silver modal box
const openModalBtn2 = document.getElementById('open-modal2');
const closeModalBtn2 = document.getElementById('close-modal2');
const dialogBox2 = document.getElementById('dialogbox2');
openModalBtn2.addEventListener('click', () => {
	dialogBox2.showModal();
});
closeModalBtn2.addEventListener('click', () => {
	dialogBox2.close();
});
//this is for the gold modal box
const openModalBtn3 = document.getElementById('open-modal3');
const closeModalBtn3 = document.getElementById('close-modal3');
const dialogBox3 = document.getElementById('dialogbox3');
openModalBtn3.addEventListener('click', () => {
	dialogBox3.showModal();
});
closeModalBtn3.addEventListener('click', () => {
	dialogBox3.close();
});
