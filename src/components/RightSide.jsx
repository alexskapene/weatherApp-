import { highQualityIcon } from "../utils/HinghQualityIcons";

export default function RightSide({ weather }) {
  const daysWeather = weather.forecast.forecastday;

  // converting date to day name
  const getDayName = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "short",
    });
  };

  const todayTemp = weather.forecast.forecastday[0].day;
  console.log(todayTemp);

  return (
    <>
      <section className="w-[35%] bg-bgCard p-12 rounded-xl shadow-lg">
        <div>
          <h1 className="text-textMuted font-semibold">7-DAYS FOR CAST</h1>
          <ul className="space-y-10 mt-8">
            {daysWeather.map((day) => (
              <div
                key={day.id}
                className="flex justify-between items-center pb-4  border-b border-bgCardSoft"
              >
                <h3 className="text-textMuted font-light">
                  {getDayName(day.date)}
                </h3>
                <img
                  src={highQualityIcon(day.day.condition.code)}
                  alt={`image ${day?.condition?.text}`}
                  className="w-5 h-5 object-cover"
                />
                <h2 className=" text-textSecondary">{day?.condition?.text}</h2>
                <p className="font-bold">
                  {Math.round(todayTemp.mintemp_f)}/
                  <span className="font-light">
                    {Math.round(todayTemp.maxtemp_f)}
                  </span>
                </p>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
