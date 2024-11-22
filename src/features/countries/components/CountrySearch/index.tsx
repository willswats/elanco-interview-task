"use client";

import { Search } from "@/components";
import { useCountryContext, fetchWithCountry } from "@/features/countries";
import { useState, ChangeEvent, FormEvent } from "react";

export const CountrySearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const { dispatch } = useCountryContext();

  const searchSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchValue.length > 0) {
      try {
        const countryData = await fetchWithCountry({
          country: searchValue,
          url: "https://countriesnow.space/api/v0.1/countries/population",
        });
        dispatch({ type: "set-country", payload: searchValue });
        dispatch({
          type: "set-population-counts",
          payload: countryData.data.populationCounts,
        });
      } catch (e) {
        const error = e as Error;
        dispatch({ type: "set-error-message", payload: error.message });
      }
    }
    setSearchValue("");
  };

  const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Search
      placeHolder="Country..."
      inputValue={searchValue}
      submitHandler={searchSubmitHandler}
      changeHandler={searchChangeHandler}
    />
  );
};
