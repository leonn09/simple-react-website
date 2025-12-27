import weather from "../../data/weather.json";
import forecast from "../../data/forecast.json";

const WeatherDashboard = () => {
  return (
    /*
      Article is appropriate because this dashboard
      is a standalone widget that could be reused
      independently of the rest of the page.
    */
    <article
      className="
        lg:h-137
        transition-all duration-300 ease-out
        opacity-0 translate-y-2
        animate-[fadeIn_300ms_ease-out_forwards]
      "
    >
      {/* Section heading */}
      <h2 className="text-xl text-current/70 text-center">
        Weather Dashboard
      </h2>

      {/*
        Main container for current weather + forecast
        Stacks vertically on mobile, horizontally on larger screens
      */}
      <div
        className="
          my-4
          flex flex-col md:flex-row md:px-4
          border border-zinc-200/50 dark:border-zinc-500/50
          rounded-xl
          shadow-md
        "
      >
        {/* ================= CURRENT WEATHER ================= */}
        <div
          className="
            w-85 h-115
            py-2 pl-10
            grid grid-cols-2
          "
        >
          {/*
            Weather icon placeholder.
            At this stage, it's okay that this is a raw OpenWeather code
            (e.g., "04n"). This is intentional and will be mapped later.
          */}
          <p className="row-span-2 self-center text-center">
            {weather.weather[0].icon}
          </p>

          {/* Main weather condition */}
          <p className="self-end font-semibold">
            {weather.weather[0].main}
          </p>

          {/* Condition description */}
          <p className="self-start text-current/70 text-sm font-light">
            {weather.weather[0].description}
          </p>

          {/* Temperature */}
          <p className="row-span-2 self-center text-[2.8rem] text-end">
            &deg;{weather.main.temp}
          </p>

          <p className="self-end text-sm font-bold tracking-wide">C</p>

          {/* Location */}
          <p className="self-start text-xs font-semibold tracking-wide uppercase opacity-70">
            {weather.name} {weather.sys.country}
          </p>

          {/* Weather metadata */}
          <p className="self-center text-end font-medium">Pressure:&nbsp;</p>
          <p className="self-center text-start font-light">
            {weather.main.pressure}
          </p>

          <p className="self-center text-end font-medium">Humidity:&nbsp;</p>
          <p className="self-center text-start font-light">
            {weather.main.humidity}
          </p>

          <p className="self-center text-end font-medium">Sea Level:&nbsp;</p>
          <p className="self-center text-start font-light">
            {weather.main.sea_level}
          </p>

          <p className="self-center text-end font-medium">Visibility:&nbsp;</p>
          <p className="self-center text-start font-light">
            {weather.visibility}
          </p>

          <p className="self-center text-end font-medium">Wind Speed:&nbsp;</p>
          <p className="self-center text-start font-light">
            {weather.wind.speed}
          </p>

          <p className="self-center text-end font-medium">
            Wind Direction:&nbsp;
          </p>
          <p className="self-center text-start font-light">
            &deg;{weather.wind.deg}
          </p>
        </div>

        {/* ================= FORECAST SNAPSHOT ================= */}
        <div
          className="
            w-85 h-115
            py-2
            grid grid-cols-2
          "
        >
          {/*
            Forecast data is intentionally hard-coded
            to the first few entries from the OpenWeather
            forecast list for local development.
          */}

          <p className="row-span-2 self-center text-center">
            {forecast.list[0].weather[0].icon}
          </p>
          <p className="self-end">{forecast.list[0].dt_txt}</p>
          <p className="self-start font-medium">
            &deg;{forecast.list[0].main.temp}
          </p>

          <p className="row-span-2 self-center text-center">
            {forecast.list[1].weather[0].icon}
          </p>
          <p className="self-end">{forecast.list[1].dt_txt}</p>
          <p className="self-start font-medium">
            &deg;{forecast.list[1].main.temp}
          </p>

          <p className="row-span-2 self-center text-center">
            {forecast.list[2].weather[0].icon}
          </p>
          <p className="self-end">{forecast.list[2].dt_txt}</p>
          <p className="self-start font-medium">
            &deg;{forecast.list[2].main.temp}
          </p>

          <p className="row-span-2 self-center text-center">
            {forecast.list[3].weather[0].icon}
          </p>
          <p className="self-end">{forecast.list[3].dt_txt}</p>
          <p className="self-start font-medium">
            &deg;{forecast.list[3].main.temp}
          </p>

          <p className="row-span-2 self-center text-center">
            {forecast.list[4].weather[0].icon}
          </p>
          <p className="self-end">{forecast.list[4].dt_txt}</p>
          <p className="self-start font-medium">
            &deg;{forecast.list[4].main.temp}
          </p>
        </div>
      </div>
    </article>
  );
};

export default WeatherDashboard;
