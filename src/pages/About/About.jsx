import AboutPageHeader from "@components/About/AboutPageHeader";
import AboutPageStory from "@components/About/AboutPageStory";
import AboutPageMilestones from "@components/About/AboutPageMilestones";
import m1 from "@assets/m1.jpg";
import m2 from "@assets/m2.jpg";
import m3 from "@assets/m3.jpg";
import m4 from "@assets/m4.jpg";
import m5 from "@assets/m5.jpg";
import m6 from "@assets/m6.jpg";
import "./About.css";

export default function About() {
  const milestones = [
    {
      id: 1,
      year: "2006",
      description:
        "J.CO’s first store was opened in May 2006 in Indonesia as a result of many years of research & development and true labor of love over our products.",
      image: m1,
    },
    {
      id: 2,
      year: "2007",
      description: "First branch opened in Malaysia.",
      image: m2,
    },
    {
      id: 3,
      year: "2008",
      description: "First branch opened in Singapore.",
      image: m3,
    },
    {
      id: 4,
      year: "2012",
      description: "First branch opened in Philippines.",
      image: m4,
    },
    {
      id: 5,
      year: "2016",
      description:
        "First branch opened in Hong Kong. Our 10th year anniversary.",
      image: m5,
    },
    {
      id: 6,
      year: "2018",
      description: "First branch opened in Saudi Arabia.",
      image: m6,
    },
  ];

  return (
    <main className="about-page">
      <AboutPageHeader />
      <div className="about-page__content">
        <AboutPageStory />
        <AboutPageMilestones milestones={milestones} />
      </div>
    </main>
  );
}
