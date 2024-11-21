// todo: specify return for these
import { CountrySearch } from "@/features/countries";

export default async function Home() {
  // "https://countriesnow.space/api/v0.1/countries/capital"
  // "https://countriesnow.space/api/v0.1/countries/flag/images",

  return (
    <div>
      <CountrySearch />
    </div>
  );
}
