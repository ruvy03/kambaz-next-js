"use client";
import Link from "next/link";
import { Badge } from "react-bootstrap";
import {
  FaBook,
  FaCalendarAlt,
  FaChevronRight,
  FaCog,
  FaInbox,
  FaTachometerAlt,
  FaUserCircle,
} from "react-icons/fa";

export default function MobileKambazNavigation() {
  const linkStyle = {
    display: "flex",
    alignItems: "center",
    padding: "15px 12px",
    color: "red",
    textDecoration: "none",
    borderBottom: "1px solid #eee",
  };

  const iconStyle = {
    marginRight: "15px",
    width: "24px",
  };

  const chevronStyle = {
    marginLeft: "auto",
    color: "#666",
  };

  return (
    <div id="wd-mobile-kambaz-navigation">
      <Link href="/Account" style={linkStyle}>
        <FaUserCircle className="fs-4" style={iconStyle} />
        <span>Account</span>
        <FaChevronRight style={chevronStyle} />
      </Link>
      <Link href="/Dashboard" style={linkStyle}>
        <FaTachometerAlt className="fs-4" style={iconStyle} />
        <span>Dashboard</span>
      </Link>
      <Link href="/Courses" style={linkStyle}>
        <FaBook className="fs-4" style={iconStyle} />
        <span>Courses</span>
        <FaChevronRight style={chevronStyle} />
      </Link>
      <Link href="/Calendar" style={linkStyle}>
        <FaCalendarAlt className="fs-4" style={iconStyle} />
        <span>Calendar</span>
      </Link>
      <Link href="/Inbox" style={linkStyle}>
        <FaInbox className="fs-4" style={iconStyle} />
        <span>Inbox</span>
        <Badge pill bg="danger" className="ms-2">
          22
        </Badge>
      </Link>
      <Link href="/Labs" style={linkStyle}>
        <FaCog className="fs-4" style={iconStyle} />
        <span>Labs</span>
      </Link>
    </div>
  );
}
