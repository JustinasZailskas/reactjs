// Course.js
const Course = ({ title, duration, instructor }) => {
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
        <h3>{title}</h3>
        <p>Duration: {duration}</p>
        <p>Instructor: {instructor}</p>
      </div>
    );
  };
  
  export default Course;
  
  // CourseList.js
  import Course from "./Course";
  
  const CourseList = ({ courses }) => {
    return (
      <div>
        <h2>Available Courses:</h2>
        {courses.map((course) => (
          <Course
            key={course.id}
            title={course.title}
            duration={course.duration}
            instructor={course.instructor}
          />
        ))}
      </div>
    );
  };
  
  export default CourseList;
  
  // App.js
  import CourseList from "./CourseList";
  
  const App = () => {
    const courses = [
      { id: 1, title: "React Basics", duration: "3 weeks", instructor: "John Doe" },
      { id: 2, title: "JavaScript Essentials", duration: "4 weeks", instructor: "Jane Smith" },
      { id: 3, title: "HTML & CSS", duration: "2 weeks", instructor: "Alice Johnson" },
    ];
  
    return (
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h1>Welcome to Our Course Platform!</h1>
        <CourseList courses={courses} />
      </div>
    );
  };
  
  export default App;
  
// Pakeiskite kursų masyvą, pridėdami dar kelis kursus.
// Sukurkite naują komponentą, pvz., Header, kuris priimtų kursų kiekį kaip prop ir atvaizduotų informaciją, pvz., „3 Courses Available!“.
// Eksperimentuokite su Course stiliumi, kad kortelės būtų vizualiai patrauklesnės.