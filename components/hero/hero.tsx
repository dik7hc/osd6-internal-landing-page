import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center">
      <div
        className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/svg/backgroundLogo.svg)`,
        }}
      ></div>
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="font-bold text-gray-900">
          <div className="text-4xl tracking-widest">We Are</div>
          <div className="mt-1 text-2xl tracking-[0.2em]">GENERAL SERVICE</div>
        </h1>
        <div className="my-12">
          <Logo />
        </div>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet,
        </p>
        <p className="text-lg text-gray-700">
          consectetur adipiscing elit.
        </p>
        <div className="mt-14 flex flex-col items-center">
          <ArrowDown strokeWidth={1} className='size-10 text-gray-800' />
          <span className='mt-2 font-semibold text-blue-600'>scroll down</span>
        </div>
      </div>
    </section>
  )
}


const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <Image
      src={"/svg/logo.svg"}
      alt="osd6 Logo"
      width={384}
      height={176}
      className={"scale-150 -mt-6" + className}
    />
  );
};
export default HeroSection