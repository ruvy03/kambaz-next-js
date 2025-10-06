"use client";
import Link from "next/link";
import { Badge, Button, FormControl, ListGroup } from "react-bootstrap";
import { BsGripVertical, BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import { FaFileAlt, FaPlus, FaSearch } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group w-50">
          <span className="input-group-text bg-transparent border-end-0">
            <FaSearch />
          </span>
          <FormControl
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="border-start-0"
          />
        </div>
        <div>
          <Button
            id="wd-add-assignment-group"
            style={{
              backgroundColor: "#F2F4F4",
              color: "#000",
              border: "1px solid #ced4da",
            }}
          >
            <FaPlus /> Group
          </Button>
          <Button variant="danger" id="wd-add-assignment" className="ms-2">
            <FaPlus /> Assignment
          </Button>
        </div>
      </div>

      {/* Main List Group containing all sections */}
      <ListGroup className="rounded-0">
        {/* ASSIGNMENTS Group */}
        <ListGroup.Item
          className="p-0 fs-5 border-secondary"
          style={{ borderTop: "1px solid #6c757d" }}
        >
          <div
            className="wd-title p-3 ps-2 d-flex align-items-center"
            style={{ backgroundColor: "#F2F4F4" }}
          >
            <BsGripVertical className="me-2" />
            <div className="flex-grow-1 fw-bold">ASSIGNMENTS</div>
            <Badge
              bg=""
              className="me-2"
              style={{
                border: "1px solid #6c757d",
                backgroundColor: "#F2F4F4",
                color: "#000",
              }}
            >
              40% of Total
            </Badge>
            <span className="float-end">
              <BsPlusLg className="ms-3" />
              <BsThreeDotsVertical className="ms-3" />
            </span>
          </div>
          <ListGroup id="wd-assignment-list" className="rounded-0">
            <ListGroup.Item
              className="wd-assignment-list-item d-flex align-items-center p-3 ps-4"
              style={{ borderLeft: "4px solid green" }}
            >
              <BsGripVertical className="me-3" />
              <FaFileAlt className="me-3 text-success" />
              <div className="flex-grow-1">
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  A1
                </Link>
                <div className="text-secondary" style={{ fontSize: "0.9em" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 6 at 12:00am |<br />
                  <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <span className="float-end">
                <GreenCheckmark />
                <BsThreeDotsVertical className="ms-3" />
              </span>
            </ListGroup.Item>
            <ListGroup.Item
              className="wd-assignment-list-item d-flex align-items-center p-3 ps-4"
              style={{ borderLeft: "4px solid green" }}
            >
              <BsGripVertical className="me-3" />
              <FaFileAlt className="me-3 text-success" />
              <div className="flex-grow-1">
                <Link
                  href="/Courses/1234/Assignments/124"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  A2
                </Link>
                <div className="text-secondary" style={{ fontSize: "0.9em" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 13 at 12:00am |<br />
                  <strong>Due</strong> May 20 at 11:59pm | 100 pts
                </div>
              </div>
              <span className="float-end">
                <GreenCheckmark />
                <BsThreeDotsVertical className="ms-3" />
              </span>
            </ListGroup.Item>
            <ListGroup.Item
              className="wd-assignment-list-item d-flex align-items-center p-3 ps-4"
              style={{ borderLeft: "4px solid green" }}
            >
              <BsGripVertical className="me-3" />
              <FaFileAlt className="me-3 text-success" />
              <div className="flex-grow-1">
                <Link
                  href="/Courses/1234/Assignments/125"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  A3
                </Link>
                <div className="text-secondary" style={{ fontSize: "0.9em" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 20 at 12:00am |<br />
                  <strong>Due</strong> May 27 at 11:59pm | 100 pts
                </div>
              </div>
              <span className="float-end">
                <GreenCheckmark />
                <BsThreeDotsVertical className="ms-3" />
              </span>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        {/* QUIZZES Group */}
        <ListGroup.Item
          className="p-0 fs-5 border-secondary mt-4"
          style={{ borderTop: "1px solid #6c757d" }}
        >
          <div
            className="wd-title p-3 ps-2 d-flex align-items-center"
            style={{ backgroundColor: "#F2F4F4" }}
          >
            <BsGripVertical className="me-2" />
            <div className="flex-grow-1 fw-bold">QUIZZES</div>
            <Badge
              bg=""
              className="me-2"
              style={{
                border: "1px solid #6c757d",
                backgroundColor: "#F2F4F4",
                color: "#000",
              }}
            >
              10% of Total
            </Badge>
            <span className="float-end">
              <BsPlusLg className="ms-3" />
              <BsThreeDotsVertical className="ms-3" />
            </span>
          </div>
          <ListGroup id="wd-quiz-list" className="rounded-0">
            <ListGroup.Item
              className="wd-assignment-list-item d-flex align-items-center p-3 ps-4"
              style={{ borderLeft: "4px solid green" }}
            >
              <BsGripVertical className="me-3" />
              <FaFileAlt className="me-3 text-success" />
              <div className="flex-grow-1">
                <Link
                  href="/Courses/1234/Quizzes/Q1"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  Q1
                </Link>
                <div className="text-secondary" style={{ fontSize: "0.9em" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 6 at 12:00am |<br />
                  <strong>Due</strong> May 13 at 11:59pm | 50 pts
                </div>
              </div>
              <span className="float-end">
                <GreenCheckmark />
                <BsThreeDotsVertical className="ms-3" />
              </span>
            </ListGroup.Item>
            <ListGroup.Item
              className="wd-assignment-list-item d-flex align-items-center p-3 ps-4"
              style={{ borderLeft: "4px solid green" }}
            >
              <BsGripVertical className="me-3" />
              <FaFileAlt className="me-3 text-success" />
              <div className="flex-grow-1">
                <Link
                  href="/Courses/1234/Quizzes/Q2"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  Q2
                </Link>
                <div className="text-secondary" style={{ fontSize: "0.9em" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 13 at 12:00am |<br />
                  <strong>Due</strong> May 20 at 11:59pm | 50 pts
                </div>
              </div>
              <span className="float-end">
                <GreenCheckmark />
                <BsThreeDotsVertical className="ms-3" />
              </span>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        {/* EXAMS Group */}
        <ListGroup.Item
          className="p-0 fs-5 border-secondary mt-4"
          style={{ borderTop: "1px solid #6c757d" }}
        >
          <div
            className="wd-title p-3 ps-2 d-flex align-items-center"
            style={{ backgroundColor: "#F2F4F4" }}
          >
            <BsGripVertical className="me-2" />
            <div className="flex-grow-1 fw-bold">EXAMS</div>
            <Badge
              bg=""
              className="me-2"
              style={{
                border: "1px solid #6c757d",
                backgroundColor: "#F2F4F4",
                color: "#000",
              }}
            >
              40% of Total
            </Badge>
            <span className="float-end">
              <BsPlusLg className="ms-3" />
              <BsThreeDotsVertical className="ms-3" />
            </span>
          </div>
          <ListGroup id="wd-exam-list" className="rounded-0">
            <ListGroup.Item
              className="wd-assignment-list-item d-flex align-items-center p-3 ps-4"
              style={{ borderLeft: "4px solid green" }}
            >
              <BsGripVertical className="me-3" />
              <FaFileAlt className="me-3 text-success" />
              <div className="flex-grow-1">
                <Link
                  href="/Courses/1234/Exams/E1"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  Midterm Exam
                </Link>
                <div className="text-secondary" style={{ fontSize: "0.9em" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 20 at 12:00am |<br />
                  <strong>Due</strong> May 27 at 11:59pm | 200 pts
                </div>
              </div>
              <span className="float-end">
                <GreenCheckmark />
                <BsThreeDotsVertical className="ms-3" />
              </span>
            </ListGroup.Item>
            <ListGroup.Item
              className="wd-assignment-list-item d-flex align-items-center p-3 ps-4"
              style={{ borderLeft: "4px solid green" }}
            >
              <BsGripVertical className="me-3" />
              <FaFileAlt className="me-3 text-success" />
              <div className="flex-grow-1">
                <Link
                  href="/Courses/1234/Exams/E2"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  Final Exam
                </Link>
                <div className="text-secondary" style={{ fontSize: "0.9em" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> June 10 at 12:00am |
                  <br />
                  <strong>Due</strong> June 17 at 11:59pm | 200 pts
                </div>
              </div>
              <span className="float-end">
                <GreenCheckmark />
                <BsThreeDotsVertical className="ms-3" />
              </span>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        {/* PROJECT Group */}
        <ListGroup.Item
          className="p-0 fs-5 border-secondary mt-4"
          style={{ borderTop: "1px solid #6c757d" }}
        >
          <div
            className="wd-title p-3 ps-2 d-flex align-items-center"
            style={{ backgroundColor: "#F2F4F4" }}
          >
            <BsGripVertical className="me-2" />
            <div className="flex-grow-1 fw-bold">PROJECT</div>
            <Badge
              bg=""
              className="me-2"
              style={{
                border: "1px solid #6c757d",
                backgroundColor: "#F2F4F4",
                color: "#000",
              }}
            >
              10% of Total
            </Badge>
            <span className="float-end">
              <BsPlusLg className="ms-3" />
              <BsThreeDotsVertical className="ms-3" />
            </span>
          </div>
          <ListGroup id="wd-project-list" className="rounded-0">
            <ListGroup.Item
              className="wd-assignment-list-item d-flex align-items-center p-3 ps-4"
              style={{ borderLeft: "4px solid green" }}
            >
              <BsGripVertical className="me-3" />
              <FaFileAlt className="me-3 text-success" />
              <div className="flex-grow-1">
                <Link
                  href="/Courses/1234/Projects/P1"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  Final Project
                </Link>
                <div className="text-secondary" style={{ fontSize: "0.9em" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 27 at 12:00am |<br />
                  <strong>Due</strong> June 17 at 11:59pm | 300 pts
                </div>
              </div>
              <span className="float-end">
                <GreenCheckmark />
                <BsThreeDotsVertical className="ms-3" />
              </span>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
