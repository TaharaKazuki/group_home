import { FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import Link from 'next/link';

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <div className="wrapper flex space-x-2">
        <Link
          href="https://www.facebook.com/"
          className="button group flex items-center"
        >
          <div className="icon bg-white group-hover:bg-blue-600 flex items-center justify-center">
            <FaFacebookF className="text-xl text-blue-600 group-hover:text-white" />
          </div>
          <span className="hidden group-hover:inline-block ml-2 text-blue-600">
            Facebook
          </span>
        </Link>
        <Link
          href="https://x.com/?lang=ja"
          className="button group flex items-center"
        >
          <div className="icon bg-white group-hover:bg-blue-400 flex items-center justify-center">
            <FaXTwitter className="text-xl text-blue-400 group-hover:text-white" />
          </div>
          <span className="hidden group-hover:inline-block ml-2 text-blue-400">
            X(Twitter)
          </span>
        </Link>
        <Link
          href="https://www.instagram.com/"
          className="button group flex items-center"
        >
          <div className="icon bg-white group-hover:bg-pink-600 flex items-center justify-center">
            <FaInstagram className="text-xl text-pink-600 group-hover:text-white" />
          </div>
          <span className="hidden group-hover:inline-block ml-2 text-pink-600">
            Instagram
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Socials;
