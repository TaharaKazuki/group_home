import { FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import Link from 'next/link';
import { text } from 'stream/consumers';

const socialLinks = [
  {
    href: 'https://www.facebook.com/',
    icon: (
      <FaFacebookF className="text-xl text-blue-600 group-hover:text-white" />
    ),
    hoverColor: 'group-hover:bg-blue-600',
    text: 'Facebook',
    textColor: 'text-blue-600',
  },
  {
    href: 'https://x.com/?lang=ja',
    icon: (
      <FaXTwitter className="text-xl text-blue-400 group-hover:text-white" />
    ),
    hoverColor: 'group-hover:bg-blue-400',
    text: 'X(Twitter)',
    textColor: 'text-blue-400',
  },
  {
    href: 'https://www.instagram.com/',
    icon: (
      <FaInstagram className="text-xl text-pink-600 group-hover:text-white" />
    ),
    hoverColor: 'group-hover:bg-pink-600',
    text: 'Instagram',
    textColor: 'text-pink-600',
  },
];

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24 z-20">
      <div className="wrapper flex space-x-2">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="button group flex items-center"
          >
            <div
              className={`icon bg-white ${link.hoverColor} flex items-center justify-center`}
            >
              {link.icon}
            </div>
            <span
              className={`hidden group-hover:inline-block ml-2 ${link.textColor}`}
            >
              {link.text}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
