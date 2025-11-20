

import { ExperienceDayCard } from '@/components/opex';
import Mock from '@/lib/mock-data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OurActivitiesLayout = async ({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}>) => {
    const { slug } = await params;
    
    const otherActivities = Mock.Activities.slice(0, 4).filter(activity => activity.slug !== slug);

    return (
        <>
            {children}
            <div className=" mx-auto max-w-7xl bg-white px-4 py-12 font-sans text-gray-800 sm:px-6 lg:px-8">
                <h2 className="mb-10 text-center text-3xl font-bold">Other Activities</h2>
                {/* <div className="my-8 flex items-center justify-end gap-4">
                    <button
                        aria-label="Previous item"
                        className="rounded-md border p-2 text-gray-600 transition-colors hover:bg-gray-100"
                    >
                        <ChevronLeft className="size-6" />
                    </button>
                    <button
                        aria-label="Next item"
                        className="rounded-md border p-2 text-gray-600 transition-colors hover:bg-gray-100"
                    >
                        <ChevronRight className="size-6" />
                    </button>
                </div> */}
                <div className='grid grid-cols-3 gap-10'>
                    {otherActivities.map((activity, index) => (
                        <ExperienceDayCard
                            key={index}
                            content={activity.content}
                            mainImageCaption={activity.mainImageCaption}
                            mainImages={activity.mainImages}
                            slug={activity.slug}
                            title={activity.title}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default OurActivitiesLayout