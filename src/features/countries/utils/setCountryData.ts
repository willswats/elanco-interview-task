import { Dispatch } from "react";
import {
  fetchWithCountry,
  CountryActions,
  resetCountryData,
} from "@/features/countries";

interface setWeatherData {
  searchValue: string;
  dispatch: Dispatch<CountryActions>;
}

export const setCountryData = async ({
  searchValue,
  dispatch,
}: setWeatherData) => {
  try {
    resetCountryData({ dispatch });
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
};
