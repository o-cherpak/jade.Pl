$(document).ready(function () {
  fetch("./src/cities.json")
    .then((response) => response.json())
    .then((data) => {
      const cities = data.map((city) => city.name);

      $("#cityInputA").autocomplete({ source: cities });
      $("#cityInputB").autocomplete({ source: cities });
    });
});
