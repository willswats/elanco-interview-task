"use client";

import { Search } from "@/components";
import { useCountryContext, setCountryData } from "@/features/countries";
import { useState, ChangeEvent, FormEvent } from "react";

export const CountrySearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const { dispatch } = useCountryContext();

  const searchSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchValue.length > 0) {
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
