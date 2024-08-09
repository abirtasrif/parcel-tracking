import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative bg-white">
      <Navbar inHome="true" />
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 mt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-[16.65rem] 2xl:pb-[22rem] lg:pt-16 xl:col-span-6 relative">
          <div className="mx-auto max-w-2xl lg:mx-0 z-20">
            <h1 className="sm:mt-20 lg:mt-6 2xl:mt-16 font-bold tracking-tight text-gray-900 sm:leading-[4.5rem] text-6xl">
              <span className="text-indigo-700">Effortlessly</span> Track your
              parcel from any provider
            </h1>
          </div>
          <Image
            src="/arrow.svg"
            alt="my_svg_arrow"
            width={300}
            height={300}
            className="absolute right-[13rem] top-[3rem] z-10 opacity-10"
            layout="responsive"
          />
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className=" w-full bg-gray-50 object-cover h-full lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55"
            alt=""
            height={1000}
            width={600}
            priority
          />
        </div>
      </div>
    </div>
  );
}
