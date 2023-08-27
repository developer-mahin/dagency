import Banner from "@/components/Home/Banner/Banner";
import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Slider from "@/components/Home/Slider/Slider";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Slider />
      <Newsletter />
    </main>
  );
}
