import { CountrySearch, CountryPopulation } from "@/features/countries";

export default function Home() {
  return (
    <div>
      <CountrySearch />
      <CountryPopulation />
    </div>
  );
}
