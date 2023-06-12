import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="hidden lg:block">
      <nav className="bottom-0 inset-x-0 bg-black flex justify-between text-sm text-white uppercase font-mono">
        <Link
          to="/"
          className="w-full block py-5 px-3 text-center hover:bg-white hover:text-black transition duration-300"
        >
          TOUR DATES
        </Link>

        <Link
          to="/bio"
          className="w-full block py-5 px-3 text-center hover:bg-white hover:text-black"
        >
          Bio
        </Link>

        <Link
          to="/photos"
          className="w-full block py-5 px-3 text-center hover:bg-white hover:text-black"
        >
          Photos
        </Link>

        <Link
          to="/music"
          className="w-full block py-5 px-3 text-center hover:bg-white hover:text-black"
        >
          Music
        </Link>
        <Link
          to="/videos"
          className="w-full block py-5 px-3 text-center hover:bg-white hover:text-black"
        >
          Videos
        </Link>
        <Link
          to="/shop"
          className="w-full block py-5 px-3 text-center hover:bg-white hover:text-black"
        >
          Shop
        </Link>
        <Link
          to="/contacts"
          className="w-full block py-5 px-3 text-center hover:bg-white hover:text-black"
        >
          Contacts
        </Link>
      </nav>
    </div>
  );
};

export default BottomNav;
