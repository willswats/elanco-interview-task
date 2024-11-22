import { CountrySearch, CountryPopulation } from "@/features/countries";

export default function Home() {
  // "https://countriesnow.space/api/v0.1/countries/capital"
  // "https://countriesnow.space/api/v0.1/countries/flag/images",

  return (
    <div>
      <CountrySearch />
      <CountryPopulation />
    </div>
  );
}
