import car from "@/public/images/bgCar.png";
import Image from "next/image";
import Listings from "./auctions/Listings";
import SearchFilterBox from "./auctions/SearchFilterBox";

export default function Home() {
  return (
    <>
      <div>
        <Image
          src={car}
          alt="car zone"
          className=" w-[100%] h-[600px] object-cover object-bottom"
          priority
        />
        <div className="absolute top-[450px] p-10 flex flex-col justify-between w-full">
          <div>
            <h2 className="text-5xl font-bold uppercase text-white mb-3">
              Let&apos;s Find  your perfect match 
            </h2>
          </div>
          <div>
            <SearchFilterBox />
          </div>
        </div>
      </div>
      <main className="mx-auto px-6 pt-3">
        <div className="container mt-5 mx-auto mb-5">
          <Listings />
        </div>
      </main>
    </>
  );
}
