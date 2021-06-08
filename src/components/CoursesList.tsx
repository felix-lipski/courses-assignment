import { useQuery } from "react-query";

const groupByField = (statsArr: any[], field: string) =>
  statsArr
    .reduce(
      (prev: any, stat: any) =>
        !prev.includes(stat[field]) ? prev.concat(stat[field]) : prev,
      []
    )
    .map((fieldName: string) => [
      fieldName,
      statsArr.filter((stat: any) => stat[field] === fieldName),
    ]);

const CoursesList = () => {
  const { isLoading, error, data }: any = useQuery("repoData", () =>
    fetch(
      "https://xtramile.azure-api.net/stats/lukaszcoding?apiSecret=i34nvn324gdfg5"
    ).then((res) => res.json())
  );
  if (isLoading) return <p>"Loading data..."</p>;
  if (error) return <p>"An error has occurred: " + error.message</p>;

  return (
    <div>
      {groupByField(data, "course").map(([key, val]: any) => (
        <h3 key={key}>{key}</h3>
      ))}
    </div>
  );
};

export default CoursesList;
