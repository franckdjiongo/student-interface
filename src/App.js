import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { StudentInfo } from "./components/StudentInfo";
import { Search } from "./components/Search";
import { Introduction } from "./components/Introduction";
import myImage from "./bon.jpg";

function App() {
  const [studentList, setStudentList] = useState([]);
  const [queryByName, setQueryByName] = useState("");
  const [queryByTag, setQueryByTag] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    fetch("https://api.hatchways.io/assessment/students")
      .then((response) => response.json())
      .then((data) => setStudentList(Object.values(data)))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <h1>Loading students data...</h1>;
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  const studentListWithTags = studentList.map((students) =>
    students.map((student) => ({
      id: student.id,
      city: student.city,
      company: student.company,
      email: student.email,
      firstName: student.firstName,
      grades: student.grades,
      lastName: student.lastName,
      pic: student.pic,
      skill: student.skill,
      tags: [],
    }))
  );

  const filteredStudentList = studentListWithTags.map((students) =>
    students.filter((student) => {
      return (
        student.firstName.toLowerCase().includes(queryByName.toLowerCase()) ||
        student.lastName.toLowerCase().includes(queryByName.toLowerCase())
      );
    })
  );

  return (
    <section>
      <Introduction myImage={myImage} />
      <div className="center">
        <div className="app-search-div">
          <Search
            placeholder="Search by name"
            queryByName={queryByName}
            onQueryChange={(myQuery) => setQueryByName(myQuery)}
          />

          <Search
            placeholder="Search by tag"
            queryByName={queryByTag}
            onQueryChange={(myQuery) => setQueryByTag(myQuery)}
          />
        </div>

        {
          <ul className="app-ul">
            {filteredStudentList.map((students) =>
              students.map((student) => (
                <StudentInfo student={student} key={student.id}></StudentInfo>
              ))
            )}
          </ul>
        }
      </div>
    </section>
  );
}

export default App;
