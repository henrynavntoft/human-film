import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    // Ensure the header has a higher z-index value to appear on top of the background video.
    // Adding 'bg-opacity-75 bg-black' for better visibility over the video if needed.
    <div className="flex justify-between items-center w-full p-4 z-50 fixed top-0 left-0 right-0 bg-opacity-75 text-white">
      <Link href="/humans">
        <p className="">HUMANS</p>
      </Link>

      <Link href="/">
        <p className="text-2xl">
          <span className="logo-human">HUMAN</span>FILM
          <span className="logo-icon">&#174;</span>
        </p>
      </Link>

      <Link href="/contact">
        <p className="">CONTACT</p>
      </Link>
    </div>
  );
}
