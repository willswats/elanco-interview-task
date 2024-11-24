import { Dispatch } from "react";
import { CountryActions } from "@/features/countries";

interface resetWeatherData {
  dispatch: Dispatch<CountryActions>;
}

export const resetCountryData = ({ dispatch }: resetWeatherData): void => {
  dispatch({
    type: "set-country-data",
    payload: {
      country: "",
      flag: "",
      populationCounts: [],
    },
  });
  dispatch({ type: "set-error-message", payload: "" });
};
