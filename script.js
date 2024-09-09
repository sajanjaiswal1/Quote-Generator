document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");


  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
    const themeIcon = document.getElementById("dark-light");
    const newIconSrc = savedTheme === "dark" ? "dark.svg" : "light.svg";
    themeIcon.setAttribute("src", newIconSrc);
  }

  themeToggleButton.addEventListener("click", () => {

    const currentTheme =
      document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);

    const themeIcon = document.getElementById("dark-light");
    const newIconSrc =
      currentTheme === "dark" ? "dark.svg" : "light.svg";
    themeIcon.setAttribute("src", newIconSrc);
  });
});

let filteredQuotes = data;
let currentQuoteIndex = 0;

function showrandom(){
  const randomIndex = Math.floor(Math.random()* data.length);

  const randomQuote = data[randomIndex].quote;
  const randomAuthor = data[randomIndex].author;

  document.getElementById('quote').textContent = `${randomQuote}`
  document.getElementById('author').textContent = `- ${randomAuthor}`
}

document.getElementById('rand-btn').addEventListener('click', showrandom);
window.onload = showrandom;