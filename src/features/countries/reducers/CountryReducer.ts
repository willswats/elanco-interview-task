export interface populationCounts {
  year: number;
  value: number;
}

export interface countryData {
  country: string;
  populationCounts: populationCounts[];
}

export interface State {
  countryData: countryData;
  errorMessage: string;
}

export const initialState: State = {
  countryData: {
    country: "",
    populationCounts: [],
  },
  errorMessage: "",
};

export type SetCountryData = {
  type: "set-country-data";
  payload: {
    country: string;
    populationCounts: populationCounts[];
  };
};

export type SetErrorMessage = { type: "set-error-message"; payload: string };

export type CountryActions = SetCountryData | SetErrorMessage;

export const reducer = (
  state: State,
  { type, payload }: CountryActions,
): State => {
  switch (type) {
    case "set-country-data":
      return {
        ...state,
        countryData: {
          country: payload.country,
          populationCounts: payload.populationCounts,
        },
      };
    case "set-error-message":
      return {
        ...state,
        errorMessage: payload,
      };
  }
};
