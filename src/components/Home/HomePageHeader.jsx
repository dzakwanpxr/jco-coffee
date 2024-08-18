import coffeeHeaderImage from "@assets/m1.jpg";

export default function HomePageHeader() {
  return (
    <header className="home-page__header">
      <img
        src={coffeeHeaderImage}
        alt="J.CO Coffee"
        className="home-page__header-image"
      />
      <h1 className="home-page__title">Our Coffee</h1>
    </header>
  );
}
