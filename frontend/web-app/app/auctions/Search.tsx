"use client";
import { useParamsStore } from "@/hooks/useParamsStore";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const setParams = useParamsStore((state) => state.setParams);
  const setSearchValue = useParamsStore((state) => state.setSearchValue);
  const searchValue = useParamsStore((state) => state.searchValue);
  const reset = useParamsStore((state) => state.reset);

  const onChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const search = () => {
    if (pathname !== "/") router.push("/");
    setParams({ searchTerm: searchValue });
  };

  return (
    <div className="flex w-full items-center border-2 border-gray-300  py-2 shadow-sm rounded-full">
      <input
        onChange={onChange}
        onKeyDown={(e: any) => {
          if (e.key === "Enter") search();
        }}
        type="text"
        value={searchValue}
        placeholder="Search for cars by make, model or color"
        className="input-custom text-sm text-gray-600"
      />

      <button onClick={search}>
        <FaSearch
          size={34}
          className="bg-red-600 text-white p-2 cursor-pointer mx-2 rounded-full"
        />
      </button>

      {searchValue !== "" ? (
        <button onClick={reset}>
          <FaXmark
            size={34}
            className="bg-red-600 text-white p-2 cursor-pointer mx-2 rounded-full"
          />
        </button>
      ) : null}
    </div>
  );
}

export default Search;
