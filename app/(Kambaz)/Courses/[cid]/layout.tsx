"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { Button, Collapse, Offcanvas } from "react-bootstrap";
import { FaAlignJustify, FaChevronDown } from "react-icons/fa6";
import MobileKambazNavigation from "../../../(Kambaz)/MobileKambazNavigation";
import * as db from "../../Database";
import Breadcrumb from "./Breadcrumb/page";
import CourseNavigation from "./Navigation";

export default function CoursesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const { cid } = useParams();
  const [course, setCourse] = useState<any>(null);
  const [showKambazNav, setShowKambazNav] = useState(false);
  const [isCourseNavOpen, setIsCourseNavOpen] = useState(false);

  useEffect(() => {
    const foundCourse = db.courses.find((course: any) => course._id === cid);
    setCourse(foundCourse);
  }, [cid]);

  const handleShowKambazNav = () => setShowKambazNav(true);
  const handleCloseKambazNav = () => setShowKambazNav(false);

  return (
    <div>
      <div className="d-block d-md-none p-3 bg-dark text-white text-center">
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="dark" onClick={handleShowKambazNav}>
            <FaAlignJustify />
          </Button>
          <div className="text-center">
            <small>{course?.name || "Loading..."}</small>
          </div>
          <Button
            variant="dark"
            onClick={() => setIsCourseNavOpen(!isCourseNavOpen)}
          >
            <FaChevronDown />
          </Button>
        </div>
      </div>

      <Collapse in={isCourseNavOpen} className="d-md-none">
        <div className="mb-3">
          <CourseNavigation
            onLinkClick={() => setIsCourseNavOpen(false)}
            isMobile={true}
          />
        </div>
      </Collapse>

      <div className="p-4">
        <div className="d-none d-md-block">
          <h2 className="text-danger d-flex align-items-center">
            <FaAlignJustify className="me-3" />
            <Breadcrumb course={course} />
          </h2>
          <hr />
        </div>

        <div className="d-flex">
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>
          <div
            className="flex-grow-1 mt-4 mt-md-0"
            style={{ marginLeft: "20px" }}
          >
            {children}
          </div>
        </div>
      </div>

      <Offcanvas
        show={showKambazNav}
        onHide={handleCloseKambazNav}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link
              href="/Dashboard"
              className="text-danger text-decoration-none fw-bold"
            >
              KAMBAZ
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <MobileKambazNavigation />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
