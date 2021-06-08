import { groupByField } from "../utils";
import { StatObj, StatsArr } from "../types";

interface PropsInterface {
  courseName: string;
  statsArr: StatsArr;
}

const CourseStats = ({ courseName, statsArr }: PropsInterface) => {
  return (
    <article>
      <h1>{courseName}</h1>
      <dl></dl>
      Projects:
      <ul>
        {statsArr.map((x: any) => (
          <li>{x.project}</li>
        ))}
      </ul>
    </article>
  );
};
export default CourseStats;
