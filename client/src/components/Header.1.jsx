import React from "react";
import { Navbar } from "flowbite-react";

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link to="/">
        <span>NhelTech's</span>
        Blog
      </Link>
    </Navbar>
  );
}
