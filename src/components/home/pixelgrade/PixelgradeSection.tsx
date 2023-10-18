import "./style.PixelgradeSection.scss";
import mobileLogin from "public/images/mobile-login.svg";
import Image from "next/image";
import Button from "@/components/button/Button";

export default function PixelgradeSection() {
  return (
    <section id="pixel-grade">
      <div className="container">
        <div className="image-wrapper">
          <Image src={mobileLogin} alt="Pixelgrade Thumbnail Image" />
        </div>
        <div className="text-wrapper">
          <h1>The unseen of spending three years at Pixelgrade</h1>
          <p className="text">
            Pixelgrade has been striving for maintaing high level of
            authentication & authorization process with preventing sensitive
            individual information of custoemrs from being hacked. This is not
            only for our current customers but also for our future customers.
          </p>
          <Button text="Learn More" type="primary" />
        </div>
      </div>
    </section>
  );
}
