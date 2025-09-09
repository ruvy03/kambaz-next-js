import Link from "next/link";

export default function Lab1() {
  return (
    <div id="wd-labs">
      <h2>Labs</h2>
      <ul>
        <li>
          <Link href="/labs/lab1" id="wd-lab1-link">
            Lab 1
          </Link>
        </li>
        <li>
          <Link href="/labs/lab2" id="wd-lab2-link">
            Lab 2
          </Link>
        </li>
        <li>
          <Link href="/labs/lab3" id="wd-lab3-link">
            Lab 3
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-lab3-link">
            Kambaz
          </Link>
        </li>
      </ul>
    </div>
  );
}
