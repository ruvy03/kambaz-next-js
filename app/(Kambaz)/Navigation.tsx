import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";

export default function KambazNavigation() {
  return (
    <ListGroup
      id="wd-kambaz-navigation"
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 85 }}
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        style={{ padding: "19px 0" }}
        as={Link}
        href="https://northeastern.edu"
      >
        <img src="/images/neu.png" width="60px" alt="Northeastern University" />
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Account"
        className="text-center border-0"
        style={{ backgroundColor: "black", color: "white", padding: "10px 0" }}
      >
        <FaRegCircleUser className="fs-2" />
        <br />
        <small style={{ fontSize: "0.7em", color: "white" }}>Account</small>
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Dashboard"
        className="text-center border-0"
        style={{ backgroundColor: "white", color: "red", padding: "10px 0" }}
      >
        <AiOutlineDashboard className="fs-2" style={{ color: "red" }} />
        <br />
        <small style={{ fontSize: "0.7em" }}>Dashboard</small>
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Courses"
        className="text-center border-0"
        style={{ backgroundColor: "black", color: "white", padding: "10px 0" }}
      >
        <LiaBookSolid className="fs-2" style={{ color: "red" }} />
        <br />
        <small style={{ fontSize: "0.7em" }}>Courses</small>
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Calendar"
        className="text-center border-0"
        style={{ backgroundColor: "black", color: "white", padding: "10px 0" }}
      >
        <IoCalendarOutline className="fs-2" style={{ color: "red" }} />
        <br />
        <small style={{ fontSize: "0.7em" }}>Calendar</small>
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Inbox"
        className="text-center border-0"
        style={{ backgroundColor: "black", color: "white", padding: "10px 0" }}
      >
        <FaInbox className="fs-2" style={{ color: "red" }} />
        <br />
        <small style={{ fontSize: "0.7em" }}>Inbox</small>
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Labs"
        className="text-center border-0"
        style={{ backgroundColor: "black", color: "white", padding: "10px 0" }}
      >
        <LiaCogSolid className="fs-2" style={{ color: "red" }} />
        <br />
        <small style={{ fontSize: "0.7em" }}>Labs</small>
      </ListGroupItem>
    </ListGroup>
  );
}
