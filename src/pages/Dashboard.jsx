import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import InputSeacrch from "../components/InputSeacrch.jsx";

function Dashboard() {
  return (
    <>
      <section className="flex items-start p-8">
        <Sidebar />
        <InputSeacrch />
      </section>
    </>
  );
}

export default Dashboard;
