import Image from 'next/image';
import AboutImage from '../../../components/img/about/about.jpg';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left">
          <div className="flex-1 max-h-72 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <Image src={AboutImage} alt="sample" />
          </div>
          <div className="flex-1 pt-10 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-2xl">私たちについて</h1>
            <p>
              サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              サンプルサンプルサンプルサンプルサンプル
            </p>
            <br />
            <br />
            <p>
              サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              サンプルサンプルサンプルサンプルサンプル
            </p>
            <br />
            <br />
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
