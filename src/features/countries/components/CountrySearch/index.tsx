"use client";

import { Search } from "@/components";
import { useCountryContext, setCountryData } from "@/features/countries";
import { useState, ChangeEvent, FormEvent } from "react";

export const CountrySearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const { dispatch } = useCountryContext();

  const searchSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const regex = /[^A-Za-z\s]/g; // Matches any character that is not in the alphabet or not a whitespace character
    if (searchValue.length > 0 && searchValue.match(regex) === null) {
      setCountryData({ searchValue, dispatch });
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
