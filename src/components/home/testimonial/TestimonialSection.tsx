import "./style.TestimonialSection.scss";
import Image from "next/image";
import profile from "public/images/profile.png";

export default function TestimonialSection() {
  return (
    <section id="testimonial">
      <div className="container">
        <Image src={profile} alt="Profile Thumbnail" />
        <div className="text-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            repellat doloremque, pariatur perferendis consequuntur deleniti modi
            corrupti corporis dolorem, in quibusdam vitae debitis officiis! Est
            ex a nisi laudantium ab harum cumque eveniet eum, ipsum
            necessitatibus adipisci similique quo at repellat eius delectus iste
            quia rem impedit accusamus voluptatem modi optio consequuntur.
            Quaerat et in nesciunt omnis natus perferendis aut?
          </p>
          <span className="name">John Doe</span>
          <span className="position">
            British Dragon Boat Racing Association
          </span>
        </div>
      </div>
    </section>
  );
}
