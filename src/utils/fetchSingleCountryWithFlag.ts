interface fetchSingleCountryWithFlag {
  iso2: string;
}

export const fetchSingleCountryWithFlag = async ({
  iso2,
}: fetchSingleCountryWithFlag) => {
  interface options {
    method: string;
    headers: {
      "Content-Type": string;
      Accept: string;
    };
    body: string;
  }

  const options: options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: `{"iso2": "${iso2}"}`,
  };

  const response = await fetch(
    "https://countriesnow.space/api/v0.1/countries/flag/images",
    options,
  );
  const data = await response.json();

  return data;
};
