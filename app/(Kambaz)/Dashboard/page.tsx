import Image from "next/image";
import Link from "next/link";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/react.png"
              width={200}
              height={150}
              alt="React JS Course"
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
          <Link href="/Courses/4321" className="wd-dashboard-course-link">
            <Image
              src="/images/ai.jpg"
              width={200}
              height={150}
              alt="Artificial Intelligence Course"
            />
            <div>
              <h5> CS4321 Artificial Intelligence </h5>
              <p className="wd-dashboard-course-title">
                Foundations of AI and intelligent systems
              </p>
              <button> Go </button>
            </div>
          </Link>
          <Link href="/Courses/8765" className="wd-dashboard-course-link">
            <Image
              src="/images/ml.png"
              width={200}
              height={150}
              alt="Machine Learning Course"
            />
            <div>
              <h5> CS8765 Machine Learning </h5>
              <p className="wd-dashboard-course-title">
                Principles and applications of ML
              </p>
              <button> Go </button>
            </div>
          </Link>
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image
              src="/images/web.jpg"
              width={200}
              height={150}
              alt="Web Development Course"
            />
            <div>
              <h5> CS5678 Web Development </h5>
              <p className="wd-dashboard-course-title">
                Modern web technologies
              </p>
              <button> Go </button>
            </div>
          </Link>
          <Link href="/Courses/9101" className="wd-dashboard-course-link">
            <Image
              src="/images/pdp.webp"
              width={200}
              height={150}
              alt="PDP Course"
            />
            <div>
              <h5> CS5010 PDP </h5>
              <p className="wd-dashboard-course-title">
                Programming Design Paradigms
              </p>
              <button> Go </button>
            </div>
          </Link>
          <Link href="/Courses/1121" className="wd-dashboard-course-link">
            <Image
              src="/images/algo.png"
              width={200}
              height={150}
              alt="Algorithms Course"
            />
            <div>
              <h5> CS1121 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Algorithm design and analysis
              </p>
              <button> Go </button>
            </div>
          </Link>
          <Link href="/Courses/3141" className="wd-dashboard-course-link">
            <Image
              src="/images/dbms.jpg"
              width={200}
              height={150}
              alt="DBMS Course"
            />
            <div>
              <h5> CS3141 DBMS </h5>
              <p className="wd-dashboard-course-title">
                Database Management Systems
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
