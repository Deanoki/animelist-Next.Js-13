"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handlerSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const keyword = searchRef.current.value;
      if (keyword.trim() !== "") {
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div className="relative">
      <input type="text" placeholder="Cari Anime..." className="p-2 rounded w-full" ref={searchRef} onKeyDown={handlerSearch} />
      <button className="absolute top-2 end-1" onClick={handlerSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
