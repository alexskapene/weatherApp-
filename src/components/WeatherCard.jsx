import { highQualityIcon } from "../utils/HinghQualityIcons";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  // Toutes les heures du jour
  const todayHours = weather.forecast.forecastday[0].hour;

  // Filtrer uniquement certaines heures clés
  const keyHours = todayHours.filter((hour) => {
    const h = new Date(hour.time).getHours();
    return [6, 9, 12, 15, 18, 21].includes(h); // 6AM, 9AM, 12PM, 3PM, 6PM, 9PM
  });

  return (
    <section className="w-[60%] h-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-textPrimary text-5xl font-bold">
            {weather.location?.name}
          </h1>
          <span className="mt-2 font-thin text-textMuted text-xl">
            {weather.location?.country}
          </span>
          <h1 className="text-textPrimary text-6xl font-bold mt-10">
            {Math.round(weather.current?.temp_c)}{" "}
            <span className="font-light">°C</span>
          </h1>
        </div>
        <img
          src={highQualityIcon(weather.current?.condition?.code)}
          alt={weather.current?.condition?.text}
          className="w-[12rem]"
        />
      </div>

      <div className="bg-bgCard p-8 mt-8 rounded-xl">
        <h3 className="text-textMuted font-semibold">TODAY'S FORECAST</h3>
        <ul className="flex justify-between items-center mt-4">
          {keyHours.map((hour, index) => {
            const time = new Date(hour.time).toLocaleTimeString("en-US", {
              hour: "numeric",
              hour12: true,
            });

            return (
              <li
                key={index}
                className="flex flex-col justify-center items-center border-r border-bgCardSoft pr-5 space-y-4"
              >
                <h3 className="font-light text-textMuted text-sm">{time}</h3>
                <img
                  src={highQualityIcon(hour.condition.code)}
                  alt={hour.condition.text}
                  className="w-10 h-10 object-cover"
                />
                <h3 className="text-2xl font-semibold">
                  {Math.round(hour.temp_c)}
                  <span className="font-thin">°C</span>
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
