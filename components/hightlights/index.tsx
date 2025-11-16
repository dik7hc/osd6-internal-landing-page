import React from 'react';
import {
    ClipboardList,
    Spline,
    Network,
    DatabaseBackup,
    MapPin,
    ArrowRight
} from 'lucide-react';

const servicesData = [
    {
        icon: ClipboardList,
        title: 'Planning',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: Spline,
        title: 'Inbound Control',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: Network,
        title: 'Data Analysis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: DatabaseBackup,
        title: 'Master Data',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: MapPin,
        title: 'Logistics Projects',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
                    {servicesData.map((service) => (
                        <div
                            key={service.title}
                            className="flex flex-col bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
                        >
                            {/* Icon */}
                            <service.icon
                                className="size-12 text-blue-600"
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />

                            {/* Content - pushed to the bottom */}
                            <div className="mt-auto pt-10">
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