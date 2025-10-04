import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";

export default async function CoursesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const courseName = "CS1234 React JS";

  return (
    <div id="wd-courses">
      <h3 className="text-danger d-flex align-items-center">
        <FaAlignJustify className="me-3" />
        {courseName}
      </h3>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-grow-1" style={{ marginLeft: "20px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
