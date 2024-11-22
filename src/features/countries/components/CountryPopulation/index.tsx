"use client";

import { useCountryContext, populationCounts } from "@/features/countries";

export const CountryPopulation = () => {
  const { state } = useCountryContext();

  return (
    <>
      {state.populationCounts.map((obj: populationCounts) => (
        <p key={obj.year}>
          {obj.year} - {obj.value}
        </p>
      ))}
    </>
  );
};
