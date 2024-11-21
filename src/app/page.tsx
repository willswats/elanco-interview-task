// todo: specify return for these
import { fetchWithCountry, CountrySearch } from "@/features/countries";

export default async function Home() {
  // const { state } = useCountryContext();

  const countriesAndCapitals = await fetchWithCountry({
    url: "https://countriesnow.space/api/v0.1/countries/capital",
    country: "Nigeria",
  });

  const citiesAndPopulation = await fetchWithCountry({
    url: "https://countriesnow.space/api/v0.1/countries/population",
    country: "Nigeria",
  });

  const singleCountryWithFlag = await fetchWithCountry({
    url: "https://countriesnow.space/api/v0.1/countries/flag/images",
    country: "Nigeria",
  });

  console.log(countriesAndCapitals);

  console.log(singleCountryWithFlag);

  console.log(citiesAndPopulation);

  return (
    <div>
      <CountrySearch />
    </div>
  );
}
