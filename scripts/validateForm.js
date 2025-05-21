import { getCities } from "./loadData.js";

const form = document.getElementById("form");
const alertContainer = document.getElementById("alert");
const cities = await getCities();

function validateCities(from, to, cities) {
  alertContainer.classList.add("hidden");
  const prepFrom = from.toLowerCase();
  const prepTo = to.toLowerCase();

  const fromCity = cities.find((city) => city.name.toLowerCase() === prepFrom);
  const toCity = cities.find((city) => city.name.toLowerCase() === prepTo);

  if (fromCity && toCity && fromCity !== toCity) {
    return { fromCity, toCity };
  }

  return null;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const fromInput = document.getElementById("cityInputA");
  const toInput = document.getElementById("cityInputB");
  const dateInput = document.querySelector('input[name="date"]');

  const from = fromInput.value.trim();
  const to = toInput.value.trim();
  const date = dateInput.value;

  const validation = validateCities(from, to, cities);

  if (!validation) {
    alertContainer.classList.remove("hidden");
    setTimeout(() => {
      alertContainer.classList.add("hidden");
    }, 3000);
    return;
  }

  window.location.href = `src/ticket.html?from=${validation.fromCity.id}&to=${validation.toCity.id}&date=${date}`;
});
