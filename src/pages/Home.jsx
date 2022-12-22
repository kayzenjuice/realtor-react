/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Home = () => {
  const cardData = [
    {
      title: "Card 1",
      description: "This is card 1",
      imageUrl: "https://example.com/card1.jpg",
    },
    {
      title: "Card 2",
      description: "This is card 2",
      imageUrl: "https://example.com/card2.jpg",
    },
    {
      title: "Card 3",
      description: "This is card 3",
      imageUrl: "https://example.com/card3.jpg",
    },
  ];

  const Card = ({ title, description, imageUrl }) => (
    <div className="flex relative rounded-lg shadow-md">
      <img
        src={imageUrl}
        alt="card image"
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  const cards = cardData.map((card) => (
    <Card
      key={card.title}
      title={card.title}
      description={card.description}
      imageUrl={card.imageUrl}
    />
  ));

  return (
    <div>
      <div className="grid gap-4 justify-center grid-cols-3 p-10">{cards}</div>
    </div>
  );
};

export default Home;
