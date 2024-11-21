"use client";

import {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from "react";

import {
  State,
  CountryActions,
  initialState,
  reducer,
} from "@/features/countries";

interface CountryContext {
  state: State;
  dispatch: Dispatch<CountryActions>;
}

interface CountryContextProvider {
  children: ReactNode;
}

const CountryContext = createContext<CountryContext | null>(null);

export const useCountryContext = () => {
  const currentCountryContext = useContext(CountryContext);

  if (!currentCountryContext) {
    throw new Error(
      "useCountryContext has to be used within <CurrentCountryContext.Provider>",
    );
  }

  return currentCountryContext;
};

export const CountryContextProvider = ({
  children,
}: CountryContextProvider) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountryContext.Provider value={{ state, dispatch }}>
      {children}
    </CountryContext.Provider>
  );
};
