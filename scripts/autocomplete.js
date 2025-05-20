import { getCities } from "./loadCities.js";

$(async function () {
  const cities = await getCities();
  const cityNames = cities.map((c) => c.name);

  $("#cityInputA").autocomplete({ source: cityNames });
  $("#cityInputB").autocomplete({ source: cityNames });
});
