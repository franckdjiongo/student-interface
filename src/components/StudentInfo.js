import { useReducer } from "react";
import "./studentInfo.css";

export function StudentInfo({ student, grades }) {
  let gradesToNumbers = grades.map((i) => Number(i));
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
            Average :{" "}
            {gradesToNumbers.reduce((a, b) => a + b, 0) / grades.length}
            {"%"}
          </span>

          {gradesToNumbers.map((grade, id) => (
            <span style={{ display: `${toggleScores ? "none" : "block"}` }}>
              Test {id++ + 1} : {grade}%
            </span>
          ))}
        </div>
      </li>
      <span className="line"></span>
    </div>
  );
}
