import { Button, Dropdown } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button
        style={{
          backgroundColor: "#E4E8E8",
          borderColor: "#E4E8E8",
          color: "black",
        }}
        className="me-1 float-end"
      >
        Collapse All
      </Button>
      <Button
        style={{
          backgroundColor: "#E4E8E8",
          borderColor: "#E4E8E8",
          color: "black",
        }}
        className="me-1 float-end"
      >
        View Progress
      </Button>
      <Dropdown className="d-inline me-1 float-end">
        <Dropdown.Toggle
          style={{
            backgroundColor: "#E4E8E8",
            borderColor: "#E4E8E8",
            color: "black",
          }}
          id="wd-publish-all-btn"
        >
          <GreenCheckmark />
          Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            Unpublish all modules and items
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button
        variant="danger"
        className="me-1 float-end"
        id="wd-add-module-btn"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>
    </div>
  );
}
