import "./style.Footer.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo_footer.svg";

const snsData = [{}];

export default function Footer() {
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
          <div className="sns-wrapper"></div>
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
          </ul>
        </div>
      </div>
    </footer>
  );
}
