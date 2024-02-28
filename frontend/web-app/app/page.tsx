import car from "@/public/images/bgCar.png";
import Image from "next/image";
import Listings from "./auctions/Listings";
import Search from "./auctions/Search";
import SearchFilterBox from "./auctions/SearchFilterBox";

export default function Home() {
  return (
    <>
      <div className="">
        <Image
          src={car}
          alt="car zone"
          className=" w-[100%] h-[500px] object-cover object-center relative"
          priority
        />
        <div className="absolute top-32 p-10">
          <h2 className="text-7xl font-bold uppercase text-white">
            Let's Find
          </h2>
          <h2 className="text-7xl font-bold uppercase text-white">
            your perfect match
          </h2>
          <h2 className="text-7xl font-bold uppercase text-white">
            at Auction
          </h2>
          <button className="bg-red-500 text-white font-bold py-2 px-4 border-none rounded-full mt-10">
            Let's Find
          </button>
        </div>
      </div>
      <main className="mx-auto px-6 pt-3">
        <SearchFilterBox/>
        <div className="container mt-5 mx-auto mb-5">
          <Listings/>
        </div>
      </main>
    </>
  );
}
