"use client";
import "./style.Footer.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo_footer.svg";
import instagram from "@/app/icons/instagram.svg";
import globe from "@/app/icons/globe.svg";
import twitter from "@/app/icons/twitter.svg";
import youtube from "@/app/icons/youtube.svg";
import send from "@/app/icons/send.svg";
import check from "@/app/icons/check.svg";
import { useForm } from "react-hook-form";

interface EmailInput {
  email: string;
}

const snsData = [
  { src: instagram, href: "/" },
  { src: globe, href: "/" },
  { src: twitter, href: "/" },
  { src: youtube, href: "/" },
];

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailInput>();

  return (
    <footer>
      <div className="container">
        <div className="logo-wrapper">
          <Image src={logo} alt="Logo" />
          <span>
            Copyright &copy; 2020 Nexcent ltd.
            <br />
            All rights reserved
          </span>
          <div className="sns-wrapper">
            {snsData.map((i, index) => (
              <Link className="icon-wrapper" href={i.href} key={index}>
                <Image src={i.src} alt="SNS Icon" />
              </Link>
            ))}
          </div>
        </div>
        <div className="menu-wrapper">
          <ul className="company-wrapper">
            <span className="menu-title">Company</span>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Contact us</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Testimonials</Link>
            </li>
          </ul>
          <ul className="support-wrapper">
            <span className="menu-title">Support</span>
            <li>
              <Link href="/">Help center</Link>
            </li>
            <li>
              <Link href="/">Terms of service</Link>
            </li>
            <li>
              <Link href="/">Legal</Link>
            </li>
            <li>
              <Link href="/">Privacy policy</Link>
            </li>
          </ul>
          <ul className="update-wrapper">
            <span className="menu-title">Stay up to date</span>
            <form onSubmit={handleSubmit(console.log)}>
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Your email address"
                  {...register("email", {
                    required: "Require email address",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                <button>
                  <Image src={send} alt="Send button" />
                </button>
              </div>
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </form>
          </ul>
        </div>
      </div>
    </footer>
  );
}
