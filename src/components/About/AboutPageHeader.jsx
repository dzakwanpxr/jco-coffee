import map from "@assets/story-1.jpg";

export default function AboutPageHeader() {
  return (
    <header className="about-page__header">
      <img
        src={map}
        alt="JCO Global Map"
        className="about-page__header-image"
      />
      <div className="about-page__header-overlay"></div>
      <h1 className="about-page__title">Our Story</h1>
    </header>
  );
}
