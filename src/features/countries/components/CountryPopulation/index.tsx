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
  const populationCounts = state.countryData.populationCounts;

  return (
    <>
      {!state.errorMessage && !state.countryData.country && !state.loading && (
        <section className={styles["country-population__text"]}>
          Enter a country into the input to find it&apos;s population (e.g
          &quot;Nigeria&quot;).
        </section>
      )}

      {state.loading && (
        <section className={styles["country-population__loading"]}>
          <LoadingIndicator />
        </section>
      )}

      {state.errorMessage.length > 0 && (
        <section className={styles["country-population__instructions"]}>
          Error: {state.errorMessage}
        </section>
      )}

      {state.countryData.country && (
        <>
          <section className={styles["country-population__country"]}>
            <section>
              <h1>{state.countryData.country}</h1>
              <p>
                <UserLine />
                {populationCounts[
                  populationCounts.length - 1
                ].value.toLocaleString()}
              </p>
              <span>
                Population in latest year (
                {populationCounts[populationCounts.length - 1].year.toString()})
              </span>
            </section>
            <section className={styles["country-population__country-end"]}>
              <Image
                className={styles["country-population__flag"]}
                src={state.countryData.flag}
                width={200}
                height={100}
                alt="Flag"
                priority={true}
              />
            </section>
          </section>
          <CountryPopulationLineChart
            label="Population"
            populationCounts={state.countryData.populationCounts}
          />
        </>
      )}
    </>
  );
};
