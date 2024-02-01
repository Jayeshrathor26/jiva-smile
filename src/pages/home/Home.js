import React from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Cards from "../../cards/Cards";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
