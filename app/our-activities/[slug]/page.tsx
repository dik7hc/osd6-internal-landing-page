import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { notFound } from 'next/navigation';

interface ActivityData {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    mainImage: string;
    mainImageCaption: string;
    content: string[];
    galleryImages: string[];
    hashtags: string[];
}

const activitiesData: ActivityData[] = [
    {
        slug: 'team-building-2024',
        title: 'Team Building 2024',
        description: 'GS/OSD3 & GS/OSD6 Vietnam teams had an amazing team building experience in Da Lat, strengthening bonds and creating lasting memories.',
        date: 'October 15, 2024',
        author: 'HR Team',
        mainImage: 'https://placehold.co/400x300/e2e8f0/94a3b8?text=Team+Building',
        mainImageCaption: 'Team building activities in Da Lat',
        content: [
            'Our annual team building event brought together members from GS/OSD3 and GS/OSD6 Vietnam teams for three days of collaboration, adventure, and bonding in the beautiful city of Da Lat.',
            'The event featured various activities including outdoor challenges, team workshops, and cultural experiences. Team members participated in problem-solving exercises that enhanced communication and collaboration skills.',
            'Evening activities included team dinners and recreational games, allowing colleagues to connect on a personal level and build stronger working relationships.',
            'The highlight of the trip was a collaborative project where teams worked together to develop innovative solutions for improving our logistics operations. The creativity and teamwork displayed were truly impressive.',
            'This team building event reinforced our commitment to fostering a positive work environment and building a strong, united team capable of achieving our organizational goals.',
        ],
        galleryImages: [
            'https://placehold.co/300x300/e2e8f0/94a3b8?text=Activity+1',
            'https://placehold.co/300x300/e2e8f0/94a3b8?text=Activity+2',
            'https://placehold.co/300x300/e2e8f0/94a3b8?text=Activity+3',
            'https://placehold.co/300x300/e2e8f0/94a3b8?text=Activity+4',
        ],
        hashtags: ['#TeamBuilding', '#OSD6', '#Company Culture'],
    },
    {
        slug: 'logistics-innovation-workshop',
        title: 'Logistics Innovation Workshop',
        description: 'A comprehensive workshop focusing on innovative approaches to modern logistics challenges and digital transformation.',
        date: 'September 20, 2024',
        author: 'Innovation Team',
        mainImage: 'https://placehold.co/400x300/e2e8f0/94a3b8?text=Workshop',
        mainImageCaption: 'Workshop participants during brainstorming session',
        content: [
            'The Logistics Innovation Workshop brought together experts and team members to explore cutting-edge solutions in supply chain management and digital logistics.',
            'Participants engaged in interactive sessions covering topics such as AI-driven demand forecasting, automated warehouse management, and sustainable logistics practices.',
            'The workshop featured case studies from leading companies in the logistics industry, providing valuable insights into best practices and emerging trends.',
            'Breakout sessions allowed teams to develop and present innovative ideas for improving our current logistics operations, with several proposals selected for implementation.',
            'The event concluded with a commitment to continue fostering innovation and staying at the forefront of logistics technology and practices.',
        ],
        galleryImages: [
            'https://placehold.co/300x300/e2e8f0/94a3b8?text=Workshop+1',
            'https://placehold.co/300x300/e2e8f0/94a3b8?text=Workshop+2',
            'https://placehold.co/300x300/e2e8f0/94a3b8?text=Workshop+3',
            'https://placehold.co/300x300/e2e8f0/94a3b8?text=Workshop+4',
        ],
        hashtags: ['#Innovation', '#Logistics', '#DigitalTransformation'],
    },
    {
        slug: 'sustainability-initiative-launch',
        title: 'Sustainability Initiative Launch',
        description: 'Launching our comprehensive sustainability program focused on reducing environmental impact across all logistics operations.',
        date: 'August 10, 2024',
        author: 'Sustainability Team',
        mainImage: 'https://placehold.co/400x300/e2e8f0/94a3b8?text=Sustainability',
        mainImageCaption: 'Launch event for sustainability initiative',
        content: [
            'We are proud to announce the launch of our comprehensive sustainability initiative aimed at reducing our environmental footprint and promoting eco-friendly practices throughout our logistics operations.',
            'The program includes initiatives such as optimizing transportation routes to reduce emissions, implementing energy-efficient warehouse practices, and partnering with environmentally conscious suppliers.',
            'Our team has set ambitious targets for reducing carbon emissions by 30% over the next three years, with measurable milestones and regular progress reviews.',
            'Employee engagement is a key component of this initiative, with training programs and incentives designed to encourage sustainable practices at all levels of the organization.',
            'This sustainability initiative reflects our commitment to corporate social responsibility and our belief that business success and environmental stewardship go hand in hand.',
        ],
        galleryImages: [
            'https://placehold.co/300x300/e2e8f0/94a3b8?text=Sustainability+1',
            'https://placehold.co/300x300/e2e8f0/94a3b8?text=Sustainability+2',
            'https://placehold.co/300x300/e2e8f0/94a3b8?text=Sustainability+3',
            'https://placehold.co/300x300/e2e8f0/94a3b8?text=Sustainability+4',
        ],
        hashtags: ['#Sustainability', '#GreenLogistics', '#CSR'],
    },
];

interface ServiceHighlightPageProps {
    params: {
        slug: string;
    };
}

const PageBreadCrumb = ({ formattedSlug }: { formattedSlug : string}) => {
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
                <BreadcrumbPage>{formattedSlug}</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>)
}

const ServiceHighlightPage = ({ params }: ServiceHighlightPageProps) => {
    const { slug } = params;
    
    // Find the activity data matching the slug
    const activity = activitiesData.find(a => a.slug === slug);
    
    // If activity not found, show 404
    if (!activity) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-7xl bg-white px-4 py-12 font-sans text-gray-800 sm:px-6 lg:px-8">
            <PageBreadCrumb formattedSlug={activity.title}/>
            <div className="mb-8 flex items-start justify-between">
                <div>
                    <h1 className="text-5xl font-bold">{activity.title}</h1>
                    <p className="mt-4 text-lg tracking-tight text-gray-600">
                        {activity.description}
                    </p>
                </div>
                <span className="shrink-0 pt-4 text-gray-500">{activity.date}</span>
            </div>
            <div className="leading-relaxed text-gray-700">
                <div className="mb-4 md:float-left md:mr-8 md:w-1/3">
                    <div className="aspect-[4/3] w-full bg-gray-200">
                        <img src={activity.mainImage} alt={activity.title} className="size-full object-cover" />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">{activity.mainImageCaption}</p>
                </div>
                <div className="space-y-4">
                    {activity.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <div className="clear-both"></div>
            </div>
            <div className="my-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                {activity.galleryImages.map((image, index) => (
                    <div key={index} className="aspect-square bg-gray-200">
                        <img src={image} alt={`Gallery image ${index + 1}`} className="size-full object-cover" />
                    </div>
                ))}
            </div>
            <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-4">
                <p className="text-gray-600">{activity.author}</p>
                <div className="flex gap-4 text-gray-500">
                    {activity.hashtags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
            </div>
            <div className="mt-20">
                <h2 className="mb-4 text-center text-3xl font-bold">Explore More</h2>
                <div className="mt-8 flex items-center justify-end gap-4">
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
                </div>
            </div>
        </main>
    );
};

export default ServiceHighlightPage;