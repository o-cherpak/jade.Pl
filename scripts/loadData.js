export async function getCities() {
  const respon = await fetch("../src/cities.json");
  const cities = await respon.json();

  return cities;
}

export async function getSchedules() {
  const respon = await fetch("../src/shedules.json");
  const shedules = await respon.json();

  return shedules;
}
