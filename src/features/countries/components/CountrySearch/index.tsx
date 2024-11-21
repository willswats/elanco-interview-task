"use client";

import { Search } from "@/components";
import { useCountryContext, setCountryData } from "@/features/countries";
import { useState, ChangeEvent, FormEvent } from "react";

export const CountrySearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const { state, dispatch } = useCountryContext();

  const searchSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchValue.length > 0) {
      dispatch({ type: "set-country", payload: searchValue });
      // todo: await this
      setCountryData({ country: searchValue, dispatch });
      console.log(state);
    }

    setSearchValue("");
  };

  const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Search
      placeHolder="Country..."
      inputValue={searchValue}
      submitHandler={searchSubmitHandler}
      changeHandler={searchChangeHandler}
    />
  );
};
