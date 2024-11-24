"use client";
import Image from "next/image";
import { LoadingIndicator } from "@/components";
import {
  useCountryContext,
  CountryPopulationLineChart,
} from "@/features/countries";

import styles from "./styles.module.css";

import UserLine from "public/assets/user-line.svg";

export const CountryPopulation = () => {
  const { state } = useCountryContext();

  let lastPopulationCountsYear = "";
  let lastPopulationCountsValue = "";
  if (state.countryData.populationCounts.length > 0) {
    const populationCounts = state.countryData.populationCounts;
    lastPopulationCountsYear =
      populationCounts[populationCounts.length - 1].year.toString();
    lastPopulationCountsValue =
      populationCounts[populationCounts.length - 1].value.toLocaleString();
  }

  return (
    <>
      {!state.countryData.country && !state.loading && (
        <div className={styles["country-population__instructions"]}>
          Enter a country into the input to find it&apos;s population (e.g
          &quot;Nigeria&quot;).
        </div>
      )}

      {state.loading && (
        <div className={styles["country-population__loading"]}>
          <LoadingIndicator />
        </div>
      )}
      {state.errorMessage.length > 0 ? (
        <h1>Error: {state.errorMessage}</h1>
      ) : (
        <>
          {state.countryData.country &&
            state.countryData.flag &&
            state.countryData.populationCounts.length > 0 && (
              <>
                <div className={styles["country-population__country"]}>
                  <div>
                    <h1>{state.countryData.country}</h1>
                    <p>
                      <UserLine />
                      {lastPopulationCountsValue}
                    </p>
                    Population in latest year ({lastPopulationCountsYear})
                  </div>
                  <div className={styles["country-population__country-end"]}>
                    <Image
                      className={styles["country-population__flag"]}
                      src={state.countryData.flag}
                      width={200}
                      height={100}
                      alt="Flag"
                      priority={true}
                    />
                  </div>
                </div>
                <CountryPopulationLineChart
                  label="Population"
                  populationCounts={state.countryData.populationCounts}
                />
              </>
            )}
        </>
      )}
    </>
  );
};
