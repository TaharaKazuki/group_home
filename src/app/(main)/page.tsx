'use client';

import Image from 'next/image';
import Link from 'next/link';

import FlowerImg from '../../components/img/home/flower.jpg';

const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute lg:bottom-32 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">IXIA</h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              GROUP HOME
            </p>
            <Link href="/contact" className="btn mb-[30px]">
              お問い合わせはこちら
            </Link>
          </div>
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <div className="relative lg:-right-40 lg:-top-72 overflow-hidden">
              <Image src={FlowerImg} alt="sample" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
