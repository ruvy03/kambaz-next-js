"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Card, Col, Offcanvas, Row } from "react-bootstrap";
import { FaAlignJustify, FaPencilAlt } from "react-icons/fa";
import MobileKambazNavigation from "../MobileKambazNavigation";

export default function Dashboard() {
  const [showKambazNav, setShowKambazNav] = useState(false);

  const handleShowKambazNav = () => setShowKambazNav(true);
  const handleCloseKambazNav = () => setShowKambazNav(false);

  return (
    <div>
      {/* Mobile header - only visible on small screens */}
      <div className="d-block d-md-none p-3 bg-dark text-white text-center">
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="dark" onClick={handleShowKambazNav}>
            <FaAlignJustify />
          </Button>
          <div className="text-center">
            <small>KAMBAZ</small>
          </div>
          <div style={{ width: "40px" }}></div> {/* Spacer for centering */}
        </div>
      </div>

      <div id="wd-dashboard" className="p-4">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2>
        <hr />

        <Row
          xs={1}
          md={2}
          lg={3}
          xl={4}
          className="g-4"
          id="wd-dashboard-courses"
        >
          <Col>
            <Card className="h-100">
              <Link href="/Courses/1234" className="text-decoration-none">
                <div style={{ position: "relative" }}>
                  <Card.Img
                    as={Image}
                    variant="top"
                    src="/images/react.png"
                    width={400}
                    height={150}
                    style={{ objectFit: "contain" }}
                    alt="React JS Course"
                  />
                </div>
                <Card.Body>
                  <Card.Title
                    className="text-primary text-truncate"
                    style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                  >
                    CS1234 React JS
                  </Card.Title>
                  <Card.Text
                    className="text-secondary fw-bold text-truncate"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Full Stack software developer
                  </Card.Text>
                  <Card.Text
                    className="text-secondary text-truncate"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Fall 2025
                  </Card.Text>
                  <FaPencilAlt className="fs-5 text-secondary" />
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Link href="/Courses/4321" className="text-decoration-none">
                <div style={{ position: "relative" }}>
                  <Card.Img
                    as={Image}
                    variant="top"
                    src="/images/ai.jpg"
                    width={400}
                    height={150}
                    style={{ objectFit: "cover" }}
                    alt="Artificial Intelligence Course"
                  />
                </div>
                <Card.Body>
                  <Card.Title
                    className="text-primary text-truncate"
                    style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                  >
                    CS4321 Artificial Intelligence
                  </Card.Title>
                  <Card.Text
                    className="text-secondary fw-bold text-truncate"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Foundations of AI and intelligent systems
                  </Card.Text>
                  <Card.Text
                    className="text-secondary text-truncate"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Fall 2025
                  </Card.Text>
                  <FaPencilAlt className="fs-5 text-secondary" />
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Link href="/Courses/8765" className="text-decoration-none">
                <div style={{ position: "relative" }}>
                  <Card.Img
                    as={Image}
                    variant="top"
                    src="/images/ml.png"
                    width={400}
                    height={150}
                    style={{ objectFit: "cover" }}
                    alt="Machine Learning Course"
                  />
                </div>
                <Card.Body>
                  <Card.Title
                    className="text-primary text-truncate"
                    style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                  >
                    CS8765 Machine Learning
                  </Card.Title>
                  <Card.Text
                    className="text-secondary fw-bold text-truncate"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Principles and applications of ML
                  </Card.Text>
                  <Card.Text
                    className="text-secondary text-truncate"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Fall 2025
                  </Card.Text>
                  <FaPencilAlt className="fs-5 text-secondary" />
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Link href="/Courses/5678" className="text-decoration-none">
                <div style={{ position: "relative" }}>
                  <Card.Img
                    as={Image}
                    variant="top"
                    src="/images/web.jpg"
                    width={400}
                    height={150}
                    style={{ objectFit: "cover" }}
                    alt="Web Development Course"
                  />
                </div>
                <Card.Body>
                  <Card.Title
                    className="text-primary text-truncate"
                    style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                  >
                    CS5678 Web Development
                  </Card.Title>
                  <Card.Text
                    className="text-secondary fw-bold text-truncate"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Modern web technologies
                  </Card.Text>
                  <Card.Text
                    className="text-secondary text-truncate"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Fall 2025
                  </Card.Text>
                  <FaPencilAlt className="fs-5 text-secondary" />
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Link href="/Courses/9101" className="text-decoration-none">
                <div style={{ position: "relative" }}>
                  <Card.Img
                    as={Image}
                    variant="top"
                    src="/images/pdp.webp"
                    width={400}
                    height={150}
                    style={{ objectFit: "cover" }}
                    alt="PDP Course"
                  />
                </div>
                <Card.Body>
                  <Card.Title
                    className="text-primary text-truncate"
                    style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                  >
                    CS5010 PDP
                  </Card.Title>
                  <Card.Text
                    className="text-secondary fw-bold text-truncate"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Programming Design Paradigms
                  </Card.Text>
                  <Card.Text
                    className="text-secondary text-truncate"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Fall 2025
                  </Card.Text>
                  <FaPencilAlt className="fs-5 text-secondary" />
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Link href="/Courses/1121" className="text-decoration-none">
                <div style={{ position: "relative" }}>
                  <Card.Img
                    as={Image}
                    variant="top"
                    src="/images/algo.png"
                    width={400}
                    height={150}
                    style={{ objectFit: "contain" }}
                    alt="Algorithms Course"
                  />
                </div>
                <Card.Body>
                  <Card.Title
                    className="text-primary text-truncate"
                    style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                  >
                    CS1121 Algorithms
                  </Card.Title>
                  <Card.Text
                    className="text-secondary fw-bold text-truncate"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Algorithm design and analysis
                  </Card.Text>
                  <Card.Text
                    className="text-secondary text-truncate"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Fall 2025
                  </Card.Text>
                  <FaPencilAlt className="fs-5 text-secondary" />
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Link href="/Courses/3141" className="text-decoration-none">
                <div style={{ position: "relative" }}>
                  <Card.Img
                    as={Image}
                    variant="top"
                    src="/images/dbms.jpg"
                    width={400}
                    height={150}
                    style={{ objectFit: "cover" }}
                    alt="DBMS Course"
                  />
                </div>
                <Card.Body>
                  <Card.Title
                    className="text-primary text-truncate"
                    style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                  >
                    CS3141 DBMS
                  </Card.Title>
                  <Card.Text
                    className="text-secondary fw-bold text-truncate"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Database Management Systems
                  </Card.Text>
                  <Card.Text
                    className="text-secondary text-truncate"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Fall 2025
                  </Card.Text>
                  <FaPencilAlt className="fs-5 text-secondary" />
                </Card.Body>
              </Link>
            </Card>
          </Col>
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
