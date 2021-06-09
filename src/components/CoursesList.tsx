import { useQuery } from "react-query";

import { groupByField } from "../utils";
import { StatsArr, FetchError } from "../types";
import CourseStats from "./CourseStats";

import "./CoursesList.scss";

const CoursesList = () => {
  const {
    isLoading,
    error,
    data,
  }: {
    isLoading: boolean;
    error: FetchError;
    data: StatsArr | undefined;
  } = useQuery("repoData", () =>
    fetch(
      "https://xtramile.azure-api.net/stats/lukaszcoding?apiSecret=i34nvn324gdfg5"
    ).then((res) => res.json())
  );
  if (isLoading) return <p>Loading data...</p>;
  if (error) return <p>{"An error has occurred: " + error.message}</p>;

  if (data !== undefined)
    return (
      <section>
        {groupByField(data, "course").map(([key, val]: [string, StatsArr]) => (
          <CourseStats statsArr={val} courseName={key} key={key} />
        ))}
      </section>
    );
  return <p></p>;
};

export default CoursesList;
