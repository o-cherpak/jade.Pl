document.addEventListener("DOMContentLoaded", rendermyTicket);

function rendermyTicket() {
  const container = document.getElementById("myticketsContainer");
  container.innerHTML = "";

  const tickets = JSON.parse(localStorage.getItem("tickets")) || [];

  console.log(tickets);

  tickets.forEach((ticket) => {
    const ticketDiv = document.createElement("div");

    ticketDiv.className =
      "w-full bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between";

    ticketDiv.innerHTML = `
      <div>
        <h3 class="text-2xl font-semibold text-gray-900 mb-2">Ticket Details: ${ticket.startCity} - ${ticket.endCity}</h3>

        <div class="flex flex-col gap-2 text-gray-700">
          <div class="flex items-center gap-2">

            <i class="fa-solid fa-arrow-right-to-city text-blue-500"></i>

            <span>Departure:</span>

            <span class="font-medium text-gray-900">${ticket.departure}</span>
          </div>

          <div class="flex items-center gap-2">
            <i class="fa-solid fa-arrow-right-from-bracket text-green-500"></i>

            <span>Arrival:</span>

            <span class="font-medium text-gray-900">${ticket.arrival}</span>
          </div>

          <div class="flex items-center gap-2">
            <i class="fa-solid fa-ticket text-yellow-500"></i>

            <span>Price:</span>

            <span class="font-medium text-gray-900">${ticket.price} zł</span>
          </div>

          <div class="flex items-center gap-2">
            <i class="fa-solid fa-ticket text-yellow-500"></i>

            <span>Date:</span>

            <span class="font-medium text-gray-900">${ticket.date}</span>
          </div>
        </div>
      </div>

    `;

    container.appendChild(ticketDiv);
  });
}
