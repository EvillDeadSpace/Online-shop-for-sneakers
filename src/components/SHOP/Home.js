import React from "react";
import img1 from "./Picture/nike.jpg";
import Navigation from "./Navigation";
import { useState } from "react";
import Modal from "./Modal/Modal";
import { motion } from "framer-motion";
import { useAuth } from "../firebasse/base";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import lila from "./Picture/lila.jpg";

const Home = () => {
  const navigator = useNavigate();
  const [showMyModal, setShowMyModal] = useState(false);
  const handlerOnClose = () => setShowMyModal(false);
  const user = useAuth();

  if (user === null) {
    navigator("/");
  }

  const notify = () =>
    toast.success("You have successfully logged in to the site");

  useEffect(() => {
    notify("Alert in useEffect hook");
  }, []);

  const size = {
    width: "360px",
    height: "360px",
  };
  //min-h-screen
  return (
    <div>
      <Navigation />

      <div className="hero-content flex-col lg:flex-row-reverse min-h-screen  min-w-full ">
        <div className="justify-center ">
          <img src={lila} style={size} className="rounded-full  " />
        </div>

        <div className="mr-8">
          <h1 className="text-5xl font-bold ">
            Offering the <span className="  text-purple-500">BEST</span>{" "}
            sneakers in the collection!
          </h1>
          <p className="py-6">
            Currently in our collection I offer you the latest pair of NIKE AIR
            FORCE 1 sneakers which in LIMITED FOR SALE.
          </p>
          <p className="font-bold text-3xl">BUY NOW ONLY FOR 399$</p>
          <button
            onClick={() => setShowMyModal(true)}
            className="btn btn-primary mt-10"
          >
            ORDER NOW!
          </button>
        </div>
      </div>

      <Modal onClose={handlerOnClose} visible={showMyModal} />
      <ToastContainer />
    </div>
  );
};

export default Home;
