/* eslint-disable react/prop-types */
import MilestoneItem from "./MilestoneItem";

export default function AboutPageMilestones(props) {
  const { milestones } = props;
  return (
    <section className="about-page__milestones">
      <h2 className="about-page__milestones-title">OUR MILESTONES</h2>
      <div className="about-page__milestone-grid">
        {milestones.map((milestone) => (
          <MilestoneItem
            key={milestone.id}
            year={milestone.year}
            title={milestone.title}
            image={milestone.image}
            description={milestone.description}
          />
        ))}
      </div>
    </section>
  );
}
