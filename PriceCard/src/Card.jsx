import React from "react";
import "./Card.css";

const data = [
  {
    title: "Free",
    price: "$ 0/month",
    features: [
      { title: "Single User", available: true },
      { title: "50 GB", available: true },
      { title: "Unlimited Public project", available: true },
      { title: "Unlimited private project", available: false },
      { title: "Comunity access", available: false },
      { title: "Unlimited Phone support ", available: false },
      { title: "Free subdomain", available: false },
      { title: "Monthly status report", available: false },
    ],
  },

  {
    title: "Pro",
    price: "$ 9/month",
    features: [
      { title: "Single User", available: true },
      { title: "50 GB", available: true },
      { title: "Unlimited Public project", available: true },
      { title: "Unlimited private project", available: true },
      { title: "Comunity access", available: true },
      { title: "Unlimited Phone support ", available: true },
      { title: "Free subdomain", available: false },
      { title: "Monthly status report", available: false },
    ],
  },

  {
    title: "Plus",
    price: "$ 49/month",
    features: [
      { title: "Single User", available: true },
      { title: "50 GB", available: true },
      { title: "Unlimited Public project", available: true },
      { title: "Unlimited private project", available: true },
      { title: "Comunity access", available: true },
      { title: "Unlimited Phone support ", available: true },
      { title: "Free subdomain", available: true },
      { title: "Monthly status report", available: true },
    ],
  },
];

const Card = ({ title, price, features }) => {
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <h3 className="price">{price}</h3>

      <ul>
        {features.map((feature, index) => (
          <li
            key={index}
            className={feature.available ? "available" : "unavailable"}
          >
            <span className={feature.available ? "check" : "Xmark"}>
              {feature.available ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <i className="fa-solid fa-xmark"></i>
              )}
            </span>

            {feature.title}
          </li>
        ))}
      </ul>
      <button className="button">Buy now</button>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="Container">
      {data.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Cards;
