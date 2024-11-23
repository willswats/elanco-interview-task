import { Dispatch } from "react";
import { CountryActions } from "@/features/countries";

interface resetWeatherData {
  dispatch: Dispatch<CountryActions>;
}

export const resetCountryData = ({ dispatch }: resetWeatherData) => {
  dispatch({ type: "set-country", payload: "" });
  dispatch({
    type: "set-population-counts",
    payload: [],
  });
  dispatch({ type: "set-error-message", payload: "" });
};
