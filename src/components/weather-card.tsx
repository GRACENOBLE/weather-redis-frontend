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
  hourly: {}[];
  daily: {}[];
}) => {
  return (
    <>
      <div className="border rounded-2xl max-w-[600px] px-4 flex flex-col items-center mx-auto mb-4 py-4">
        <p>{location}</p>
        <p>~{Math.floor(parseInt(temperature) - 273.15)}°</p>
        <p>{description}</p>
        <ul className="flex gap-4 w-full overflow-x-clip">
          {hourly &&
            hourly.map(({ dt, weather, temp }) => (
              <div key={dt} className="flex flex-col items-center">
                <p>
                  {parseInt(timestamp.toDate(dt).toUTCString().slice(17, 19)) %
                    12}
                </p>
                <p>{weather?.icon}</p>
                <p>{Math.floor(parseInt(temp) - 273.15)}°</p>
              </div>
            ))}
        </ul>
        {/* <ul>{daily && daily.map(({}) => <div>daily forecast</div>)}</ul> */}
      </div>
      <div className="border rounded-2xl max-w-[600px] px-4 flex flex-col items-center mx-auto py-4">
        <ul>
          {daily &&
            daily.map(({ dt, weather, temp }) => (
              <div key={dt} className="flex items-center gap-4">
                <p>{timestamp.toDate(dt).toUTCString().split(",")[0]}</p>
                <p>{weather?.icon}</p>
                <p>{Math.floor(parseInt(temp?.min) - 273.15)}°</p>
                <p>{Math.floor(parseInt(temp?.max) - 273.15)}°</p>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
};

export default WeatherCards;
