import HomePageArabica from "@components/Home/HomePageArabica";
import HomePageCollection from "@components/Home/HomePageCollection";
import HomePageDetails from "@components/Home/HomePageDetail";
import HomePageHeader from "@components/Home/HomePageHeader";
import HomePageIntro from "@components/Home/HomePageIntro";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <HomePageHeader />
      <main className="home-page__content">
        <HomePageIntro />
        <HomePageDetails />
        <HomePageArabica />
        <HomePageCollection />
      </main>
    </div>
  );
}
