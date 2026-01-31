import { FaSearch } from "react-icons/fa";

export default function InputSeacrch() {
  return (
    <>
      <section className="flex justify-between items-center w-[60%] relative -right-[15%] ">
        <div className=" flex justify-between items-center w-[80%] h-auto rounded-md bg-bgCard">
          <input
            type="text"
            placeholder="Search city weather..."
            className="w-[100%] bg-transparent py-3  px-5 outline-none placeholder-opacity-15 italic"
          />
        </div>
        <button className="w-[15%] bg-bgCard p-3 text-xl flex justify-center items-center rounded-md hover:bg-bgCardSoft ">
          <FaSearch />
        </button>
      </section>
    </>
  );
}
