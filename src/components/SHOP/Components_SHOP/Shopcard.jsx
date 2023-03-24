import React from "react";

const Card = (props) => {
  const size = {
    width: "100%",
    height: "250px",
  };

  return (
    <div className="flex flex-wrap">
      <div className="card card-compact w-96 bg-base-100 shadow-xl m-7">
        <figure>
          <img style={size} src={props.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions  flex justify-center ">
            <button className="btn btn-primary mt-4  ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
