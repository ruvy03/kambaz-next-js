"use client";
import Link from "next/link";

export default function CourseNavigation({
  onLinkClick,
  isMobile,
}: {
  onLinkClick?: () => void;
  isMobile?: boolean;
}) {
  const linkStyle = {
    textDecoration: "none",
    color: "red",
    // FIXED: Font size is now conditional
    fontSize: isMobile ? "1em" : "1.1em",
    display: "block",
    padding: "5px 10px",
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: "black",
    fontWeight: "bold" as const,
  };

  return (
    <div
      id="wd-courses-navigation"
      style={{ width: isMobile ? "120px" : "150px" }}
    >
      <Link href="/Courses/1234/Home" style={linkStyle} onClick={onLinkClick}>
        Home
      </Link>
      <Link
        href="/Courses/1234/Modules"
        style={activeLinkStyle}
        onClick={onLinkClick}
      >
        <span style={{ borderLeft: "2px solid black", paddingLeft: "5px" }}>
          Modules
        </span>
      </Link>
      <Link href="#" style={linkStyle} onClick={onLinkClick}>
        Piazza
      </Link>
      <Link href="#" style={linkStyle} onClick={onLinkClick}>
        Zoom Meetings
      </Link>
      <Link
        href="/Courses/1234/Assignments"
        style={linkStyle}
        onClick={onLinkClick}
      >
        Assignments
      </Link>
      <Link
        href="/Courses/1234/Quizzes"
        style={linkStyle}
        onClick={onLinkClick}
      >
        Quizzes
      </Link>
      <Link href="/Courses/1234/Grades" style={linkStyle} onClick={onLinkClick}>
        Grades
      </Link>
      <Link
        href="/Courses/1234/People/Table"
        style={linkStyle}
        onClick={onLinkClick}
      >
        People
      </Link>
      <Link href="#" style={linkStyle} onClick={onLinkClick}>
        Settings
      </Link>
    </div>
  );
}
