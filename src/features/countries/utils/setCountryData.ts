import { Dispatch } from "react";
import { fetchWithCountry, CountryActions } from "@/features/countries";

interface SetCountryData {
  country: string;
  dispatch: Dispatch<CountryActions>;
}

export const setCountryData = async ({ country, dispatch }: SetCountryData) => {
  try {
    const countryData = await fetchWithCountry({
      country: country,
      url: "https://countriesnow.space/api/v0.1/countries/population",
    });
    dispatch({
      type: "set-population-counts",
      payload: countryData.populationCounts,
    });
  } catch (e) {
    const error = e as Error;
    dispatch({ type: "set-error-message", payload: error.message });
  }
};
