// todo: specify return for these
import { CountrySearch } from "@/features/countries";

export default async function Home() {
  // const { state } = useCountryContext();

  // const citiesAndPopulation = await fetchWithCountry({
  //   url: "https://countriesnow.space/api/v0.1/countries/population",
  //   country: "Nigeria",
  // });
  // const countriesAndCapitals = await fetchWithCountry({
  //   url: "https://countriesnow.space/api/v0.1/countries/capital",
  //   country: "Nigeria",
  // });
  // const singleCountryWithFlag = await fetchWithCountry({
  //   url: "https://countriesnow.space/api/v0.1/countries/flag/images",
  //   country: "Nigeria",
  // });
  //

  return (
    <div>
      <CountrySearch />
    </div>
  );
}
