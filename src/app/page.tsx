import WeatherForm from "@/components/foms/weather-form";

const page = () => {
  return (
    <main className="h-screen bg-[url('/images/room.jpg')] bg-cover">
      <WeatherForm />
    </main>
  );
};

export default page;
