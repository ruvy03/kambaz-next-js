"use client";
import Link from "next/link";
import { Button, FormControl } from "react-bootstrap";

export default function Signin() {
  return (
    <div style={{ maxWidth: "400px" }}>
      <div id="wd-signin-screen">
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
          <Button id="wd-signin-btn" variant="primary" className="w-100 mb-2">
            Sign in
          </Button>
        </Link>
        <Link href="Signup" id="wd-signup-link">
          Sign up
        </Link>
      </div>
    </div>
  );
}
