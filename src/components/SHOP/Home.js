import React from "react";
import img1 from "./Picture/nike.jpg";
import Navigation from "./Navigation";
import { useState } from "react";
import Modal from "./Modal/Modal";
import { motion } from "framer-motion";
import { handler } from "daisyui";

const Home = () => {
  const [showMyModal, setShowMyModal] = useState(false);
  const handlerOnClose = () => setShowMyModal(false);

  return (
    <div>
      <Navigation />
      <motion.div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.div
            animate={{ x: 100 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img src={img1} className="max-w-sm rounded-lg shadow-2xl h-64" />
          </motion.div>
          <div>
            <h1 className="text-5xl font-bold">
              Offering the <span className=" text-red-700">BEST</span> sneakers
              in the collection!
            </h1>
            <p className="py-6">
              Currently in our collection I offer you the latest pair of NIKE 95
              sneakers which in LIMITED FOR SALE.
            </p>
            <p
              className="
                          font-bold    text-3xl"
            >
              BUY NOW ONLY FOR 799$
            </p>
            <button
              onClick={() => setShowMyModal(true)}
              className="btn btn-primary mt-10"
            >
              ORDER NOW!
            </button>
          </div>
        </div>
      </motion.div>
      <Modal onClose={handlerOnClose} visible={showMyModal} />
    </div>
  );
};

export default Home;
