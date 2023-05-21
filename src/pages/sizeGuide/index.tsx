import "./SizeGuide.scss";

import sizeGuideImg from "assets/sizeGuide/size-guide.png";

const SizeGuide = () => {
  return (
    <div className="size-guide">
      <h1>Size Guide</h1>
      <p>
        Find your perfect size. Our size guide is designed to ensure that you
        choose the garments that are the right size and fit for you.
      </p>
      <div className="size-guide-image">
        <img src={sizeGuideImg} alt="size-guide" />
      </div>
    </div>
  );
};

export default SizeGuide;
