import { useMemo, useReducer } from "react";
import "./studentInfo.css";

export function StudentInfo({ student, grades }) {
  const gradesToNumbers = useMemo(() => grades.map((i) => Number(i)), [grades]);
  const average = useMemo(
    () => gradesToNumbers.reduce((a, b) => a + b, 0) / grades.length,
    [gradesToNumbers, grades.length]
  );
  const [toggleScores, setToggleScores] = useReducer(
    (toggleScores) => !toggleScores,
    true
  );
  return (
    <div>
      <li className="span-container">
        <img src={student.pic} alt="Profile pic" width="100"></img>
        <div>
          <span>
            {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
            <button onClick={setToggleScores}>{`${
              toggleScores ? "+" : "-"
            }`}</button>
          </span>

          <span className="padding-left">Email : {student.email}</span>
          <span className="padding-left">Company : {student.company} </span>
          <span className="padding-left">Skill : {student.skill} </span>
          <span className="padding-left">
            Average : {average}
            {"%"}
          </span>

          {gradesToNumbers.map((grade, id) => (
            <span
              className="padding-left"
              style={{ display: `${toggleScores ? "none" : "block"}` }}
            >
              {" "}
              Test {id++ + 1} : &nbsp; &nbsp; &nbsp; {grade}%
            </span>
          ))}
        </div>
      </li>
      <span className="line"></span>
    </div>
  );
}
