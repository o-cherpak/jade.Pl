document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);

  const pointA = params.get("pointA");
  const pointB = params.get("pointB");
  const date = params.get("date");

  document.getElementById("pointA").textContent = pointA;
  document.getElementById("pointB").textContent = pointB;
  document.getElementById("date").textContent = date;
});
