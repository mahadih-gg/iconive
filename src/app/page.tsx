import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <Image className="w-full object-contain" src="/banner.jpg" alt="iconive" width={1000} height={1000} />
      </div>
    </div>
  );
}
