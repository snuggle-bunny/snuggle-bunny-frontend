import "./CareInformation.scss";

import { careData } from "data/careData";

const CareInformation = () => {
  const allCareData = careData.map(({ title, description, image }) => {
    return (
      <div className="care-information-item" key={title}>
        <div className="care-information-item-logo">
          <img src={image} alt={title} />
        </div>
        <div className="care-information-item-text">
          <div className="care-information-item-text-title">{title}</div>
          <div className="care-information-item-text-description">
            {description}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="care-information">
      <h1>Care Information</h1>
      <div className="care-information-container">{allCareData}</div>
    </div>
  );
};

export default CareInformation;
