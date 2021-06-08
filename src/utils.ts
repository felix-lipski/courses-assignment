import { StatObj, StatsArr } from "./types";

export const groupByField = (statsArr: StatsArr, field: string) =>
  statsArr
    .reduce(
      (prev: any, stat: StatObj) =>
        !prev.includes(stat[field]) ? prev.concat(stat[field]) : prev,
      []
    )
    .map((fieldName: string) => [
      fieldName,
      statsArr.filter((stat: StatObj) => stat[field] === fieldName),
    ]);
