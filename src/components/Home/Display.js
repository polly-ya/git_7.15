import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Display.css";
import data from "../../data/data";
import { Link } from "react-router-dom";

function Display(props) {
  // const glasses = [
  //   {
  //     id: 1,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
  //     name: "Burnikk",
  //     category: "Sexbomb",
  //   },
  //   {
  //     id: 2,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
  //     name: "Kibal Batal",
  //     category: "Kibal Black",
  //   },
  //   {
  //     id: 3,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a",
  //     name: "Very Nice",
  //     category: "Salt maalat",
  //   },
  //   {
  //     id: 4,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be",
  //     name: "Buldit",
  //     category: "Salt Maalat",
  //   },
  //   {
  //     id: 5,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c",
  //     name: "Balakubak",
  //     category: "Betsin Maalat",
  //   },
  //   {
  //     id: 6,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10",
  //     name: "Tiktilaok Manok",
  //     category: "Sexbomb",
  //   },
  // ];

  const glasses = data.slice(0, 6);

  return (
    <div className="display" style={{ margin: props.margin }}>
      <div className="display-header">
        <h1 style={{ lineHeight: "3" }}>{props.value}</h1>
        <a href="/featured">See All</a>
      </div>
      <div className="product-display-grid">
        {glasses.map((v) => {
          return (
            <div className="product-display" role="presentation" key={v.id}>
              <Link to={`/product/${v.id}/${v.name}`}>
                <div className="product-display-img">
                  <img
                    alt=""
                    className="product-card-img is-img-loaded"
                    src={process.env.PUBLIC_URL + v.img}
                    // src={process.env.PUBLIC_URL + "/logo192.png"}
                  />
                </div>
                <div className="product-display-details">
                  <h2>{v.name}</h2>
                  <p className="text-subtle text-italic">{v.brand}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Display;
