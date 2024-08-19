import arabica from "@assets/arabica.jpeg";

export default function HomePageStory() {
  return (
    <>
      <section className="home-page__story">
        <div className="home-page__story-column">
          <p className="home-page__story-text">
            When we developed our donuts, we didn&apos;t stop there.
          </p>
        </div>
        <div className="home-page__story-column">
          <p className="home-page__story-text">
            We searched high and low for coffee that would pair perfectly with
            our donuts and finally we settled on fine selections of Arabica
            beans. Similar to wine, coffee beans are influenced by soil,
            altitude, and other climate factors that naturally make some coffee
            trees better than others.
          </p>
        </div>
      </section>
      <section className="home-page__main-story">
        <div className="home-page__main-story-left">
          <img
            src={arabica}
            alt="JCO Donuts"
            className="home-page__main-story-image"
          />
        </div>
        <div className="home-page__main-story-right">
          <p className="home-page__main-story-title">WHY ARABICA?</p>
          <p className="home-page__main-story-text">
            Compared to Robusta coffee beans which often have a burnt-rubber
            taste and quality, Arabica beans are delicate, well-rounded,
            aromatic, and can be grown and processed in different ways to
            instill a variety of flavors. The choice for us was easy. We only
            use 100% of the finest quality Arabica beans at J.CO.
          </p>
          <p className="home-page__main-story-text">
            Whatever your mood is, we’ve roasted them to a perfect medium to
            extract a well-balanced flavor profile from each bean.
          </p>
        </div>
      </section>
    </>
  );
}
