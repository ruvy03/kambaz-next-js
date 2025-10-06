import { Button, Dropdown, DropdownItem } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { TbCancel } from "react-icons/tb";
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
          <DropdownItem id="wd-publish-all-modules-and-items">
            <GreenCheckmark />
            Publish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-publish-modules-only">
            <GreenCheckmark />
            Publish modules only
          </DropdownItem>
          <DropdownItem id="wd-unpublish-all-modules-and-items">
            <TbCancel className="me-2" />
            Unpublish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-unpublish-modules-only">
            <TbCancel className="me-2" />
            Unpublish modules only
          </DropdownItem>
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
