$(document).ready(function () {
  fetch("./src/cities.json")
    .then((response) => response.json())
    .then((data) => {
      const cities = data.map((item) => item);

      $("#cityInputA").autocomplete({ source: cities });
      $("#cityInputB").autocomplete({ source: cities });
    });
});
