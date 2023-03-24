import React from "react";
import Navigation from "./Navigation";
import Card from "./Components_SHOP/Shopcard";
import logo from "./Picture/black95.jpg";
import nikeblack from "./Picture/test1.jpg";
import nikeblackk from "./Picture/black2.jpg";
import test1 from "./Picture/test2.png";
import test2 from "./Picture/dobra11.jpg";
import test3 from "./Picture/test2.png";
import lui from "./Picture/lui.png";

const Services = () => {
  return (
    <div>
      <Navigation />

      <div className="flex flex-wrap mt-5  justify-center ">
        <Card img={lui} name="tuba" />
        <Card img={lui} name="tuba" />
        <Card img={lui} name="tuba" />
        <Card img={lui} />
        <Card img={lui} />
        <Card img={lui} />
      </div>
    </div>
  );
};

export default Services;
