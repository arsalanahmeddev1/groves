import Header from "@/components/Header";
import Banner from "@/components/Banner";
import AboutUs from "@/components/AboutUs";
import BookGeneralSlider from "@/components/BookGeneralSlider";
import FinestCuisine from "@/components/FinestCuisine";
import CurateSlider from "@/components/CurateSlider";
import Map from "@/components/Map";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <BookGeneralSlider />
      <FinestCuisine />
      <CurateSlider />
      <Map />
      <Footer />
    </>
  );
}
