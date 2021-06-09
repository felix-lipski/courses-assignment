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
      <header>
        <h1>{courseName}</h1>
      </header>
      <hr />
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
      <hr />
      {tableExpanded && (
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Person</th>
              <th className="number-column">Lessons Opened</th>
              <th className="number-column">Lessons Completed</th>
            </tr>
          </thead>
          <tbody>
            {statsArr.map((stat: StatObj) => (
              <tr key={stat.project + stat.person + stat.courseStartedDate}>
                <td>{stat.project}</td>
                <td>{stat.person}</td>
                <td className="number-column">{stat.openedLessonsCount}</td>
                <td className="number-column">{stat.completedLessonsCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={() => setTableExpanded(!tableExpanded)}>
        {tableExpanded ? "Collapse details ^" : "Expand details..."}
      </button>
    </article>
  );
};
export default CourseStats;
