import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
          <br />
          <span>
            Multiple Modules | <strong>Not available until</strong> May 6 at
            12:00am |
          </span>
          <br />
          <span>
            <strong>Due</strong> May 13 at 11:59pm | 100 pts
          </span>
        </li>

        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/124"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
          <br />
          <span>
            Multiple Modules | <strong>Not available until</strong> May 13 at
            12:00am |
          </span>
          <br />
          <span>
            <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </span>
        </li>

        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/125"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </Link>
          <br />
          <span>
            Multiple Modules | <strong>Not available until</strong> May 20 at
            12:00am |
          </span>
          <br />
          <span>
            <strong>Due</strong> May 27 at 11:59pm | 100 pts
          </span>
        </li>
      </ul>

      <h3 id="wd-quizzes-title">
        QUIZZES 10% of Total <button>+</button>
      </h3>

      <ul id="wd-quiz-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Quizzes/Q1" className="wd-assignment-link">
            Q1 - HTML
          </Link>
          <br />
          <span>
            Multiple Modules | <strong>Not available until</strong> May 6 at
            12:00am |
          </span>
          <br />
          <span>
            <strong>Due</strong> May 13 at 11:59pm | 50 pts
          </span>
        </li>

        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Quizzes/Q2" className="wd-assignment-link">
            Q2 - CSS
          </Link>
          <br />
          <span>
            Multiple Modules | <strong>Not available until</strong> May 13 at
            12:00am |
          </span>
          <br />
          <span>
            <strong>Due</strong> May 20 at 11:59pm | 50 pts
          </span>
        </li>
      </ul>

      <h3 id="wd-exams-title">
        EXAMS 40% of Total <button>+</button>
      </h3>

      <ul id="wd-exam-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Exams/E1" className="wd-assignment-link">
            Midterm Exam
          </Link>
          <br />
          <span>
            Multiple Modules | <strong>Not available until</strong> May 20 at
            12:00am |
          </span>
          <br />
          <span>
            <strong>Due</strong> May 27 at 11:59pm | 200 pts
          </span>
        </li>

        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Exams/E2" className="wd-assignment-link">
            Final Exam
          </Link>
          <br />
          <span>
            Multiple Modules | <strong>Not available until</strong> June 10 at
            12:00am |
          </span>
          <br />
          <span>
            <strong>Due</strong> June 17 at 11:59pm | 200 pts
          </span>
        </li>
      </ul>

      <h3 id="wd-project-title">
        PROJECT 10% of Total <button>+</button>
      </h3>

      <ul id="wd-project-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Projects/P1" className="wd-assignment-link">
            Final Project
          </Link>
          <br />
          <span>
            Multiple Modules | <strong>Not available until</strong> May 27 at
            12:00am |
          </span>
          <br />
          <span>
            <strong>Due</strong> June 17 at 11:59pm | 300 pts
          </span>
        </li>
      </ul>
    </div>
  );
}
