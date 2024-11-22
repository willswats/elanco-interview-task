export interface populationCounts {
  year: number;
  value: number;
}

export interface State {
  country: string;
  populationCounts: populationCounts[];
  errorMessage: string;
}

export const initialState: State = {
  country: "",
  populationCounts: [],
  errorMessage: "",
};

export type SetCountry = {
  type: "set-country";
  payload: string;
};

export type SetPopulationCounts = {
  type: "set-population-counts";
  payload: populationCounts[];
};

export type SetErrorMessage = { type: "set-error-message"; payload: string };

export type CountryActions = SetCountry | SetPopulationCounts | SetErrorMessage;

export const reducer = (
  state: State,
  { type, payload }: CountryActions,
): State => {
  switch (type) {
    case "set-country":
      return {
        ...state,
        country: payload,
      };
    case "set-population-counts":
      return {
        ...state,
        populationCounts: payload,
      };
    case "set-error-message":
      return {
        ...state,
        errorMessage: payload,
      };
  }
};
