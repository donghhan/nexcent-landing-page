"use client";
import "./style.Header.scss";
import { useState } from "react";
import logo from "public/images/logo.svg";
import close from "@/app/icons/close.svg";
import burger from "@/app/icons/burger.svg";
import Image from "next/image";
import Link from "next/link";

const linkData = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/",
    text: "Service",
  },
  {
    href: "/",
    text: "Feature",
  },
  {
    href: "/",
    text: "Product",
  },
  {
    href: "/",
    text: "Testimonial",
  },
  {
    href: "/",
    text: "FAQ",
  },
];

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  console.log(open);

  return (
    <header>
      <div className="container">
        <div className="logo-wrapper">
          <Image src={logo} alt="Logo image" />
        </div>
        <ul className="menu-wrapper">
          {linkData.map((i, index) => (
            <li key={index}>
              <Link href={i.href}>{i.text}</Link>
            </li>
          ))}
        </ul>
        <div className="button-wrapper">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <Image src={close} alt="Close icon" />
            ) : (
              <Image src={burger} alt="Burger menu icon" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
