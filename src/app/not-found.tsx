import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="font-outfit flex h-screen flex-col items-center justify-center gap-6 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center rounded-2xl bg-white px-16 py-12 shadow-md">
        <p className="text-6xl font-bold text-gray-300">404 Error</p>
        <p className="mt-2 text-lg text-gray-300">Page not found</p>
        <Image
          src="/404error.svg"
          alt="404 error illustration"
          width={200}
          height={200}
          className="absolute bottom-[90%]"
        />
      </div>
      <Link
        href="/"
        className="font-outfit rounded-lg bg-black px-4 py-2 text-sm text-white hover:scale-105 hover:opacity-80"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
