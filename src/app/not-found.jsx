"use client";

const { FileSearch } = require("@phosphor-icons/react");
const { default: Link } = require("next/link");

const page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-4">
        <div className="flex justify-center items-center gap-2">
          <FileSearch size={60} className="text-color-primary w-17" />
          <h1 className="text-color-primary md:text-4xl text-xl">Halaman Tidak Ditemukan</h1>
        </div>
        <Link href="/" className="text-color-primary text-xl underline hover:text-color-accent transition-all">
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default page;
