"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, AlignJustify } from "lucide-react";
import DropDownNav from "./DropDownNav";

/**
 * Navigation link configuration
 * @type {Array<{id: number, title: string, targetId: string}>}
 */
const NAV_LINKS = [
  { id: 1, title: "Website Design", targetId: "website-design" },
  { id: 2, title: "Graphic Design", targetId: "graphic-design" },
  { id: 3, title: "Shopify Stores", targetId: "shopify-stores" },
  { id: 4, title: "Services", targetId: "services" },
];

export default function Navbar() {
  const [isDropDownVisible, setIsDropdownVisible] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  /**
   * Toggles the mobile dropdown visibility
   */
  const toggleDropdown = () => setIsDropdownVisible((prev) => !prev);

  /**
   * Closes the mobile dropdown
   */
  const closeDropdown = () => setIsDropdownVisible(false);

  /**
   * Handles navigation to sections
   * @param {React.MouseEvent} e - Click event
   * @param {string} targetId - ID of the target section
   */
  const handleNavigation = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();

    if (isHomePage) {
      // Scroll to section on home page
      scrollToSection(targetId);
    } else {
      // Navigate to home page with hash
      window.location.href = `/#${targetId}`;

      scrollToSection(targetId);
    }

    closeDropdown();
  };

  /**
   * Smooth scrolls to a section
   * @param {string} targetId - ID of the target section
   */
  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle hash navigation on page load
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => scrollToSection(hash));
    }
  }, [isHomePage]);

  return (
    <header className="p-2 px-4 md:px-8 flex items-center justify-between w-full absolute z-30 bg-transparent">
      {/* Logo - Always links to home page */}
      <Link href="/" className="cursor-pointer">
        <Image
          priority
          src="/logo.svg"
          alt="Company Logo"
          width={200}
          height={200}
          className="w-15 h-15 md:w-20 md:h-20 invert"
        />
      </Link>

      {/* Desktop Navigation - Visible on md screens and larger */}
      <nav className="hidden md:flex items-center space-x-10">
        {NAV_LINKS.map(({ id, title, targetId }) => (
          <button
            key={id}
            onClick={(e) => handleNavigation(e, targetId)}
            className="cursor-pointer font-bold text-base  hover:text-white transition-colors text-slate-300 bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-100 bg-opacity-50"
            aria-label={`Scroll to ${title} section`}>
            <span className="text-transparent">{title}</span>
          </button>
        ))}
        <Link
          href="/pricing"
          className="font-bold text-base  hover:text-white transition-colors text-slate-300 bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-100 bg-opacity-50">
          <span className="text-transparent">Pricing</span>
        </Link>
      </nav>

      {/* Mobile Navigation Toggle - Visible on small screens */}
      <div className="flex md:hidden">
        {isDropDownVisible ? (
          <div className="flex items-center">
            {/* Close dropdown button */}
            <X
              onClick={toggleDropdown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
              aria-label="Close navigation menu"
            />
            {/* Dropdown menu component */}
            <DropDownNav onClose={closeDropdown} />
          </div>
        ) : (
          // Open dropdown button
          <AlignJustify
            onClick={toggleDropdown}
            className="w-8 h-8 text-slate-300 cursor-pointer"
            aria-label="Open navigation menu"
          />
        )}
      </div>

      {/* Contact Button - Visible on desktop only */}
      <div className="hidden md:flex">
        <Link
          href="/contact"
          className="inline-flex h-12 px-13 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors"
          aria-label="Contact us">
          Contact
        </Link>
      </div>
    </header>
  );
}
