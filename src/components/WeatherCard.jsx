import ImgWeather from "../assets/images/weather-forecast.png";
import ImgNuageSoleil from "../assets/images/nuages-et-soleil.png";
import Imgsoleil1 from "../assets/images/soleil1.png";
import Imgsoleil from "../assets/images/soleil.png";

export default function WeatherCard({ weather }) {
  const hoursWeather = [
    { id: 1, title: "6:00 AM", image: ImgWeather, degre: 25 },
    { id: 2, title: "9:00 AM", image: Imgsoleil1, degre: 28 },
    { id: 3, title: "12:00 PM", image: ImgNuageSoleil, degre: 33 },
    { id: 4, title: "3:00 PM", image: ImgNuageSoleil, degre: 34 },
    { id: 5, title: "6:00 PM", image: ImgNuageSoleil, degre: 32 },
    { id: 5, title: "9:00 PM", image: Imgsoleil1, degre: 30 },
  ];

  return (
    <>
      <section className="w-[60%] h-auto">
        <div className="flex justify-between items-center ">
          <div>
            <h1 className="text-textPrimary text-5xl font-bold">
              {weather?.location?.name}
            </h1>
            <span className="mt-2 font-thin text-textMuted text-xl">
              {weather?.location?.country}
            </span>
            <h1 className="text-textPrimary text-6xl font-bold mt-10">
              {Math.round(weather?.current?.temp_c)}{" "}
              <span className="font-light">°C</span>
            </h1>
          </div>
          <img src={Imgsoleil} alt="image soleil" className="w-[10rem] " />
        </div>

        <div className=" bg-bgCard  p-8 mt-8 rounded-xl ">
          <h3 className="text-textMuted font-semibold">TODAYS FORECAST</h3>
          <ul className="flex justify-between items-center mt-4 ml-4 ">
            {hoursWeather?.map((weather) => (
              <div
                className="flex flex-col justify-center items-center border-r border-bgCardSoft pr-5 space-y-4"
                key={weather.id}
              >
                <h3 className="font-light text-textMuted text-sm">
                  {weather.title}
                </h3>
                <img
                  src={weather.image}
                  alt=""
                  className="w-10 h-10 object-cover"
                />
                <h3 className="text-2xl font-semibold">
                  {weather.degre}
                  <span className="font-thin">°C</span>
                </h3>
              </div>
            ))}
          </ul>
        </div>
        <div className=" bg-bgCard  py-16 mt-8 rounded-xl "></div>
      </section>
    </>
  );
}
