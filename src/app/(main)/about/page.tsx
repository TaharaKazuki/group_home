import Image from 'next/image';

const AboutPage = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div>Image</div>
          <div>Text</div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
