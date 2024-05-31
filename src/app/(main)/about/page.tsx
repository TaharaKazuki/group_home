import Image from 'next/image';
import AboutImage from '../../../components/img/about/about.jpg';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <Image src={AboutImage} alt="sample" />
          </div>
          <div className="flex-1 pt-36 pb-14 px-2 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-4xl font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2">
              私たちについて
            </h1>
            <p className="mb-12 max-w-full">
              サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              <b>サンプルサンプルサンプルサンプルサンプル</b>
              サンプルサンプルサンプルサンプルサンプル
              <br />
              <br />
              サンプルサンプルサンプルサンプルサンプル
              サンプルサンプルサンプルサンプルサンプル
              サンプルサンプルサンプルサンプルサンプル
            </p>
            <Link className="btn" href="/portfolio">
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
