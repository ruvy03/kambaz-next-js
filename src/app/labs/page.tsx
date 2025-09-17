import Link from "next/link";
import Lab1 from "./Lab1/page";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Dhruv Sinha - Section 04, CRN: 18616</h2>

      <h3>Navigation</h3>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz Application
          </Link>
        </li>
      </ul>
      <hr />
      <h3>Links</h3>
      <ul>
        <li>
          <Link
            href="https://github.com/ruvy03/kambaz-next-js"
            id="wd-github-link"
          >
            GitHub Repository
          </Link>
        </li>
        <li>
          <Link href="https://kambaz.dhruvsinha.com" id="wd-kambaz-link">
            Kambaz Application
          </Link>
        </li>
      </ul>
      <hr />
      <Lab1 />
    </div>
  );
}
