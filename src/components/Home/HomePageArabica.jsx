import arabicaImage from "@assets/m1.jpg";

export default function HomePageArabica() {
  return (
    <section className="home-page__arabica">
      <div className="home-page__arabica-image-container">
        <img
          src={arabicaImage}
          alt="Arabica Coffee Beans"
          className="home-page__arabica-image"
        />
      </div>
      <div className="home-page__arabica-content">
        <h2 className="home-page__arabica-title">Why Arabica?</h2>
        <p className="home-page__arabica-text">
          Compared to Robusta coffee beans which often have a burnt-rubber taste
          and quality, Arabica beans are delicate, well-rounded, aromatic, and
          can be grown and processed in different ways to instill a variety of
          flavors. The choice for us was easy. We only use 100% of the finest
          quality Arabica beans at J.CO.
        </p>
        <p className="home-page__arabica-text">
          Whatever your mood is, we’ve roasted them to a perfect medium to
          extract a well-balanced flavor profile from each bean.
        </p>
      </div>
    </section>
  );
}
