import { getCities } from "./loadCities.js";

function validateCities(from, to, cities) {
  const prepFrom = from.toLowerCase();
  const prepTo = to.toLowerCase();

  const fromCity = cities.find((city) => city.name.toLowerCase() === prepFrom);
  const toCity = cities.find((city) => city.name.toLowerCase() === prepTo);

  if (fromCity && toCity) {
    return { fromCity, toCity };
  }

  return null;
}

const form = document.getElementById("form");

const cities = await getCities();

form.addEventListener("submit", (event) => {
  const fromInput = document.getElementById("cityInputA");
  const toInput = document.getElementById("cityInputB");

  const from = fromInput.value.trim();
  const to = toInput.value.trim();

  const validation = validateCities(from, to, cities);

  if (!validation) {
    event.preventDefault();
    alert("Cities are incorrect!");
  }
});
