import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemFn, removeSelectedItemFn } from "../../store/cartInfo";
import { addToCartFn, removeFromCartFn } from "../../store/dataInfo";
import { Link } from "react-router-dom";

function Search(props) {
  const params = useParams();
  const { key } = useParams();
  const data = useSelector((state) => state.dataInfoStore.dataInfo);
  const dispatch = useDispatch();
  const initialGlasses = [];
  console.log("search key", key);

  for (let obj of data) {
    if (
      !(
        obj.name.includes(key.toLowerCase()) ||
        obj.name.includes(key.toUpperCase())
      )
    ) {
      continue;
    }
    const glass = {
      id: obj.id,
      name: obj.name,
      brand: obj.brand,
      price: obj.price,
      img: obj.img,
      // style: { backgroundImage: process.env.PUBLIC_URL + obj.img },
      style: { backgroundImage: `url(${process.env.PUBLIC_URL + obj.img})` },
      isHovered: false,
    };
    initialGlasses.push(glass);
  }
  console.log("initialGlassesLength", initialGlasses.length);

  const [glasses, setGlasses] = useState(initialGlasses);
  console.log("glasses length", glasses.length);

  useEffect(() => {
    setGlasses(initialGlasses);
  }, [key]);

  const hoverFn = (v, id) => {
    console.log(id);
    const newGlasses = [...glasses];
    newGlasses[id] = {
      ...glasses[id],
      style: {
        backgroundImage: `url(${process.env.PUBLIC_URL + v.img})`,
        height: "60px",
        backgroundSize: "80%",
      },
      isHovered: true,
    };
    setGlasses(newGlasses);
  };

  const leaveFn = (v, id) => {
    const newGlasses = [...glasses];
    newGlasses[id] = {
      ...glasses[id],
      style: {
        backgroundImage: `url(${process.env.PUBLIC_URL + v.img})`,
        height: "100px",
        backgroundSize: "100%",
      },
      isHovered: false,
    };
    setGlasses(newGlasses);
  };

  const addToCartBtn = (id) => {
    const item = { id: id - 1, cnt: 1, size: 0, color: 0 };
    if (!data[id - 1].added) {
      dispatch(addToCartFn(id - 1));
      dispatch(addItemFn(item));
    } else {
      dispatch(removeFromCartFn(id - 1));
      dispatch(removeSelectedItemFn(id - 1));
    }
  };

  return (
    <>
      <h5 className="my-5 text-center">
        Found {glasses.length} products with keyword {key}
      </h5>
      <div className="product-grid">
        {glasses.map((v, id) => {
          return (
            <div
              className="product-display"
              role="presentation"
              key={v.id}
              style={{
                position: "relative",
                height: "232px",
                overflow: "hidden",
              }}
              onMouseEnter={() => {
                hoverFn(v, id);
              }}
              onMouseLeave={() => {
                leaveFn(v, id);
              }}
            >
              <Link to={`/product/${v.id}/${v.name}`}>
                <div
                  className="product-display-img-products"
                  // style={{ backgroundImage: `url(${v.imgURL})` }}
                  style={v.style}
                ></div>
                <div className="product-display-details">
                  <h5 className="text-center">{v.name}</h5>
                  <p className="text-subtle text-italic product-card-brand">
                    {v.brand}
                  </p>
                  <h4 className="product-price">${v.price}.00</h4>
                </div>
              </Link>
              {!data[v.id - 1].added ? (
                <button
                  className="product-card-button button-small button button-block "
                  type="button"
                  style={{
                    bottom: v.isHovered ? "0" : "-44px",
                  }}
                  onClick={() => {
                    addToCartBtn(v.id);
                  }}
                >
                  Add to Basket
                </button>
              ) : (
                <button
                  className="product-card-button button-small button button-block button-muted"
                  type="button"
                  style={{
                    bottom: v.isHovered ? "0" : "-44px",
                  }}
                  onClick={() => {
                    addToCartBtn(v.id);
                  }}
                >
                  Remove from Basket
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Search;
