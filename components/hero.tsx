import Image from "next/image";
import HeroImage from "@/public/HeroPic.jpg";
import { HomeSearch } from "./home-search";

export function Hero() {
  return (
    <div className="my-12 relative">
      <div className="w-full py-12 max-w-lg">
        <h1 className="text-3xl text-dark md:text-md-3xl lg:text-lg-3xl font-bold">
          Modern living for everyone
        </h1>
        <p className="text-subheader text-dark md:text-md-subheader pt-3 lg:text-lg-subheader">
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in Madrid and Barcelona more than 15
          years.
        </p>
      </div>
      <div className="absolute -right-14 top-0 hidden lg:block">
        <Image src={HeroImage} alt="Hero" width={600} height={550} />
      </div>
      <div className="absolute -bottom-[80px] left-0 right-0 z-10">
        <HomeSearch />
      </div>
    </div>
  );
}
