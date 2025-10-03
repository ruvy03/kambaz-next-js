import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link
        href="/Account/Signin"
        style={{
          textDecoration: "none",
          fontSize: "1.05em",
          paddingLeft: "10px",
          paddingRight: "10px",
          color: "black",
          marginBottom: "2px",
          display: "block",
        }}
      >
        <span style={{ borderLeft: "1.5px solid black", paddingLeft: "5px" }}>
          Signin
        </span>
      </Link>
      <Link
        href="/Account/Signup"
        style={{
          textDecoration: "none",
          fontSize: "1.05em",
          paddingLeft: "10px",
          paddingRight: "10px",
          color: "red",
          marginBottom: "2px",
          display: "block",
        }}
      >
        <span style={{ paddingLeft: "6.5px" }}>Signup</span>
      </Link>
      <Link
        href="/Account/Profile"
        style={{
          textDecoration: "none",
          fontSize: "1.05em",
          paddingLeft: "10px",
          paddingRight: "10px",
          color: "red",
          display: "block",
        }}
      >
        <span style={{ paddingLeft: "6.5px" }}>Profile</span>
      </Link>
    </div>
  );
}
