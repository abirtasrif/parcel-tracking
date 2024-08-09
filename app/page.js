import Image from "next/image";

export default function Home() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden sm:mt-10 sm:flex lg:mt-6"></div>
            <h1 className="mt-12 text-4xl font-bold tracking-tight text-gray-900 sm:mt-5 sm:text-6xl">
              <span className="text-indigo-700">Effortlessly</span> Track your
              parcel from any provider
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Select from below
            </p>
            <div className="mt-5 flex items-center gap-x-3">
              <a
                href="/dhl"
                className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                DHL
              </a>
              <a
                href="/fedex"
                className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                FedEx
              </a>
              <a
                href="/ups"
                className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                UPS
              </a>
              <a
                href="/chronopost"
                className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Chronopost
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className=" w-full bg-gray-50 object-cover h-full lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55"
            alt=""
            height={1000}
            width={600}
          />
        </div>
      </div>
    </div>
  );
}
