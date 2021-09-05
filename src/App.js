import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { StudentInfo } from "./components/StudentInfo";

function App() {
  let [studentList, setStudentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((response) => response.json())
      .then((data) => setStudentList(Object.values(data)));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section>
      <div className="center">
        {
          <ul>
            {studentList.map((students) =>
              students.map((element) => (
                <StudentInfo
                  student={element}
                  key={element.id}
                  grades={element.grades}
                />
              ))
            )}
          </ul>
        }
      </div>
    </section>
  );
}

export default App;
