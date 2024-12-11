import React from "react";
import {Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudMoon, CloudRain, CloudSun, Cloudy, Moon, Snowflake, Sun} from "lucide-react"

export const WeatherIcons: {
  dkey: string;
  nkey: string;
  value: React.ReactElement;
}[] = [
  {
    dkey: "01d",
    nkey: "",
    value: <Sun />,
  },
  {
    dkey: "",
    nkey: "01n",
    value: <Moon />,
  },
  {
    dkey: "02d",
    nkey: "02n",
    value: <CloudSun />,
  },
  {
    dkey: "03d",
    nkey: "",
    value: <Cloudy />,
  },
  {
    dkey: "",
    nkey: "03n",
    value: <CloudMoon />,
  },
  {
    dkey: "04d",
    nkey: "",
    value: <Cloud />,
  },
  {
    dkey: "",
    nkey: "04n",
    value: <CloudMoon />,
  },
  {
    dkey: "09d",
    nkey: "09n",
    value: <CloudRain />,
  },
  {
    dkey: "10d",
    nkey: "10n",
    value: <CloudDrizzle />,
  },
  {
    dkey: "11d",
    nkey: "11n",
    value: <CloudLightning />,
  },
  {
    dkey: "13d",
    nkey: "13n",
    value: <Snowflake />,
  },
  {
    dkey: "50d",
    nkey: "50n",
    value: <CloudFog />,
  },
];
