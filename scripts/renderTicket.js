import { getCities, getSchedules } from "../scripts/loadData.js";

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const fromId = parseInt(params.get("from"));
  const toId = parseInt(params.get("to"));
  const date = params.get("date");

  const cities = await getCities();
  const schedules = await getSchedules();

  renderTickets(fromId, toId, schedules, cities, date);
  addBuyButtonListeners();
});

function renderTickets(startCityId, endCityId, schedules, cities, date) {
  const rightSchedules = schedules.filter(
    (s) => s.startId === startCityId && s.endId === endCityId && s.date === date
  );

  const startCity = cities.find((c) => c.id === startCityId);
  const endCity = cities.find((c) => c.id === endCityId);

  document.getElementById("pointA").textContent = startCity?.name;
  document.getElementById("pointB").textContent = endCity?.name;
  document.getElementById("date").textContent = date;

  const container = document.getElementById("ticketsContainer");
  container.innerHTML = "";

  if (rightSchedules.length === 0) {
    container.innerHTML = `
      <div class="w-full bg-white rounded-2xl shadow-xl p-6 text-center">
        <h3 class="text-2xl font-semibold text-gray-900 mb-2">No tickets available</h3>
        <p class="text-gray-700">There are no schedules for this route on the selected date.</p>
      </div>
    `;
    return;
  }

  rightSchedules.forEach((schedule) => {
    const ticketDiv = document.createElement("div");

    ticketDiv.className =
      "w-full bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between";

    ticketDiv.innerHTML = `
      <div>
        <h3 class="text-2xl font-semibold text-gray-900 mb-2">Ticket Details</h3>

        <div class="flex flex-col gap-2 text-gray-700">
          <div class="flex items-center gap-2">

            <i class="fa-solid fa-arrow-right-to-city text-blue-500"></i>

            <span>Departure:</span>

            <span class="font-medium text-gray-900">${schedule.departure}</span>
          </div>

          <div class="flex items-center gap-2">
            <i class="fa-solid fa-arrow-right-from-bracket text-green-500"></i>

            <span>Arrival:</span>

            <span class="font-medium text-gray-900">${schedule.arrival}</span>
          </div>

          <div class="flex items-center gap-2">
            <i class="fa-solid fa-ticket text-yellow-500"></i>

            <span>Price:</span>

            <span class="font-medium text-gray-900">${schedule.price} zł</span>
          </div>
        </div>
      </div>
      
      <button 
      data-startCity="${startCity.name}"
      data-endCity="${endCity.name}"
      data-departure="${schedule.departure}"
      data-arrival="${schedule.arrival}"
      data-price="${schedule.price}"
      data-date="${schedule.date}"

      class="buy-button mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow hover:from-blue-600 hover:to-blue-800 transition-all font-semibold text-lg flex items-center gap-2">
        <i class="fa-solid fa-cart-shopping"></i> Buy Ticket
      </button>
    `;

    container.appendChild(ticketDiv);
  });
}

function addBuyButtonListeners() {
  document.querySelectorAll(".buy-button").forEach((button) => {
    button.addEventListener("click", function () {
      const ticketData = {
        startCity: button.dataset.startcity,
        endCity: button.dataset.endcity,
        departure: button.dataset.departure,
        arrival: button.dataset.arrival,
        price: button.dataset.price,
        date: button.dataset.date,
      };

      let savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
      savedTickets.push(ticketData);
      localStorage.setItem("tickets", JSON.stringify(savedTickets));

      alert("Ticket added to your tickets page!");
    });
  });
}
