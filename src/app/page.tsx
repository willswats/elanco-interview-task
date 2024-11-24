import { CountrySearch, CountryPopulation } from "@/features/countries";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <div className={styles["home__search"]}>
        <CountrySearch />
      </div>
      <CountryPopulation />
    </div>
  );
}
