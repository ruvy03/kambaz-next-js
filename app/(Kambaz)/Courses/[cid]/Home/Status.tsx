import { Button } from "react-bootstrap";
import { BiCrosshair, BiImport } from "react-icons/bi";
import { FaBullhorn, FaCheckCircle } from "react-icons/fa";
import { LiaFileImportSolid } from "react-icons/lia";
import {
  MdAnalytics,
  MdDoNotDisturbAlt,
  MdNotifications,
} from "react-icons/md";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <Button
          style={{
            backgroundColor: "#E4E8E8",
            borderColor: "#E4E8E8",
            color: "black",
          }}
          className="w-50 me-1"
        >
          <MdDoNotDisturbAlt className="me-1" />
          Unpublish
        </Button>
        <Button variant="success" className="w-50">
          <FaCheckCircle className="me-1" />
          Published
        </Button>
      </div>
      <br />
      <Button
        style={{
          backgroundColor: "#E4E8E8",
          borderColor: "#E4E8E8",
          color: "black",
        }}
        className="w-100 mt-1 text-start"
      >
        <BiImport className="me-2" />
        Import Existing Content
      </Button>
      <Button
        style={{
          backgroundColor: "#E4E8E8",
          borderColor: "#E4E8E8",
          color: "black",
        }}
        className="w-100 mt-1 text-start"
      >
        <LiaFileImportSolid className="me-2" />
        Import from Commons
      </Button>
      <Button
        style={{
          backgroundColor: "#E4E8E8",
          borderColor: "#E4E8E8",
          color: "black",
        }}
        className="w-100 mt-1 text-start"
      >
        <BiCrosshair className="me-2" />
        Choose Home Page
      </Button>
      <Button
        style={{
          backgroundColor: "#E4E8E8",
          borderColor: "#E4E8E8",
          color: "black",
        }}
        className="w-100 mt-1 text-start"
      >
        <MdAnalytics className="me-2" />
        View Course Stream
      </Button>
      <Button
        style={{
          backgroundColor: "#E4E8E8",
          borderColor: "#E4E8E8",
          color: "black",
        }}
        className="w-100 mt-1 text-start"
      >
        <FaBullhorn className="me-2" />
        New Announcement
      </Button>
      <Button
        style={{
          backgroundColor: "#E4E8E8",
          borderColor: "#E4E8E8",
          color: "black",
        }}
        className="w-100 mt-1 text-start"
      >
        <MdAnalytics className="me-2" />
        New Analytics
      </Button>
      <Button
        style={{
          backgroundColor: "#E4E8E8",
          borderColor: "#E4E8E8",
          color: "black",
        }}
        className="w-100 mt-1 text-start"
      >
        <MdNotifications className="me-2" />
        View Course Notifications
      </Button>
    </div>
  );
}
