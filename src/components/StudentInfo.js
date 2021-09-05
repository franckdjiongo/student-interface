import "./studentInfo.css";

export function StudentInfo({ student, grades }) {
  let gradesToNumbers = grades.map((i) => Number(i));
  return (
    <div>
      <li className="span-container">
        <img src={student.pic} alt="Profile pic" width="100"></img>
        <div>
          <span>
            {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
          </span>
          <span className="padding-left">Email : {student.email}</span>
          <span className="padding-left">Company : {student.company} </span>
          <span className="padding-left">Skill : {student.skill} </span>
          <span className="padding-left">
            Average :{" "}
            {gradesToNumbers.reduce((a, b) => a + b, 0) / grades.length}
            {"%"}
          </span>
        </div>
      </li>
      <span className="line"></span>
    </div>
  );
}
