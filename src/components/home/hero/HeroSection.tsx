import "./style.HeroSection.scss";
import Image from "next/image";
import hero from "public/images/hero.svg";
import Button from "@/components/button/Button";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="container">
        <div className="text-wrapper">
          <h1 className="title">
            Lessons and insights <br /> <span>from 8 years</span>
          </h1>
          <span className="text">
            Where to grow your business as a photographer: site or social media?
          </span>
          <Button type="primary" text="Register" />
        </div>
        <div className="image-wrapper">
          <Image src={hero} alt="Hero image" />
        </div>
      </div>
    </section>
  );
}
