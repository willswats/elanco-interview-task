"use client";
import Image from "next/image";
import { Statistic } from "@/components";
import {
  useCountryContext,
  CountryPopulationLineChart,
} from "@/features/countries";

import SvgSearch from "public/assets/search-line.svg";

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
                <h1>{state.countryData.country}</h1>
                <Statistic
                  statistic={lastPopulationCountsValue}
                  text={`Population in latest year (${lastPopulationCountsYear})`}
                  svg={<SvgSearch />}
                />
                <Image
                  src={state.countryData.flag}
                  width={200}
                  height={200}
                  alt="Flag"
                  priority={true}
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
