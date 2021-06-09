import { StatObj, StatsArr } from "./types";

// transform an array of object into and array of [key, val] pairs (entries)
// where key is the value of the property grouped by, and val is an array of
// all the objects in which the property grouped by equals to the key
// (StatsArr, string) -> [[string, StatsArr]]
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
