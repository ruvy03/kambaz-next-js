"use client";
import Link from "next/link";
import { Button, Container, FormControl } from "react-bootstrap";

export default function Signup() {
  return (
    <Container id="wd-signup-screen">
      <h3>Sign up</h3>
      <FormControl
        placeholder="Username"
        className="wd-username mb-2"
        defaultValue="dhruvsinha"
      />
      <FormControl
        placeholder="Password"
        type="password"
        className="wd-password mb-2"
        defaultValue="dhruv123"
      />
      <FormControl
        placeholder="Verify password"
        type="password"
        className="wd-password-verify mb-2"
        defaultValue="dhruv123"
      />
      <Link href="Profile">
        <Button variant="primary" className="w-100 mb-2">
          Sign up
        </Button>
      </Link>
      <br />
      <Link href="Signin"> Sign in </Link>
    </Container>
  );
}
