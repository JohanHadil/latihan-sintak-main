import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import JohanNameCard from "../components/name-card/johan";
import JejeNameCard from "../components/name-card/jeje";

function AboutPage() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen py-24 ">
        <div className="flex gap-8 flex-wrap items-center justify-center w-full px-4">

        <JohanNameCard />
        {/* Panggil kartu nama kamu dibawah sini..... */}
<JejeNameCard/>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
