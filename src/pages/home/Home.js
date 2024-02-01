import React from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Cards from "../../cards/Cards";
import vector from "./../../images/vector.png";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />

        <Cards />

        <Footer />
      </div>
    </>
  );
}
