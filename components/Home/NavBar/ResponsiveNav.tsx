"use client";
import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavOpen = () => setShowNav(true);
  const handleNavClose = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={handleNavOpen} />
      <MobileNav showNav={showNav} closeNav={handleNavClose} />
    </div>
  );
};

export default ResponsiveNav;
