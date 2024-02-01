import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    // Ensure the header has a higher z-index value to appear on top of the background video.
    // Adding 'bg-opacity-75 bg-black' for better visibility over the video if needed.
    <div className="flex justify-between items-start w-full py-6 sm:px-12 px-4 z-50 fixed top-0 left-0 right-0 bg-opacity-75 text-white">
      <Link className="flex align-top justify-start" href="/people">
        <p>PEOPLE</p>
      </Link>

      <Link className="ml-4" href="/">
        {/* <p className="text-2xl">
          <span className="logo-human">HUMAN</span>FILM
          <span className="logo-icon">&#174;</span>
        </p> */}
        <Image alt="logo" src={"/logo.svg"} width={200} height={50}></Image>
      </Link>

      <Link className="flex align-top justify-start" href="/connect">
        <p>CONNECT</p>
      </Link>
    </div>
  );
}
