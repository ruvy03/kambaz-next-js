"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Badge, Button, FormControl, ListGroup } from "react-bootstrap";
import { BsGripVertical, BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import { FaFileAlt, FaPlus, FaSearch } from "react-icons/fa";
import * as db from "../../../Database";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const assignmentsByGroup = courseAssignments.reduce<
    Record<string, (typeof courseAssignments)[number][]>
  >((acc, assignment) => {
    if (!acc[assignment.group]) {
      acc[assignment.group] = [];
    }
    acc[assignment.group].push(assignment);
    return acc;
  }, {});

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

      <ListGroup className="rounded-0">
        {Object.entries(assignmentsByGroup).map(([group, groupAssignments]) => (
          <ListGroup.Item
            key={group}
            className="p-0 fs-5 border-secondary mt-4"
            style={{ borderTop: "1px solid #6c757d" }}
          >
            <div
              className="wd-title p-3 ps-2 d-flex align-items-center"
              style={{ backgroundColor: "#F2F4F4" }}
            >
              <BsGripVertical className="me-2" />
              <div className="flex-grow-1 fw-bold">{group}</div>
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
            <ListGroup className="rounded-0">
              {groupAssignments.map((assignment) => (
                <ListGroup.Item
                  key={assignment._id}
                  className="wd-assignment-list-item d-flex align-items-center p-3 ps-4"
                  style={{ borderLeft: "4px solid green" }}
                >
                  <BsGripVertical className="me-3" />
                  <FaFileAlt className="me-3 text-success" />
                  <div className="flex-grow-1">
                    <Link
                      href={`/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link text-decoration-none text-dark fw-bold"
                    >
                      {assignment.title}
                    </Link>
                    <div
                      className="text-secondary"
                      style={{ fontSize: "0.9em" }}
                    >
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <strong>Not available until</strong>{" "}
                      {formatDate(assignment.availableFrom)} at{" "}
                      {formatTime(assignment.availableFrom)} |<br />
                      <strong>Due</strong> {formatDate(assignment.dueDate)} at{" "}
                      {formatTime(assignment.dueDate)} | {assignment.points} pts
                    </div>
                  </div>
                  <span className="float-end">
                    <GreenCheckmark />
                    <BsThreeDotsVertical className="ms-3" />
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
