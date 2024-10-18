import Logo from "@/public/RealEstate.png";
import Image from "next/image";

export function Footer() {
  return (
    <div className="bg-primary flex justify-center items-center mt-28 text-white py-16">
      <Image src={Logo} alt="logo" width={120} height={63} />
    </div>
  );
}
