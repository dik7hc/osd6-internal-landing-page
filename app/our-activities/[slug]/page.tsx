import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Mock from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export interface ActivityData {
    slug: string;
    title: string;
    date: string;
    author: string;
    mainImages: string[];
    mainImageCaption: string;
    content: string[];
    galleryImages?: string[];
}

interface ActivitiesPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const getActivityBySlug = (slug: string) => {
    return Mock.Activities.find(a => a.slug.trim() === slug)
}

export async function generateMetadata({ params }: ActivitiesPageProps): Promise<Metadata> {
    const { slug } = await params;
    const activity = getActivityBySlug(slug);

    if (!activity) {
        return {
            title: 'Activity | SD6 | Bosch Việt Nam',
        };
    }

    return {
        title: `${activity.title} | SD6 | Bosch Việt Nam`,
    };
}

const PageBreadCrumb = ({ title }: { title: string }) => {
    return (<Breadcrumb className="mb-4">
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/our-activities">Our Activities</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>)
}

const ServiceHighlightPage = async ({ params }: ActivitiesPageProps) => {
    const { slug } = await params;

    const activity = getActivityBySlug(slug)

    if (!activity) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-7xl bg-white px-4 py-12 font-sans text-gray-800 sm:px-6 lg:px-8">
            <PageBreadCrumb title={activity.title} />
            <div className="mb-8 flex items-start justify-between">
                <h1 className="text-5xl font-bold">{activity.title}</h1>
            </div>
            <div className="leading-relaxed text-gray-700 ">
                <div className="space-y-4">
                    {activity.content.map((paragraph, index) => (
                        <>
                            <p key={index}>{paragraph}</p>
                            {index == 0 && <div className="mb-4">
                                <div className={cn("max-w-3xl mx-auto", {
                                    "max-w-7xl": activity.mainImages.length >= 3
                                })}>
                                    {activity.mainImages.length >= 3 ? (
                                        <div className="grid grid-cols-2 gap-4 ">
                                            {/* First column - large image with row span 2 */}
                                            <div className="row-span-2">
                                                <Image 
                                                    src={activity.mainImages[0]} 
                                                    width={1920} 
                                                    height={1080} 
                                                    alt={`${activity.mainImageCaption} 1`} 
                                                    className="w-full h-full object-cover" 
                                                />
                                            </div>
                                            {/* Second column - two smaller images in 2 rows */}
                                            <div className="grid grid-cols-2 gap-4">
                                                {activity.mainImages.slice(1, activity.mainImages.length).map((image, imgIndex) => (
                                                    <Image 
                                                        key={imgIndex + 1}
                                                        src={image} 
                                                        width={1920} 
                                                        height={1080} 
                                                        alt={`${activity.mainImageCaption} ${imgIndex + 2}`} 
                                                        className="w-full h-full aspect-[4/3] object-cover flex-grow" 
                                                    />
                                                ))}
                                            
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={cn("grid gap-4", {
                                            "grid-cols-1": activity.mainImages.length == 1,
                                            "grid-cols-2": activity.mainImages.length == 2,
                                        })}>
                                            {activity.mainImages.map((image, imgIndex) => (
                                                <Image 
                                                    key={imgIndex}
                                                    src={image} 
                                                    width={1920} 
                                                    height={1080} 
                                                    alt={`${activity.mainImageCaption} ${imgIndex + 1}`} 
                                                    className="w-full h-auto aspect-[4/3] object-cover" 
                                                />
                                            ))}
                                        </div>
                                    )}
                                    
                                    <p className="mt-2 text-sm text-gray-500 text-center">{activity.mainImageCaption}</p>
                                </div>
                            </div>}
                        </>
                    ))}
                </div>
                <div className="clear-both"></div>
            </div>
            <div className="my-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                {activity.galleryImages?.map((image, index) => (
                    <div key={index} className="aspect-square bg-gray-200">
                        <img src={image} alt={`Gallery image ${index + 1}`} className="size-full object-cover" />
                    </div>
                ))}
            </div>
            <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-4 text-gray-600">
                <p>{activity.author}</p>
                <span className="shrink-0">Posted On: {activity.date}</span>

                {/* <div className="flex gap-4 text-gray-500">
                    {activity.hashtags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div> */}
            </div>

        </main>
    );
};

export default ServiceHighlightPage;