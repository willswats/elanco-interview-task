// todo: specify return for these
import { fetchCitiesAndPopulation } from "@/utils/fetchCitiesAndPopulation";
import { fetchCountriesAndCapital } from "@/utils/fetchCountriesAndCapital";
import { fetchSingleCountryWithFlag } from "@/utils/fetchSingleCountryWithFlag";

export default async function Home() {
  const countriesAndCapitals = await fetchCountriesAndCapital();
  console.log(countriesAndCapitals);

  const singleCountryWithFlag = await fetchSingleCountryWithFlag({
    iso2: "NG",
  });
  console.log(singleCountryWithFlag);

  const citiesAndPopulation = await fetchCitiesAndPopulation();
  console.log(citiesAndPopulation);

  return <div>test</div>;
}
