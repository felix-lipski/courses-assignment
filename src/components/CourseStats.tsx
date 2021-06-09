import { useState } from "react";

import { StatObj, StatsArr } from "../types";

interface PropsInterface {
  courseName: string;
  statsArr: StatsArr;
}

const CourseStats = ({ courseName, statsArr }: PropsInterface) => {
  const [tableExpanded, setTableExpanded] = useState(false);
  return (
    <article>
      <h1>{courseName}</h1>
      <dl>
        <dt>Total Lessons Opened:</dt>
        <dd>
          {statsArr.reduce(
            (prev: number, stat: StatObj) =>
              prev + parseInt(stat.openedLessonsCount),
            0
          )}
        </dd>
        <dt>Total Lessons Completed:</dt>
        <dd>
          {statsArr.reduce(
            (prev: number, stat: StatObj) => prev + stat.completedLessonsCount,
            0
          )}
        </dd>
      </dl>
      {tableExpanded && (
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Person</th>
              <th>Lessons Opened</th>
              <th>Lessons Completed</th>
            </tr>
          </thead>
          <thead>
            {statsArr.map((stat: StatObj) => (
              <tr key={stat.project + stat.person + stat.courseStartedDate}>
                <td>{stat.project}</td>
                <td>{stat.person}</td>
                <td>{stat.openedLessonsCount}</td>
                <td>{stat.completedLessonsCount}</td>
              </tr>
            ))}
          </thead>
        </table>
      )}
      <button onClick={() => setTableExpanded(!tableExpanded)}>
        {tableExpanded ? "^" : "v"}
      </button>
    </article>
  );
};
export default CourseStats;
