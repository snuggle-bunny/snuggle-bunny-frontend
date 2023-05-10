import "./Collection.scss";

import { collectionData } from "data/collectionData";

const Collection = () => {
  const renderCollection = collectionData.map(
    ({ title, image, price, salePrice }) => {
      return (
        <div className="collection-item" key={title}>
          <img src={image} alt={title} />
          <div className="collection-item-title">{title}</div>
          <div className="collection-item-price">
            <div
              className="collection-item-price-reg"
              style={{
                textDecoration: salePrice ? "line-through" : "none",
                fontStyle: salePrice ? "italic" : "normal",
                color: salePrice ? "#b70000" : "inherit"
              }}
            >
              £{price}
            </div>
            {salePrice && (
              <span className="collection-item-price-sale">£{salePrice}</span>
            )}
          </div>
          {salePrice && (
            <div className="collection-item-price-sale-sign">
              <p>sale</p>
            </div>
          )}
        </div>
      );
    }
  );

  return <div className="collection-page">{renderCollection}</div>;
};

export default Collection;
