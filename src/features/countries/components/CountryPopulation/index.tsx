"use client";
import Image from "next/image";
import { Statistic } from "@/components";
import {
  useCountryContext,
  CountryPopulationLineChart,
} from "@/features/countries";

import SvgSearch from "public/assets/search-line.svg";

import styles from "./styles.module.css";

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
      {state.errorMessage.length > 0 ? (
        <h1>Error: {state.errorMessage}</h1>
      ) : (
        <>
          {state.countryData.country &&
            state.countryData.flag &&
            state.countryData.populationCounts.length > 0 && (
              <>
                <div className={styles["country-population__country"]}>
                  <h1>{state.countryData.country}</h1>
                  <Image
                    src={state.countryData.flag}
                    width={200}
                    height={100}
                    alt="Flag"
                    priority={true}
                  />
                </div>
                <Statistic
                  statistic={lastPopulationCountsValue}
                  text={`Population in latest year (${lastPopulationCountsYear})`}
                  svg={<SvgSearch />}
                />
                <CountryPopulationLineChart
                  label="Population Counts"
                  populationCounts={state.countryData.populationCounts}
                />
              </>
            )}
        </>
      )}
    </>
  );
};
