import HomePageHeader from "@components/Home/HomePageHeader";
import HomePageStory from "@components/Home/HomePageStory";
import HomePageProducts from "@components/Home/HomePageProducts";
import { coffeeProducts } from "@shared/data/coffeeProducts";
import "./Home.css";

export default function Home() {
  const featuredCoffeeProducts = coffeeProducts.slice(0, 3);

  return (
    <main className="home-page">
      <HomePageHeader />
      <div className="home-page__content">
        <HomePageStory />
        <HomePageProducts products={featuredCoffeeProducts} />
      </div>
    </main>
  );
}
