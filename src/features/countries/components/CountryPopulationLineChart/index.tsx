import { LineChart } from "@/components";
import { populationCounts } from "@/features/countries";

import styles from "./styles.module.css";

interface CountryPopulationLineChart {
  label: string;
  populationCounts: populationCounts[];
}

export const CountryPopulationLineChart = ({
  label,
  populationCounts,
}: CountryPopulationLineChart) => {
  const labelArray: string[] = [];
  const dataArray: number[] = [];

  populationCounts.forEach((populationCount: populationCounts) => {
    labelArray.push(populationCount.year.toString());
    dataArray.push(populationCount.value);
  });

  return (
    <div className={styles["line-chart-population-counts"]}>
      <h2>Population</h2>
      <LineChart label={label} labelArray={labelArray} dataArray={dataArray} />
    </div>
  );
};
