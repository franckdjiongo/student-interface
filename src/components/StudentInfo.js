export function StudentInfo({ student, grades }) {
  let gradesToNumbers = grades.map((i) => Number(i));
  return (
    <li>
      <img src={student.pic} alt="Profile pic" width="150"></img>
      <span>
        {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
      </span>
      <span>Email : {student.email}</span>
      <span>Company : {student.company} </span>
      <span>Skill : {student.skill} </span>
      <span>
        Average : {gradesToNumbers.reduce((a, b) => a + b, 0) / grades.length}
        {"%"}
      </span>
    </li>
  );
}
