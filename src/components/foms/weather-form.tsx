"use client";

import { Button } from "@/components/ui/button";
import { GetCurrentWeather } from "@/actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Container from "../Container";
import WeatherCards from "../weather-card";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const WeatherForm = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    const weather = await GetCurrentWeather();

    setWeatherData(weather);
  }

  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 pt-20">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <Input
                    placeholder="kampala"
                    {...field}
                    className=" flex-1 border-2 border-white/25 bg-white/25 backdrop-blur-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Get Weather</Button>
        </form>
      </Form>
      <Container>
        <div className="border-2 border-white/25 rounded-2xl w-fit p-4 mx-auto bg-slate-400/25 backdrop-blur-md text-white/75">
          <WeatherCards
            location={weatherData?.timezone}
            temperature={weatherData?.current?.temp}
            description={weatherData?.current?.weather[0]?.description}
            hourly={weatherData?.hourly}
            daily={weatherData?.daily}
          />
        </div>
      </Container>
    </section>
  );
};

export default WeatherForm;
