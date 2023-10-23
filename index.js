const toggle = document.querySelector(".toggle");
const title = document.querySelector(".header-title-h1");
const darkModeSpan = document.querySelector(".dark-mode-span");
const hr = document.querySelector(".hr");
const instagram = document.querySelector(".instagram");
const overviewTitle = document.querySelector(".overview-dashboard-title")
const statNumbers = document.querySelectorAll(".stat-number");
const mainTiles = document.querySelectorAll(".main-dashboard-tile")
const overviewTiles = document.querySelectorAll(".overview-dashboard-tile")

toggle.addEventListener("click", ()=>{
    lightMode();
})

function lightMode() {
    document.body.classList.toggle("light-mode-bg");
    title.classList.toggle("light-mode-dark-text");
    darkModeSpan.classList.toggle("light-mode-light-text");
    overviewTitle.classList.toggle("light-mode-light-text")
    hr.classList.toggle("light-mode-hr");
    instagram.classList.toggle("light-mode-instagram");
    statNumbers.forEach(stat => {
        stat.classList.toggle("light-mode-dark-text")
    });
    mainTiles.forEach(tile => {
        tile.classList.toggle("light-mode-tile-bg")
    });
    overviewTiles.forEach(tile => {
        tile.classList.toggle("light-mode-tile-bg")
    });
    
}   