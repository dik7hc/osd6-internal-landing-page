import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { servicesNavigation } from '@/lib/services-navigation';

const servicesData = [
    {
        ...servicesNavigation[2], // Master Data
        icon: '/svg/ourServicesIcons/masterData.svg',
        description: 'Establish, maintain, and govern a reliable foundation of material data, guaranteeing a consistent and stable operations work flow.',
    },
    {
        ...servicesNavigation[0], // Planning
        icon: '/svg/ourServicesIcons/planning.svg',
        description: 'Optimizing your supply chain flow with accurate demand planning and timely source planning.',
    },
    {
        ...servicesNavigation[1], // Inbound Control
        icon: '/svg/ourServicesIcons/inboundControl.svg',
        description: 'Managing the entire process of goods, from shipment tracking to raising Istar and handling goods receive.',
    },
    {
        ...servicesNavigation[3], // Data Analytics
        icon: '/svg/ourServicesIcons/dataAnalysis.svg',
        description: 'Transform complex operational data into actional insights, helping you identify inefficiencies and make data-driven decisions for continuous improvement.',
    },
    {
        ...servicesNavigation[4], // Logistics Projects
        icon: '/svg/ourServicesIcons/logisticsProjects.svg',
        description: 'Provide expertise to enhance your overall logistics capabilities and performance.',
    },
];

const Highlights = () => {
    return (
        <section >

            {/* Section Header */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Our Services
                </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
                {servicesData.map((service, index) => (
                    <Link href={service.pathname}
                        key={service.name}
                        className="flex  relative flex-col bg-white p-8 transition-shadow duration-300 hover:shadow-lg group hover:border hover:border-bosch_blue"
                    >
                        <div className='h-3 w-full hidden inset-0 bg-bosch_blue absolute group-hover:block'></div>
                        {/* Icon */}
                        <img
                            src={service.icon}
                            alt={`${service.name} icon`}
                            width={48}
                            height={48}
                            className={cn({ "h-12": index == 4 || index == 0 })}
                        />

                        {/* Content - pushed to the bottom */}
                        <div className="pt-10 flex flex-col justify-evenly">
                            <div className="flex items-start justify-between">
                                <h3 className="pr-4 text-xl font-medium leading-tight text-gray-900">
                                    {service.name}
                                </h3>
                                <Link href={service.pathname} className="mt-1 shrink-0 text-blue-600 hover:text-blue-700">
                                    <span className="sr-only">Learn more about {service.name}</span>
                                    <ArrowRight className="size-6" aria-hidden="true" />
                                </Link>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                                {service.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Highlights;