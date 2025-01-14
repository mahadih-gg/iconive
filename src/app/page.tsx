import Image from "next/image";
import InfoSection from "./_utils/Info__Section";
import Categories__Section from "./_utils/Categories__Section";
import Best__Selling__Products from "./_utils/Best__Selling__Products";
import New__Arrivals__Products from "./_utils/New___Arrivals__Products";
import Wholesallers__Section from "./_utils/Wholesallers__Section";
import Hair__Replacement__Section from "./_utils/Hair-Replacement/Hair__Replacement__Section";

export default function Home() {
  return (
    <main>
      <div>
        <Image className="w-full object-contain" src="/banner.jpg" alt="iconive" width={1000} height={1000} />
      </div>
      <InfoSection />
      <Categories__Section /> 
      <Best__Selling__Products />   
      <New__Arrivals__Products /> 
      <Wholesallers__Section /> 
      <Hair__Replacement__Section />
    </main>
  );
}
