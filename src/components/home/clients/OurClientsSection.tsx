import "./style.OurClientsSection.scss";
import Image from "next/image";
import company1 from "public/images/company1.svg";
import company2 from "public/images/company2.svg";
import company3 from "public/images/company3.svg";
import company4 from "public/images/company4.svg";
import company5 from "public/images/company5.svg";
import company6 from "public/images/company6.svg";
import company7 from "public/images/company7.svg";

const images = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
];

export default function OurClientsSection() {
  return (
    <section id="our-clients">
      <div className="container">
        <div className="text-wrapper">
          <h1>Our Clients</h1>
          <span>We have been working with some Fortune 500+ clients</span>
        </div>
        <div className="logo-wrapper">
          {images.map((image, index) => (
            <Image src={image} key={index} alt="Company Logo" />
          ))}
        </div>
      </div>
    </section>
  );
}
