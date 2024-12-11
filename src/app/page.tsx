import WeatherForm from "@/components/foms/weather-form";

const page = () => {
  return (
    <main className="h-full bg-[url('/images/room.jpg')] bg-cover bg-right md:bg-center">
      <WeatherForm />
    </main>
  );
};

export default page;
