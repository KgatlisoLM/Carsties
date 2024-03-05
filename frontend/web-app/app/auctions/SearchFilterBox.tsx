"use client";

import React from "react";
import Search from "./Search";
import Filters from "./Filters";

function SearchFilterBox() {
  return (
    <div className="border-2 shadow-lg rounded-md bg-white p-5">
      <div className="w-full">
        {/* <div className="flex w-full mb-3">
          <h2 className="text-2xl font-semibold">Discover</h2>

        </div> */}
        <div className="flex items-center gap-x-5">
          <div className="mt-2">
            <Filters />
          </div>
          <div className="w-full mb-2">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilterBox;
