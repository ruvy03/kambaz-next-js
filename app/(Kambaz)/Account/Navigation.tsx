"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaSignInAlt, FaUserCircle, FaUserPlus } from "react-icons/fa";

export default function AccountNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Signin", path: "/Account/Signin", icon: <FaSignInAlt /> },
    { label: "Signup", path: "/Account/Signup", icon: <FaUserPlus /> },
    { label: "Profile", path: "/Account/Profile", icon: <FaUserCircle /> },
  ];
  return (
    <ListGroup id="wd-account-navigation" style={{ width: 120 }}>
      {links.map((link) => (
        <ListGroupItem
          key={link.path}
          as={Link}
          href={link.path}
          active={pathname.includes(link.path)}
        >
          {link.icon} {link.label}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
