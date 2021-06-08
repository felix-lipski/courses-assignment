import { useQuery } from "react-query";

const StatsList = () => {
  const { isLoading, error, data }: any = useQuery("repoData", () =>
    fetch(
      "https://xtramile.azure-api.net/stats/lukaszcoding?apiSecret=i34nvn324gdfg5"
    ).then((res) => res.json())
  );
  if (isLoading) return <p>"Loading data..."</p>;
  if (error) return <p>"An error has occurred: " + error.message</p>;

  return (
    <div>
      <button onClick={() => console.log(data)}>data</button>
    </div>
  );
};

export default StatsList;
