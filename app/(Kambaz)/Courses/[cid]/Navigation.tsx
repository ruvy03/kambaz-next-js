import Link from "next/link";

export default function CourseNavigation() {
  const linkStyle = {
    textDecoration: "none",
    fontSize: "1.05em",
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "red",
    marginBottom: "2px",
    display: "block",
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: "black",
  };

  return (
    <div id="wd-courses-navigation" style={{ width: "150px" }}>
      <Link href="/Courses/1234/Home" style={linkStyle}>
        Home
      </Link>
      <Link href="/Courses/1234/Modules" style={activeLinkStyle}>
        <span style={{ borderLeft: "2px solid black", paddingLeft: "5px" }}>
          Modules
        </span>
      </Link>
      <Link href="https://piazza.com/" style={linkStyle}>
        Piazza
      </Link>
      <Link href="https://www.zoom.com/" style={linkStyle}>
        Zoom Meetings
      </Link>
      <Link href="/Courses/1234/Assignments" style={linkStyle}>
        Assignments
      </Link>
      <Link href="/Courses/1234/Quizzes" style={linkStyle}>
        Quizzes
      </Link>
      <Link href="/Courses/1234/Grades" style={linkStyle}>
        Grades
      </Link>
      <Link href="/Courses/1234/People/Table" style={linkStyle}>
        People
      </Link>
      <Link href="#" style={linkStyle}>
        Settings
      </Link>
    </div>
  );
}
