"use client";
import Image from "next/image";

import { useCountryContext, populationCounts } from "@/features/countries";

export const CountryPopulation = () => {
  const { state } = useCountryContext();

  return (
    <>
      {state.errorMessage.length > 0 ? (
        <h1>Error: {state.errorMessage}</h1>
      ) : (
        <>
          {state.countryData.flag && (
            <Image
              src={state.countryData.flag}
              width={200}
              height={200}
              alt="Flag"
              priority={true}
            />
          )}
          <h1>{state.countryData.country}</h1>
          {state.countryData.populationCounts.map((obj: populationCounts) => (
            <p key={obj.year}>
              {obj.year} - {obj.value}
            </p>
          ))}
        </>
      )}
    </>
  );
};
