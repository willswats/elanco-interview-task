import { MouseEvent } from "react";

import styles from "./styles.module.css";

interface ButtonSvg {
  svg: JSX.Element;
  clickHandler?: (event: MouseEvent) => void;
}

export const ButtonSvg = ({ svg, clickHandler }: ButtonSvg) => {
  return (
    <button onClick={clickHandler} className={styles["button-svg"]}>
      {svg}
    </button>
  );
};
