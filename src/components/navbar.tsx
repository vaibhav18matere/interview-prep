"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-6 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <Link href="/"><MenuItem setActive={setActive} active={active} item="Home"></MenuItem></Link>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Github</HoveredLink>
            <HoveredLink href="/individual">LinkedIn</HoveredLink>
            <HoveredLink href="/team">Twitter</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="About Us"
        ></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Practice">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#!">Theory Questions</HoveredLink>
            <HoveredLink href="#!">JavaScript Quiz</HoveredLink>
            <HoveredLink href="#!">React Quiz</HoveredLink>
            <HoveredLink href="#!">TypeScript Quiz</HoveredLink>
            <HoveredLink href="#!">DSA Questions</HoveredLink>
            <HoveredLink href="#!">JavaScript Machine Coding</HoveredLink>
            <HoveredLink href="#!">React Machine Coding</HoveredLink>
            <HoveredLink href="#!">JS Theorey Interview Questions</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
