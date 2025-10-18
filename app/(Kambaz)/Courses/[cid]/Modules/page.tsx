"use client";
import { useParams } from "next/navigation";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import * as db from "../../../Database";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroup.Item
              key={module._id}
              className="wd-module p-0 mb-5 fs-5 border-secondary"
            >
              <div
                className="wd-title p-3 ps-2 d-flex align-items-center"
                style={{ backgroundColor: "#F2F4F4" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                <div className="flex-grow-1">{module.name}</div>
                <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <div key={lesson._id}>
                      <ListGroup.Item
                        className="wd-lesson p-3 ps-2 d-flex align-items-center"
                        style={{ borderLeft: "4px solid green" }}
                      >
                        <BsGripVertical className="me-2 fs-3" />
                        <div className="flex-grow-1">{lesson.name}</div>
                        <LessonControlButtons />
                      </ListGroup.Item>
                      {lesson.content && (
                        <ListGroup className="wd-content rounded-0">
                          {lesson.content.map((item: string, idx: number) => (
                            <ListGroup.Item
                              key={idx}
                              className="p-3 ps-2"
                              style={{ borderLeft: "4px solid green" }}
                            >
                              <BsGripVertical className="me-2 fs-3" />
                              {item}
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      )}
                    </div>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
