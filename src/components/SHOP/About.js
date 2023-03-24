import React from "react";
import Navigation from "./Navigation.js";
import Aboutbot from "./Components_SHOP/Aboutbot.js";
import { useAuth } from "../firebasse/base.js";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigator = useNavigate();
  const user = useAuth();
  if (user === null) {
    navigator("/");
  }

  return (
    <div>
      <Navigation />
      <p className=" text-5xl">KURAC</p>
      <Aboutbot />
    </div>
  );
};

export default About;
