import "./style.ManageSection.scss";
import building from "public/images/building.svg";
import group from "public/images/group.svg";
import membership from "public/images/membership.svg";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

const cardInfo = [
  {
    src: building,
    title: "Membership Organizations",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    src: group,
    title: "National Associations",
    text: "Our software system guarantees the highest level of security level throughout the whole features",
  },
  {
    src: membership,
    title: "Clubs and Groups",
    text: "Our product allows you to monitor and supervise the multiple groups simultaneously without any lagging",
  },
];

export default function ManageSection() {
  return (
    <Layout
      direction="vertical"
      title="Manage your entire community in a single system"
      text="Who is Nexcent suitable for?"
    >
      <div className="card-wrapper">
        {cardInfo.map((info, index) => (
          <div key={index} className="card">
            <Image src={info.src} alt="Card Icon" />
            <h2 className="card-title">{info.title}</h2>
            <p className="card-text">{info.text}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
