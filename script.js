document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);

    const themeIcon = document.getElementById("dark-light");
    const newIconSrc = savedTheme === "light" ? "dark.svg" : "light.svg";
    themeIcon.setAttribute("src", newIconSrc);
  }

  themeToggleButton.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", currentTheme);

    localStorage.setItem("theme", currentTheme);

    const themeIcon = document.getElementById("dark-light");
    const newIconSrc = currentTheme === "light" ? "dark.svg" : "light.svg";
    themeIcon.setAttribute("src", newIconSrc);
  });
});




let filteredQuotes = data;
let currentQuoteIndex = 0;

function filterByCategory(category) {
  return category === "all" ? data : data.filter((quote) => quote.category === category);
}

function displayQuote(index) {
  const quote = filteredQuotes[index];
  if (quote) {
    document.getElementById("quote").textContent = quote.quote;
    document.getElementById("author").textContent = `- ${quote.author}`;
  }
}

function showRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * filteredQuotes.length);
  displayQuote(currentQuoteIndex);
}

function showNextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % filteredQuotes.length;
  displayQuote(currentQuoteIndex);
}

function showPreviousQuote() {
  currentQuoteIndex =
    (currentQuoteIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
  displayQuote(currentQuoteIndex);
}

document.getElementById("category-select").addEventListener("change", () => {
  const selectedCategory = document.getElementById("category-select").value;
  filteredQuotes = filterByCategory(selectedCategory);
  console.log(filteredQuotes);
  currentQuoteIndex = 0;
  displayQuote(currentQuoteIndex);
});

document.getElementById("rand-btn").addEventListener("click", showRandomQuote);
document.getElementById("next-btn").addEventListener("click", showNextQuote);
document
  .getElementById("prev-btn")
  .addEventListener("click", showPreviousQuote);

window.onload = () => displayQuote(currentQuoteIndex);
