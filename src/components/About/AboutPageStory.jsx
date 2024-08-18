import donut from "@assets/donat.jpg";

export default function AboutPageStory() {
  return (
    <>
      <section className="about-page__story">
        <div className="about-page__story-column">
          <p className="about-page__story-text">
            Like so many others, it started with a dream -- a longing.
          </p>
        </div>
        <div className="about-page__story-column">
          <p className="about-page__story-text">
            Donuts weren’t always this glamorous. Let’s rewind to early 2000’s,
            when the fluffy J.CO Donuts you love didn’t exist yet. They were
            more dry, more cakey, and really much too sugary as they’re doused
            in thick coats of sugar and artificial toppings. This is not what
            we’re about.
          </p>
        </div>
      </section>
      <section className="about-page__main-story">
        <div className="about-page__main-story-left">
          <img
            src={donut}
            alt="JCO Donuts"
            className="about-page__main-story-image"
          />
        </div>
        <div className="about-page__main-story-right">
          <p className="about-page__main-story-text">
            We’re about creating mouthwatering combinations of all kinds of
            premium toppings to meld with our soft and fluffy donuts. We’re
            about pairing these delectable donuts with their perfect
            complement--coffee.
          </p>
          <p className="about-page__main-story-text">
            We change and adapt to local tastes and flavors, and we love that
            each country brings new flavor discoveries and new cultures for us
            to explore. With over 300 stores worldwide, our passion for
            exploration and innovation will continue to fuel our dreams to share
            J.CO wherever you may be in the world, one Donut and Coffee at a
            time.
          </p>
        </div>
      </section>
    </>
  );
}
