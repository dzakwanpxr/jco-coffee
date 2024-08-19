/* eslint-disable react/prop-types */
export default function MilestoneItem(props) {
  const { year, title, image, description } = props;
  return (
    <div className="about-page__milestone-item">
      <span className="about-page__milestone-year">{year}</span>
      <h3 className="about-page__milestone-title">{title}</h3>
      <img
        src={image}
        alt={`Milestone ${year}`}
        className="about-page__milestone-image"
      />
      <p className="about-page__milestone-description">{description}</p>
    </div>
  );
}
