import './About.scss'

import { aboutData } from "data/aboutData";

const About = () => {
  const aboutBody = aboutData.map(({ title, description }) => {
    return (
      <div className="about-section" key={title}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  });
  return <div className="about-page">{aboutBody}</div>;
};

export default About;
