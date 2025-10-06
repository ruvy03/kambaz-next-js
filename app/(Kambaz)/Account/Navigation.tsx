"use client";
import Link from "next/link";

export default function AccountNavigation({
  onLinkClick,
  isMobile,
}: {
  onLinkClick?: () => void;
  isMobile?: boolean;
}) {
  const linkStyle = {
    textDecoration: "none",
    fontSize: isMobile ? "1em" : "1.1em",
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
    <div
      id="wd-account-navigation"
      style={{ width: isMobile ? "120px" : "auto" }}
    >
      <Link
        href="/Account/Signin"
        style={activeLinkStyle}
        onClick={onLinkClick}
      >
        <span style={{ borderLeft: "1.5px solid black", paddingLeft: "5px" }}>
          Signin
        </span>
      </Link>
      <Link href="/Account/Signup" style={linkStyle} onClick={onLinkClick}>
        <span style={{ paddingLeft: "6.5px" }}>Signup</span>
      </Link>
      <Link href="/Account/Profile" style={linkStyle} onClick={onLinkClick}>
        <span style={{ paddingLeft: "6.5px" }}>Profile</span>
      </Link>
    </div>
  );
}
