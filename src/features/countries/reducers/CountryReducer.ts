export interface State {
  country: string;
  errorMessage: string;
}

export const initialState: State = {
  country: "",
  errorMessage: "",
};

export type SetCountry = {
  type: "set-country";
  payload: string;
};

export type SetErrorMessage = { type: "set-error-message"; payload: string };

export type CountryActions = SetCountry | SetErrorMessage;

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
    case "set-error-message":
      return {
        ...state,
        errorMessage: payload,
      };
  }
};
