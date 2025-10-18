"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Button,
  FormCheck,
  FormControl,
  FormLabel,
  FormSelect,
} from "react-bootstrap";
import * as db from "../../../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;

  // Find the specific assignment
  const assignment = assignments.find((a: any) => a._id === aid);

  // If assignment not found, show error
  if (!assignment) {
    return (
      <div className="container-fluid px-4">
        <h3>Assignment not found</h3>
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="danger">Back to Assignments</Button>
        </Link>
      </div>
    );
  }

  // Format date for datetime-local input
  const formatDateForInput = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <div id="wd-assignments-editor" className="container-fluid px-4">
      <div className="mb-3">
        <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
        <FormControl id="wd-name" defaultValue={assignment.title} />
      </div>

      <div className="mb-3">
        <FormControl
          as="textarea"
          id="wd-description"
          rows={8}
          defaultValue={assignment.description}
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <FormLabel htmlFor="wd-points" className="text-end d-block pt-2">
            Points
          </FormLabel>
        </div>
        <div className="col-md-9">
          <FormControl id="wd-points" defaultValue={assignment.points} />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <FormLabel htmlFor="wd-group" className="text-end d-block pt-2">
            Assignment Group
          </FormLabel>
        </div>
        <div className="col-md-9">
          <FormSelect
            id="wd-group"
            defaultValue={assignment.group.toLowerCase()}
          >
            <option value="assignments">ASSIGNMENTS</option>
            <option value="quizzes">QUIZZES</option>
            <option value="exams">EXAMS</option>
            <option value="project">PROJECT</option>
          </FormSelect>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <FormLabel
            htmlFor="wd-display-grade-as"
            className="text-end d-block pt-2"
          >
            Display Grade as
          </FormLabel>
        </div>
        <div className="col-md-9">
          <FormSelect id="wd-display-grade-as" defaultValue="percentage">
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
            <option value="letter">Letter Grade</option>
          </FormSelect>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <FormLabel className="text-end d-block pt-2">
            Submission Type
          </FormLabel>
        </div>
        <div className="col-md-9">
          <div className="border p-3 rounded">
            <FormSelect
              id="wd-submission-type"
              defaultValue="online"
              className="mb-3"
            >
              <option value="online">Online</option>
              <option value="on-paper">On Paper</option>
              <option value="no-submission">No Submission</option>
            </FormSelect>

            <div className="mb-2">
              <strong>Online Entry Options</strong>
            </div>
            <FormCheck
              id="wd-text-entry"
              label="Text Entry"
              type="checkbox"
              className="mb-2"
            />
            <FormCheck
              id="wd-website-url"
              label="Website URL"
              type="checkbox"
              defaultChecked
              className="mb-2"
            />
            <FormCheck
              id="wd-media-recordings"
              label="Media Recordings"
              type="checkbox"
              className="mb-2"
            />
            <FormCheck
              id="wd-student-annotation"
              label="Student Annotation"
              type="checkbox"
              className="mb-2"
            />
            <FormCheck
              id="wd-file-upload"
              label="File Uploads"
              type="checkbox"
            />
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <FormLabel className="text-end d-block pt-2">Assign</FormLabel>
        </div>
        <div className="col-md-9">
          <div className="border p-3 rounded">
            <div className="mb-3">
              <FormLabel htmlFor="wd-assign-to">
                <strong>Assign to</strong>
              </FormLabel>
              <FormControl
                id="wd-assign-to"
                defaultValue="Everyone"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px",
                }}
                as="div"
              >
                <span
                  className="badge bg-light text-dark border d-inline-flex align-items-center"
                  style={{ fontSize: "14px", padding: "6px 10px" }}
                >
                  Everyone
                  <button
                    type="button"
                    className="btn-close ms-2"
                    style={{ fontSize: "10px" }}
                    aria-label="Close"
                  ></button>
                </span>
              </FormControl>
            </div>

            <div className="mb-3">
              <FormLabel htmlFor="wd-due-date">
                <strong>Due</strong>
              </FormLabel>
              <FormControl
                type="datetime-local"
                id="wd-due-date"
                defaultValue={formatDateForInput(assignment.dueDate)}
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <FormLabel htmlFor="wd-available-from">
                  <strong>Available from</strong>
                </FormLabel>
                <FormControl
                  type="datetime-local"
                  id="wd-available-from"
                  defaultValue={formatDateForInput(assignment.availableFrom)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <FormLabel htmlFor="wd-available-until">
                  <strong>Until</strong>
                </FormLabel>
                <FormControl
                  type="datetime-local"
                  id="wd-available-until"
                  defaultValue={formatDateForInput(assignment.availableUntil)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end mb-3">
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button
            style={{
              backgroundColor: "#F2F4F4",
              color: "#000",
              border: "1px solid #ced4da",
            }}
            className="me-2"
          >
            Cancel
          </Button>
        </Link>
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="danger">Save</Button>
        </Link>
      </div>
    </div>
  );
}
