interface fetchWithCountry {
  url: string;
  country: string;
}

export const fetchWithCountry = async ({ country, url }: fetchWithCountry) => {
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
    body: `{"country": "${country}"}`,
  };

  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
