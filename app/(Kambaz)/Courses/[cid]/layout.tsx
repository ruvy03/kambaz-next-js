"use client";

import { ReactNode, useState } from "react";
import { Button, Collapse, Offcanvas } from "react-bootstrap";
import { FaAlignJustify, FaChevronDown } from "react-icons/fa6";

import Link from "next/link";
import MobileKambazNavigation from "../../../(Kambaz)/MobileKambazNavigation";
import CourseNavigation from "./Navigation";

export default function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: { cid: string } }>) {
  const { cid } = params;
  const courseName = "CS5610.18616.202610";

  const [showKambazNav, setShowKambazNav] = useState(false);
  const [isCourseNavOpen, setIsCourseNavOpen] = useState(false);

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
            <small>{courseName}</small>
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

      {/* Main content area for BOTH mobile and desktop */}
      <div className="p-4">
        <div className="d-none d-md-block">
          <h2 className="text-danger d-flex align-items-center">
            <FaAlignJustify className="me-3" />
            {courseName}
          </h2>
          <hr />
        </div>

        <div className="d-flex">
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>
          {/* FIXED: Added mt-4 mt-md-0 to create space ONLY on mobile */}
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
