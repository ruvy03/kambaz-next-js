"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Card, Col, Offcanvas, Row } from "react-bootstrap";
import { FaAlignJustify, FaPencilAlt } from "react-icons/fa";
import * as dbImported from "../Database";
import MobileKambazNavigation from "../MobileKambazNavigation";
type Course = {
  _id: string;
  name: string;
  number: string;
  image: string;
  fit?: "contain" | "cover";
  description?: string;
  term?: string;
};

const db: { courses: Course[] } = dbImported as { courses: Course[] };

export default function Dashboard() {
  const [showKambazNav, setShowKambazNav] = useState(false);

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
            <small>KAMBAZ</small>
          </div>
          <div style={{ width: "40px" }}></div>
        </div>
      </div>

      <div id="wd-dashboard" className="p-4">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr />
        <h2 id="wd-dashboard-published">
          Published Courses ({db.courses.length})
        </h2>
        <hr />

        <Row
          xs={1}
          md={2}
          lg={3}
          xl={4}
          className="g-4"
          id="wd-dashboard-courses"
        >
          {db.courses.map((c) => (
            <Col key={c._id}>
              <Card className="h-100">
                <Link
                  href={`/Courses/${c._id}`}
                  className="text-decoration-none"
                >
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      as={Image}
                      variant="top"
                      src={c.image}
                      width={400}
                      height={150}
                      style={{ objectFit: c.fit ? c.fit : "cover" }}
                      alt={`${c.name} Course`}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title
                      className="text-primary text-truncate"
                      style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                    >
                      {c.number} {c.name}
                    </Card.Title>
                    <Card.Text
                      className="text-secondary fw-bold text-truncate"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {c.description}
                    </Card.Text>
                    <Card.Text
                      className="text-secondary text-truncate"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {c.term}
                    </Card.Text>
                    <FaPencilAlt className="fs-5 text-secondary" />
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Mobile Kambaz Navigation Offcanvas */}
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
    </div>
  );
}
