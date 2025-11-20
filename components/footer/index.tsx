import Image from 'next/image';
const footerNavigation = {
    services: [
        { name: 'Planning', href: '#' },
        { name: 'Inbound Control', href: '#' },
        { name: 'Data Analysis', href: '#' },
        { name: 'Master Data', href: '#' },
        { name: 'Logistics Projects', href: '#' },
    ],
    team: [
        { name: 'Organization Chart', href: '#' },
        { name: 'Team Activities', href: '#' },
    ],
}
const Footer = () => {
    return (<>
        <footer className="bg-gray-300" >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

                <Image src={'/svg/logoGS.svg'} alt='General Service Logo' width={250} height={50} className='scale-105'/>

                <div className="grid grid-cols-2 gap-8 py-7 text-right md:grid-cols-4">
                    {/* Single Link: Home Page */}
                    <div>
                        <a href="#" className=" font-bold text-black hover:underline">
                            Home Page
                        </a>
                    </div>

                    {/* Single Link: OKR Status */}
                    <div>
                        <a href="#" className=" font-bold text-black hover:underline">
                            OKR Status
                        </a>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-4">
                        <h3 className=" font-bold text-black">Services</h3>
                        <ul role="list" className="space-y-3">
                            {footerNavigation.services.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className=" text-gray-700 hover:text-black hover:underline">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Team Column */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-black">Our Team</h3>
                        <ul role="list" className="space-y-3">
                            {footerNavigation.team.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-sm text-gray-700 hover:text-black hover:underline">
                                        {item.name}
                                    </a>
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
