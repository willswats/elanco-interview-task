export interface populationCounts {
  year: number;
  value: number;
}

export interface countryData {
  country: string;
  flag: string;
  populationCounts: populationCounts[];
}

export interface State {
  countryData: countryData;
  loading: boolean;
  errorMessage: string;
}

export const initialState: State = {
  countryData: {
    country: "",
    flag: "",
    populationCounts: [],
  },
  loading: false,
  errorMessage: "",
};

export type SetCountryData = {
  type: "set-country-data";
  payload: {
    country: string;
    flag: string;
    populationCounts: populationCounts[];
  };
};

export type SetLoading = { type: "set-loading"; payload: boolean };

export type SetErrorMessage = { type: "set-error-message"; payload: string };

export type CountryActions = SetCountryData | SetLoading | SetErrorMessage;

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
          flag: payload.flag,
          populationCounts: payload.populationCounts,
        },
      };
    case "set-loading":
      return {
        ...state,
        loading: payload,
      };
    case "set-error-message":
      return {
        ...state,
        errorMessage: payload,
      };
  }
};
