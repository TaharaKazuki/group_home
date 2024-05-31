import { FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import Link from 'next/link';

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <div className="wrapper flex space-x-2">
        <div className="button group">
          <div className="icon bg-white group-hover:bg-blue-600">
            <FaFacebookF className="text-2xl text-blue-600" />
          </div>
          <span className="hidden group-hover:inline-block ml-2 text-blue-600">
            Facebook
          </span>
        </div>
      </div>
    </div>
  );
};

export default Socials;
