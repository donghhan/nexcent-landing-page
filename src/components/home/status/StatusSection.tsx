import "./style.StatusSection.scss";
import card from "../../../app/icons/card.svg";
import hand from "../../../app/icons/hand.png";
import person from "../../../app/icons/person.png";
import point from "../../../app/icons/point.svg";
import Image from "next/image";

const cardData = [
  {
    src: person,
    number: 2245341,
    text: "Members",
  },
  {
    src: hand,
    number: 46328,
    text: "Clubs",
  },
  {
    src: point,
    number: 828867,
    text: "Event Bookings",
  },
  {
    src: card,
    number: 1926436,
    text: "Payments",
  },
];

export default function StatusSection() {
  return (
    <section id="status">
      <div className="container">
        <div className="text-wrapper">
          <h1 className="title">
            Helping a local <span>business reinvent itself</span>
          </h1>
          <span className="sub-text">
            We reached here with our hard work and dedication
          </span>
        </div>
        <div className="status-wrapper">
          {cardData.map((i, index) => (
            <div className="card" key={index}>
              <Image src={i.src} alt="Card Icon" />
              <div className="text">
                <span className="number">
                  {i.number.toLocaleString("en-US")}
                </span>
                <span className="identifier">{i.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
