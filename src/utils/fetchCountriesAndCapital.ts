export const fetchCountriesAndCapital = async () => {
  const response = await fetch(
    "https://countriesnow.space/api/v0.1/countries/capital",
  );
  const data = await response.json();

  return data;
};
