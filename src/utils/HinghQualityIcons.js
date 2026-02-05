import Cloud from "../assets/images/weather-forecast.png";
import Rain from "../assets/images/nuages-et-soleil.png";
import Sun from "../assets/images/soleil1.png";
import Snow from "../assets/images/soleil.png";

export const weatherIconMap = {
  1000: Sun,
  1003: Cloud,
  1006: Cloud,
  1009: Cloud,

  1063: Rain,
  1180: Rain,
  1183: Rain,
  1186: Rain,
  1189: Rain,

  1114: Snow,
  1117: Snow,
};

export function highQualityIcon(icon) {
  return weatherIconMap[icon] || Sun; // Default to null if code not found
}
