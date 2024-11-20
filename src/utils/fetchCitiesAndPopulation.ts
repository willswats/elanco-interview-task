export const fetchCitiesAndPopulation = async () => {
  const response = await fetch(
    "https://countriesnow.space/api/v0.1/countries/population/cities",
  );
  const data = await response.json();

  return data;
};