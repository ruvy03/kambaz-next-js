import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz">
      <div className="d-flex">
        {/* This is the sidebar for DESKTOP view */}
        <div className="d-none d-md-block">
          <KambazNavigation />
        </div>

        {/* This is the main content area */}
        <div className="wd-main-content-offset flex-fill">{children}</div>
      </div>
    </div>
  );
}
