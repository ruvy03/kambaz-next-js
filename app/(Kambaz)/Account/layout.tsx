"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { Button, Collapse, Offcanvas } from "react-bootstrap";
import { FaAlignJustify, FaChevronDown } from "react-icons/fa6";
import MobileKambazNavigation from "../MobileKambazNavigation";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [showKambazNav, setShowKambazNav] = useState(false);
  const [isAccountNavOpen, setIsAccountNavOpen] = useState(false);

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
            <small>Account</small>
          </div>
          <Button
            variant="dark"
            onClick={() => setIsAccountNavOpen(!isAccountNavOpen)}
          >
            <FaChevronDown />
          </Button>
        </div>
      </div>

      <Collapse in={isAccountNavOpen} className="d-md-none">
        <div className="mb-3">
          <AccountNavigation
            onLinkClick={() => setIsAccountNavOpen(false)}
            isMobile={true}
          />
        </div>
      </Collapse>

      <div className="p-4">
        <div className="d-flex">
          <div className="d-none d-md-block">
            <AccountNavigation />
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
