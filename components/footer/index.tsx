import Image from 'next/image';
import BackToTopBtn from '../back-to-top-btn';
import Link from 'next/link';

const Footer = () => {
    return (<>
        <footer className="bg-gray-300" >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <Image src={'/svg/logo.svg'} alt='General Service Logo' width={200} height={100} />

                <p className="mt-6 max-w-xs text-lg leading-relaxed text-gray-700">
                    We Engineer the Routes where <br /> Commerce Flows Freely
                </p>

            </div>
        </footer>
    </>
    );
};



export default Footer;

