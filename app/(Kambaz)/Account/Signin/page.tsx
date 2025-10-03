"use client";
import Link from "next/link";
import { Button, Container, FormControl } from "react-bootstrap";

export default function Signin() {
  return (
    <Container id="wd-signin-screen">
      <h3>Sign In</h3>
      <FormControl
        id="wd-username"
        placeholder="Username"
        className="mb-2"
        defaultValue="dhruvsinha"
      />
      <FormControl
        id="wd-password"
        placeholder="Password"
        type="password"
        className="mb-2"
        defaultValue="dhruv123"
      />
      <Link href="/Dashboard">
        <Button variant="primary" className="w-100 mb-2">
          Sign in
        </Button>
      </Link>
      <br />
      <Link href="Signup" id="wd-signup-link">
        Sign up
      </Link>
    </Container>
  );
}
