import { quiz } from "./quiz.js";

console.log(quiz)

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const searchResult = document.getElementById("search-result");
const countryName = document.getElementById("country-name");
const countryFlag = document.getElementById("country-flag");



searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const foundCountry = quiz.find((country) => country.name.toLowerCase() === searchTerm);
    if (foundCountry) {
        countryName.innerHTML = foundCountry.name;
        countryFlag.src = foundCountry.flag;
        searchResult.style.display = "block";
    } else {
        alert("Country not found");
    }
});

