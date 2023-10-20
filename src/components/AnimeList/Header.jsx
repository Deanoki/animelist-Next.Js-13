import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="mx-5 py-5 flex justify-between items-center text-color-primary">
      <h1 className=" font-bold text-2xl ">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-xl text-sm hover:text-color-accent text-color-primary hover:underline transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
