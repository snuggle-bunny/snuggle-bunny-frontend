import "./Product.scss";

import { ICollectionData, collectionData } from "data/collectionData";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { StyledSizeButton } from "./Prdouct.styles";
import { TfiRulerAlt2 } from "react-icons/tfi";

const Product = () => {
  const { Id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [productItem, setProductItem] = useState<ICollectionData>();
  const [basketItem, setBasketItem] = useState({
    quantity: 1,
    size: ""
  });

  const [showGoToCart, setShowGoToCart] = useState(false);

  const sizeButtons = Object.entries(productItem?.sizes || []).map((size) => {
    return (
      <StyledSizeButton
        key={size[0]}
        onClick={() => setBasketItem({ ...basketItem, size: size[0] })}
        selected={basketItem.size === size[0]}
      >
        {size[0]}
      </StyledSizeButton>
    );
  });

  useEffect(() => {
    setIsLoading(false);
    setProductItem(collectionData.find((item) => Id === item?.id));
    console.log(basketItem);
  }, [isLoading, Id, basketItem]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="product-container">
      <div className="product-display">
        <img src={productItem?.image} alt={productItem?.title} />
      </div>
      <div className="product-description">
        <h1 className="product-description-title">{productItem?.title}</h1>
        <h1 className="product-description-title">£{productItem?.price}</h1>
        <div className="product-description-sizes-guide">
          <Link to="/size-guide">Size Guide</Link>
          <TfiRulerAlt2 size={18} />
        </div>
        <div className="product-description-sizes">{sizeButtons}</div>
        <div className="product-description-quantity">
          <label>Quantity</label>
          <input type="number" max="1" defaultValue={basketItem?.quantity} />
        </div>
        <div>
          <div className="product-description-buy">
            <div className="product-description-buy-add">
              <button onClick={() => setShowGoToCart(true)}>Add to Cart</button>
            </div>
            {/* {showGoToCart && ( */}
            <div className="product-description-buy-checkout">
              <button>Checkout</button>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
