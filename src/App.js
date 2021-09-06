import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { StudentInfo } from "./components/StudentInfo";
import { Search } from "./components/Search";

function App() {
  const [studentList, setStudentList] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = useCallback(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((response) => response.json())
      .then((data) => setStudentList(Object.values(data)));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredStudentList = studentList.map((students) =>
    students.filter((item) => {
      return (
        item.firstName.toLowerCase().includes(query.toLowerCase()) ||
        item.lastName.toLowerCase().includes(query.toLowerCase())
      );
    })
  );

  return (
    <section>
      <div className="center">
        <Search query={query} onQueryChange={(myQuery) => setQuery(myQuery)} />
        {
          <ul>
            {filteredStudentList.map((students) =>
              students.map((student) => (
                <StudentInfo
                  student={student}
                  key={student.id}
                  grades={student.grades}
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
