"use client";
import {
  Button,
  FormCheck,
  FormControl,
  FormLabel,
  FormSelect,
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container-fluid px-4">
      <div className="mb-3">
        <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
        <FormControl id="wd-name" defaultValue="A1 - ENV + HTML" />
      </div>

      <div className="mb-3">
        <FormControl
          as="textarea"
          id="wd-description"
          rows={8}
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <FormLabel htmlFor="wd-points" className="text-end d-block pt-2">
            Points
          </FormLabel>
        </div>
        <div className="col-md-9">
          <FormControl id="wd-points" defaultValue={100} />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <FormLabel htmlFor="wd-group" className="text-end d-block pt-2">
            Assignment Group
          </FormLabel>
        </div>
        <div className="col-md-9">
          <FormSelect id="wd-group" defaultValue="assignments">
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
                defaultValue="2024-05-13T23:59"
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
                  defaultValue="2024-05-06T00:00"
                />
              </div>
              <div className="col-md-6 mb-3">
                <FormLabel htmlFor="wd-available-until">
                  <strong>Until</strong>
                </FormLabel>
                <FormControl
                  type="datetime-local"
                  id="wd-available-until"
                  defaultValue="2024-05-20T23:59"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end mb-3">
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
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}
