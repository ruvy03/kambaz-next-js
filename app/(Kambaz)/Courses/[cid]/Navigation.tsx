"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ListGroup } from "react-bootstrap";

interface NavigationProps {
  onLinkClick?: () => void;
  isMobile?: boolean;
}

export default function CourseNavigation({
  onLinkClick,
  isMobile = false,
}: NavigationProps) {
  const { cid } = useParams();
  const pathname = usePathname();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  const isActive = (link: string) => {
    return pathname.includes(`/Courses/${cid}/${link}`);
  };

  return (
    <ListGroup
      className={`${isMobile ? "w-100" : ""}`}
      style={!isMobile ? { minWidth: "220px" } : {}}
    >
      {links.map((link) => (
        <Link
          key={link}
          href={`/Courses/${cid}/${link}`}
          className="text-decoration-none"
          onClick={onLinkClick}
        >
          <ListGroup.Item
            action
            active={isActive(link)}
            className={`border border-0 ${
              isActive(link) ? "text-black" : "text-danger"
            }`}
            style={{
              backgroundColor: isActive(link) ? "white" : "transparent",
              borderLeft: isActive(link) ? "3px solid black" : "none",
            }}
          >
            {link}
          </ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  );
}
