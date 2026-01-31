import { useState } from "react";
import { FaAlignLeft, FaCity, FaMapLocation } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";
import { TiWeatherCloudy } from "react-icons/ti";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const iconsSiderBar = [
    { id: 1, label: "Weather", icon: <TiWeatherCloudy /> },
    { id: 2, label: "Cities", icon: <FaCity /> },
    { id: 3, label: "Map", icon: <FaMapLocation /> },
    { id: 4, label: "Settings", icon: <IoMdSettings /> },
  ];
  return (
    <>
      <div className=" hidden md:flex flex-col justify-center items-center w-[100px] h-screen bg-bgCard rounded-lg space-y-10">
        {iconsSiderBar.map((icon) => (
          <div
            className=" w-[80%] flex flex-col justify-center items-center gap-2 hover:bg-bgCardSoft p-2 rounded-md "
            key={icon.id}
          >
            <span className="text-2xl">{icon.icon}</span>
            <h3>{icon.label}</h3>
          </div>
        ))}
      </div>

      <button
        className=" md:hidden w-[3rem] h-[3rem] text-2xl bg-bgCard hover:bg-bgCardSoft grid place-content-center rounded-md absolute top-[10%] left-[12%] z-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RiCloseLargeLine /> : <FaAlignLeft />}
      </button>
      {isOpen && (
        <div className="md:hidden flex flex-col justify-center items-center w-[100px] h-screen bg-bgCard rounded-lg space-y-10 relative">
          {iconsSiderBar.map((icon) => (
            <div
              className=" w-[80%] flex flex-col justify-center items-center gap-2 hover:bg-bgCardSoft p-2 rounded-md "
              key={icon.id}
            >
              <span className="text-2xl">{icon.icon}</span>
              <h3>{icon.label}</h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
