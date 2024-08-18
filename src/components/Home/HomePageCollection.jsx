import collectionImage1 from "@assets/m1.jpg";
import collectionImage2 from "@assets/m1.jpg";
import collectionImage3 from "@assets/m1.jpg";

export default function HomePageCollection() {
  return (
    <section className="home-page__collection">
      <div className="home-page__collection-text">
        <p>
          Our unique and exciting coffee menu consists of classic and flavored
          coffee drinks, from traditional to truly creative.
        </p>
      </div>
      <div className="home-page__collection-images">
        <img
          src={collectionImage1}
          alt="Coffee Collection 1"
          className="home-page__collection-image"
        />
        <img
          src={collectionImage2}
          alt="Coffee Collection 2"
          className="home-page__collection-image"
        />
      </div>
      <div className="home-page__collection-footer">
        <img
          src={collectionImage3}
          alt="Coffee Collection"
          className="home-page__collection-footer-image"
        />
        <button className="home-page__collection-button">
          Our Coffee Collection
        </button>
      </div>
    </section>
  );
}
