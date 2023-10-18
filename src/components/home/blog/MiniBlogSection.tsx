import "./style.MiniBlogSection.scss";
import Image from "next/image";
import blogImage1 from "public/images/blog1.png";
import blogImage2 from "public/images/blog2.png";
import blogImage3 from "public/images/blog3.png";
import Link from "next/link";

const miniBlogData = [
  {
    src: blogImage1,
    title: "Creating Stramlined Safeguarding Processes with OneRen",
  },
  {
    src: blogImage2,
    title:
      "What Are Your Safeguarding Responsibilities and How Can You Manage Them?",
  },
  {
    src: blogImage3,
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];

export default function MiniBlogSection() {
  return (
    <section id="mini-blog">
      <div className="container">
        <div className="text-wrapper">
          <h1 className="title">Caring is the new marketing</h1>
          <p className="sub-text">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.
          </p>
        </div>
        <div className="blog-wrapper">
          {miniBlogData.map((i, index) => (
            <div className="blog-card" key={index}>
              <Image src={i.src} alt="Blog post thumbnail" />
              <div className="text-card">
                <h2 className="blog-title">{i.title}</h2>
                <Link className="blog-link" href="/">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
