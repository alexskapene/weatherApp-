import ImgWeather from "../assets/images/weather-forecast.png";
import Imgsoleil from "../assets/images/soleil.png";
export default function RightSide() {
  const daysWeather = [
    { id: 1, day: "Tue", image: ImgWeather, title: "Ranly", max: 37, min: 22 },
    { id: 2, day: "Wed", image: ImgWeather, title: "Ranly", max: 37, min: 21 },
    { id: 3, day: "Thu", image: Imgsoleil, title: "Sunny", max: 37, min: 21 },
    { id: 4, day: "Fri", image: ImgWeather, title: "Ranly", max: 37, min: 21 },
    { id: 5, day: "Sat", image: Imgsoleil, title: "Sunny", max: 37, min: 21 },
    { id: 5, day: "Sun", image: ImgWeather, title: "Ranly", max: 37, min: 21 },
    { id: 6, day: "Fri", image: ImgWeather, title: "Ranly", max: 37, min: 21 },
    { id: 7, day: "Sat", image: Imgsoleil, title: "Sunny", max: 37, min: 21 },
  ];
  return (
    <>
      <section className="w-[35%] bg-bgCard p-8 rounded-xl">
        <div>
          <h1 className="text-textMuted font-semibold">7-DAYS FOR CAST</h1>
          <ul className="space-y-6 mt-8">
            {daysWeather.map((day) => (
              <div
                key={day.id}
                className="flex justify-between items-center pb-4  border-b border-bgCardSoft"
              >
                <h3 className="text-textMuted font-light">{day.day}</h3>
                <img
                  src={day.image}
                  alt={`image ${day.title}`}
                  className="w-5 h-5 object-cover"
                />
                <h2 className=" text-textSecondary">{day.title}</h2>
                <p className="font-bold">
                  {day.min}/<span className="font-light">{day.max}</span>
                </p>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
