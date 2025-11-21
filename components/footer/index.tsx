import Image from 'next/image';
import Link from 'next/link';
import { servicesNavigation } from '@/lib/services-navigation';

const footerNavigation = {
    services: servicesNavigation.map(service => ({
        name: service.name,
        href: service.pathname
    })),
    team: [
        { name: 'Organization Chart', href: '/#orgChart' },
        { name: 'Team Activities', href: '/our-activities' },
    ],
}
const Footer = () => {
    return (<>
        <footer className="bg-gray-300" >
            <div className="mx-auto flex max-w-7xl  justify-between px-4 py-3 sm:px-6 lg:px-8">

                <Image src={'/svg/logoGS.svg'} alt='General Service Logo' width={250} height={50} className='scale-105'/>

                <div className="grid grid-cols-2 gap-8 py-7 text-right md:grid-cols-3">
                    {/* Single Link: Home Page */}
                    <div>
                        <Link href="/" className=" font-bold text-black hover:underline">
                            Home Page
                        </Link>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-4">
                        <h3 className=" font-bold text-black">Services</h3>
                        <ul role="list" className="space-y-3">
                            {footerNavigation.services.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className=" text-gray-700 hover:text-black hover:underline">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Team Column */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-black">Team Activities</h3>
                        <ul role="list" className="space-y-3">
                            {footerNavigation.team.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-gray-700 hover:text-black hover:underline">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    </>
    );
};



export default Footer;
