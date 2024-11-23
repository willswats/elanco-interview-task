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

    searchValue = searchValue.toLowerCase();
    const countryData = await fetchWithCountry({
      country: searchValue,
      url: "https://countriesnow.space/api/v0.1/countries/population",
    });
    const flagData = await fetchWithCountry({
      country: searchValue,
      url: "https://countriesnow.space/api/v0.1/countries/flag/images",
    });
    // "https://countriesnow.space/api/v0.1/countries/capital"

    if (!countryData.error) {
      dispatch({
        type: "set-country-data",
        payload: {
          country: countryData.data.country,
          flag: flagData.data.flag,
          populationCounts: countryData.data.populationCounts,
        },
      });
    } else {
      dispatch({ type: "set-error-message", payload: countryData.msg });
    }
  } catch (e) {
    const error = e as Error;
    dispatch({ type: "set-error-message", payload: error.message });
  }
};
