import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const servicesData = [
    {
        icon: '/svg/ourServicesIcons/planning.svg',
        title: 'Planning',
        description: 'Optimizing your supply chain flow with accurate demand planning and timely source planning.',
    },
    {
        icon: '/svg/ourServicesIcons/inboundControl.svg',
        title: 'Inbound Control',
        description: 'Managing the entire process of goods, from shipment tracking to raising Istar and handling goods receive.',
    },
    {
        icon: '/svg/ourServicesIcons/dataAnalysis.svg',
        title: 'Data Analysis',
        description: 'Transform complex operational data into actional insights, helping you identify inefficiencies and make data-driven decisions for continuous improvement.',
    },
    {
        icon: '/svg/ourServicesIcons/masterData.svg',
        title: 'Master Data',
        description: 'Establish, maintain, and govern a reliable foundation of material data, guaranteeing a consistent and stable operations work flow.',
    },
    {
        icon: '/svg/ourServicesIcons/logisticsProjects.svg',
        title: 'Logistics Projects',
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
                        <div
                            key={service.title}
                            className="flex  relative flex-col bg-white p-8 transition-shadow duration-300 hover:shadow-lg group hover:border hover:border-bosch_blue"
                        >
                            <div className='h-3 w-full hidden inset-0 bg-bosch_blue absolute group-hover:block'></div>
                            {/* Icon */}
                            <Image
                                src={service.icon}
                                alt={`${service.title} icon`}
                                width={48}
                                height={48}
                                quality={20}
                                priority={false}
                                className={cn({ "h-12": index == 4 || index == 0 })}
                            />

                            {/* Content - pushed to the bottom */}
                            <div className="pt-10">
                                <div className="flex items-start justify-between">
                                    <h3 className="pr-4 text-xl font-medium leading-tight text-gray-900">
                                        {service.title}
                                    </h3>
                                    <a href="#" className="mt-1 shrink-0 text-blue-600 hover:text-blue-700">
                                        <span className="sr-only">Learn more about {service.title}</span>
                                        <ArrowRight className="size-6" aria-hidden="true" />
                                    </a>
                                </div>
                                <p className="mt-4 text-sm text-gray-500">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    );
};

export default Highlights;