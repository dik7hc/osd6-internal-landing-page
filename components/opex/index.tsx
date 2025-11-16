import React from 'react';
import { ArrowRight } from 'lucide-react';

const activitiesData = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60',
        title: 'TransPlan Hub\nExperience Day',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=60',
        title: 'Welcome\nMA/LO Visit',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60',
        title: 'Fine Distribution\nProject Sharing',
    },
];

const TeamActivities = () => {
    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        Team Activities
                    </h2>
                </div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {activitiesData.map((activity) => (
                        <div key={activity.title} className="flex flex-col">
                            <div className="aspect-w-4 aspect-h-3">
                                <img
                                    src={activity.imageUrl}
                                    alt={activity.title.replace('\n', ' ')}
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="flex grow items-center justify-center bg-gray-100 p-8">
                                <h3 className="whitespace-pre-line text-center text-2xl font-bold leading-tight text-gray-900">
                                    {activity.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* "See More" Button */}
                <div className="mt-16 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center border border-sky-600 px-6 py-2.5 font-semibold text-sky-600 transition-colors duration-300 hover:bg-sky-50"
                    >
                        <span>See More</span>
                        <ArrowRight className="ml-2 size-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TeamActivities;