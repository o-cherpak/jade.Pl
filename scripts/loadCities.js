export async function getCities() {
  const respon = await fetch("../src/cities.json");
  const cities = await respon.json();

  return cities;
}
