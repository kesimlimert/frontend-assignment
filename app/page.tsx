import { Hero } from "@/components/hero";
import { Team } from "@/components/team";
import { References } from "@/components/references";

export default function Home() {
  return (
    <div className="max-w-[1118px] mx-auto px-6 md:px-0">
      <Hero />
      <Team />
      <References />
    </div>
  );
}
