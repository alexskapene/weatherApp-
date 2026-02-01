import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import InputSeacrch from "../components/InputSeacrch.jsx";
import WeatherCard from "../components/WeatherCard.jsx";
import RightSide from "../components/RightSide.jsx";

function Dashboard() {
  return (
    <>
      <main className="relative p-8 ">
        <section className=" section1 flex items-start ">
          <Sidebar />
          <InputSeacrch />
        </section>

        <section className="section2 w-[85%] flex justify-between items-center p-8 mx-auto absolute top-[17%] left-[15%]">
          <WeatherCard />
          <RightSide />
        </section>
      </main>
    </>
  );
}

export default Dashboard;
