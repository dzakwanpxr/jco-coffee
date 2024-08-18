import coffeeImage1 from "@assets/m1.jpg";
import coffeeImage2 from "@assets/m1.jpg";

export default function HomePageDetails() {
  return (
    <section className="home-page__details">
      <div className="home-page__details-grid">
        <img
          src={coffeeImage1}
          alt="Coffee Machine"
          className="home-page__details-image"
        />
        <img
          src={coffeeImage2}
          alt="Pouring Coffee"
          className="home-page__details-image"
        />
      </div>
    </section>
  );
}
