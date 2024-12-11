import { WeatherIcons } from "@/constants";
import timestamp from "unix-timestamp";

const WeatherCards = ({
  location,
  temperature,
  description,
  hourly,
  daily,
}: {
  location: string;
  temperature: string;
  description: string;
  hourly: {
    dt: string;
    weather: {
      id: string;
      main: string;
      description: string;
      icon: string;
    }[];
    temp: string;
  }[];
  daily: {
    dt: string;
    weather: {
      id: string;
      main: string;
      description: string;
      icon: string;
    }[];
    temp: {
      day: string;
      min: string;
      max: string;
      night: string;
      eve: string;
      morn: string;
    };
  }[];
}) => {
  return (
    <>
      <div className="bg-black/10 rounded-xl w-[400px] px-4 flex flex-col items-center mx-auto mb-4 py-4">
        <p>{location}</p>
        <p className="font-extralight text-8xl pb-4">
          ~{Math.floor(parseInt(temperature) - 273.15)}°
        </p>
        <p className="">{description}</p>
        <ul className="flex gap-6 pb-6">
          <p>
            L : {daily && Math.floor(parseInt(daily[0].temp.min) - 273.15)}°
          </p>
          <p>
            H : {daily && Math.floor(parseInt(daily[0].temp.max) - 273.15)}°
          </p>
        </ul>
        <ul className="flex gap-5 w-full overflow-x-clip">
          {hourly &&
            hourly.map(({ dt, weather, temp }) => (
              <div key={dt} className="flex flex-col gap-2 items-center">
                <p className="text-sm">
                  {timestamp.toDate(parseInt(dt)).toUTCString().slice(17, 22)}
                </p>
                <p>
                  {
                    WeatherIcons.find(
                      (icon) =>
                        icon.dkey == weather[0]?.icon ||
                        icon.nkey == weather[0]?.icon
                    )?.value
                  }
                </p>
                <p>{Math.floor(parseInt(temp) - 273.15)}°</p>
              </div>
            ))}
        </ul>
      </div>

      <ul className="w-full bg-black/10 rounded-xl max-w-[600px] px-4 flex flex-col items-center py-4">
        {daily &&
          daily.map(({ dt, weather, temp }) => (
            <div
              key={dt}
              className="flex justify-between w-full items-center gap-4"
            >
              <p className="w-9">
                {timestamp.toDate(parseInt(dt)).toUTCString().split(",")[0]}
              </p>
              <p>
                {
                  WeatherIcons.find(
                    (icon) =>
                      icon.dkey == weather[0]?.icon ||
                      icon.nkey == weather[0]?.icon
                  )?.value
                }
              </p>
              <div className="flex items-center gap-4 py-2">
                <p>{Math.floor(parseInt(temp?.min) - 273.15)}°</p>
                <div className="h-1 w-40 bg-black/10 rounded-full" />
                <p>{Math.floor(parseInt(temp?.max) - 273.15)}°</p>
              </div>
            </div>
          ))}
      </ul>
    </>
  );
};

export default WeatherCards;
