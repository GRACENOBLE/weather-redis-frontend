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
      <div className="border rounded-2xl max-w-[600px] px-4 flex flex-col items-center mx-auto mb-4">
        {location}
        {temperature}
        {description}
        <ul className="flex gap-4 w-full overflow-x-clip">
          {hourly &&
            hourly.map(({ dt, weather, temp }) => (
              <div key={dt} className="flex flex-col items-center">
                <p>{dt}</p>
                <p>{weather?.icon}</p>
                <p>{temp}</p>
              </div>
            ))}
        </ul>
        {/* <ul>{daily && daily.map(({}) => <div>daily forecast</div>)}</ul> */}
      </div>
      <div className="border rounded-2xl max-w-[600px] px-4 flex flex-col items-center mx-auto">
        <ul>
          {daily &&
            daily.map(({ dt, weather, temp }) => (
              <div key={dt} className="flex items-center gap-4">
                <p>{dt}</p>
                <p>{weather?.icon}</p>
                <p>{temp?.min}</p>
                <p>{temp?.max}</p>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
};

export default WeatherCards;
