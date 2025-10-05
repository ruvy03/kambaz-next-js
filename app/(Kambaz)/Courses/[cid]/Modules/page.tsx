"use client";
import { ListGroup } from "react-bootstrap";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <ListGroup id="wd-modules" className="rounded-0">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-secondary">
          <div
            className="wd-title p-3 ps-2 d-flex align-items-center"
            style={{ backgroundColor: "#F2F4F4" }}
          >
            <div className="flex-grow-1">Week 1</div>
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-4 d-flex align-items-center">
              <div className="flex-grow-1">LEARNING OBJECTIVES</div>
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup className="wd-content rounded-0">
              <ListGroup.Item className="p-3 ps-5">
                Introduction to the course
              </ListGroup.Item>
              <ListGroup.Item className="p-3 ps-5">
                Learn what is Web Development
              </ListGroup.Item>
              <ListGroup.Item className="p-3 ps-5">
                Create a development environment
              </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item className="wd-lesson p-3 ps-4 d-flex align-items-center">
              <div className="flex-grow-1">READING</div>
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup className="wd-content rounded-0">
              <ListGroup.Item className="p-3 ps-5">
                Full Stack Developer - Chapter 1 - Introduction
              </ListGroup.Item>
              <ListGroup.Item className="p-3 ps-5">
                Full Stack Developer - Chapter 2 - Creating User
              </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item className="wd-lesson p-3 ps-4 d-flex align-items-center">
              <div className="flex-grow-1">SLIDES</div>
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup className="wd-content rounded-0">
              <ListGroup.Item className="p-3 ps-5">
                Introduction to Web Development
              </ListGroup.Item>
              <ListGroup.Item className="p-3 ps-5">
                Creating an HTTP server with Node.js
              </ListGroup.Item>
              <ListGroup.Item className="p-3 ps-5">
                Creating a React Application
              </ListGroup.Item>
            </ListGroup>
          </ListGroup>
        </ListGroup.Item>

        <ListGroup.Item
          className="wd-module p-0 mb-5 fs-5 border-secondary"
          style={{ borderTop: "1px solid #6c757d" }}
        >
          <div
            className="wd-title p-3 ps-2  d-flex align-items-center"
            style={{ backgroundColor: "#F2F4F4" }}
          >
            <div className="flex-grow-1">Week 2</div>
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-4 d-flex align-items-center">
              <div className="flex-grow-1">LEARNING OBJECTIVES</div>
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup className="wd-content rounded-0">
              <ListGroup.Item className="p-3 ps-5">
                Learn how to create user interfaces with HTML
              </ListGroup.Item>
              <ListGroup.Item className="p-3 ps-5">
                Keep working on Assignment 1
              </ListGroup.Item>
              <ListGroup.Item className="p-3 ps-5">
                Deploy the assignment to Netlify
              </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item className="wd-lesson p-3 ps-4 d-flex align-items-center">
              <div className="flex-grow-1">READING</div>
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup className="wd-content rounded-0">
              <ListGroup.Item className="p-3 ps-5">
                Full Stack Developer - Chapter 4 - HTML
              </ListGroup.Item>
              <ListGroup.Item className="p-3 ps-5">
                Full Stack Developer - Chapter 5 - CSS
              </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item className="wd-lesson p-3 ps-4 d-flex align-items-center">
              <div className="flex-grow-1">SLIDES</div>
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup className="wd-content rounded-0">
              <ListGroup.Item className="p-3 ps-5">
                Introduction to HTML and the DOM
              </ListGroup.Item>
              <ListGroup.Item className="p-3 ps-5">
                Formatting Web content with Headings and
              </ListGroup.Item>
              <ListGroup.Item className="p-3 ps-5">
                Formatting content with Lists and Tables
              </ListGroup.Item>
            </ListGroup>
          </ListGroup>
        </ListGroup.Item>

        <ListGroup.Item
          className="wd-module p-0 mb-5 fs-5 border-secondary"
          style={{ borderTop: "1px solid #6c757d" }}
        >
          <div
            className="wd-title p-3 ps-2 d-flex align-items-center"
            style={{ backgroundColor: "#F2F4F4" }}
          >
            <div className="flex-grow-1">Week 3</div>
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-4 d-flex align-items-center">
              <div className="flex-grow-1">LEARNING OBJECTIVES</div>
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup className="wd-content rounded-0">
              <ListGroup.Item className="p-3 ps-5">
                Learn how to style web pages with CSS
              </ListGroup.Item>
              <ListGroup.Item className="p-3 ps-5">
                Learn about responsive design
              </ListGroup.Item>
            </ListGroup>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
