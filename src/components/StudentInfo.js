import { useMemo, useReducer } from "react";
import "./studentInfo.css";

export function StudentInfo({ student }) {
  const gradesToNumbers = useMemo(
    () => student.grades.map((i) => Number(i)),
    [student.grades]
  );

  const averageGrade = useMemo(
    () => gradesToNumbers.reduce((a, b) => a + b, 0) / student.grades.length,
    [gradesToNumbers, student.grades.length]
  );
  const [toggleGrades, setToggleGrades] = useReducer(
    (toggleGrades) => !toggleGrades,
    true
  );

  const [isShowTag, setIsShowTag] = useReducer(
    (isShowTag) => !isShowTag,
    false
  );

  return (
    <div className="div-intro">
      <li className="span-container">
        <img
          className="img-info"
          src={student.pic}
          alt="Profile pic"
          width="100"
        ></img>
        <div className="div-intro">
          <span>
            {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
            <button className="btn-test" onClick={setToggleGrades}>{`${
              toggleGrades ? "show" : "hide"
            }`}</button>
          </span>
          <span className="padding-left">Email : {student.email}</span>
          <span className="padding-left">Company : {student.company} </span>
          <span className="padding-left">Skill : {student.skill} </span>
          <span className="padding-left">
            Average : {averageGrade}
            {"%"}
          </span>
          {gradesToNumbers.map((grade, id) => (
            <span
              key={id}
              className="padding-left"
              style={{ display: `${toggleGrades ? "none" : "block"}` }}
            >
              {" "}
              Test {id++ + 1} : &nbsp; &nbsp; &nbsp; {grade}%
            </span>
          ))}
          {
            <span
              className="padding-left"
              style={{ display: `${isShowTag ? "inline" : "inline"}` }}
            >
              {student.tags.map((tag, index) => (
                <button key={index} className="btn-tag">
                  {tag}
                </button>
              ))}
            </span>
          }
          <span className="padding-left">
            <input
              className="input-tag"
              placeholder="Add a tag"
              type="text"
              name="tag"
              id="tag"
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  student.tags.push(event.target.value);
                  setIsShowTag();
                }
              }}
            ></input>
          </span>
        </div>
      </li>

      <span className="line"></span>
    </div>
  );
}
