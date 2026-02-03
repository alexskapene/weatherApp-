import { FaSearch } from "react-icons/fa";

export default function InputSeacrch({ city, setCity, onSearch }) {
  return (
    <section className="flex justify-between items-center w-[60%] relative -right-[15%]">
      <div className="flex items-center w-[80%] rounded-md bg-bgCard">
        <input
          type="text"
          placeholder="Search city weather..."
          className="w-full bg-transparent py-3 px-5 outline-none placeholder:opacity-40 italic"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
        />
      </div>

      <button
        onClick={onSearch}
        disabled={!city.trim()}
        className="w-[15%] bg-bgCard p-3 text-xl flex justify-center items-center rounded-md
                   hover:bg-bgCardSoft disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <FaSearch />
      </button>
    </section>
  );
}
