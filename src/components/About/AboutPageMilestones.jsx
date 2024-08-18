export default function AboutPageMilestones(props) {
  const { milestones } = props;
  return (
    <section className="about-page__milestones">
      <h2 className="about-page__milestones-title">OUR MILESTONES</h2>
      <div className="about-page__milestone-grid">
        {milestones.map((milestone, index) => (
          <div key={index} className="about-page__milestone-item">
            <span className="about-page__milestone-year">{milestone.year}</span>
            <h3 className="about-page__milestone-title">{milestone.title}</h3>
            <img
              src={milestone.image}
              alt={`Milestone ${milestone.year}`}
              className="about-page__milestone-image"
            />
            <p className="about-page__milestone-description">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
