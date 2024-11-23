import { CountrySearch, CountryPopulation } from "@/features/countries";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <CountrySearch />
      <CountryPopulation />
    </div>
  );
}
