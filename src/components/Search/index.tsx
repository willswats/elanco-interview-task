import { ChangeEvent, FormEvent } from "react";

import { ButtonSvg, SvgSearchLine } from "@/components";

import styles from "./styles.module.css";

interface Search {
  placeHolder: string;
  inputValue: string;
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({
  placeHolder,
  inputValue,
  submitHandler,
  changeHandler,
}: Search) => {
  return (
    <form onSubmit={submitHandler} className={styles["search"]}>
      <input
        className={styles["search__input"]}
        value={inputValue}
        onChange={changeHandler}
        placeholder={placeHolder}
      />
      <ButtonSvg svg={<SvgSearchLine />} />
    </form>
  );
};
