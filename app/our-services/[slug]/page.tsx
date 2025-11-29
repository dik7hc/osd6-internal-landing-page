import { cn } from "@/lib/utils"
import Mock, { ServiceData } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Metadata } from "next"
import { ServicePageClient } from "./ServicePageClient"

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

const getServiceBySlug = (slug: string) => {
    return Mock.Services.find(s => s.slug === slug)
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: 'Service | SD6 | Bosch Việt Nam',
        };
    }

    return {
        title: `${service.title} | SD6 | Bosch Việt Nam`,
    };
}

const PageBreadCrumb = ({ title }: { title: string }) => {
    return (
        <Breadcrumb className="mb-6">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Our Services - {title}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

const lastUpdated = new Date()

const PageHero = ({ service }: { service: ServiceData }) => {
    const lastUpdated = new Date()
    
    return (
        <div className="bg-gray-200">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="p-4">
                    <PageBreadCrumb title={service.title} />
                    <h1 className="mb-4 text-4xl font-bold text-gray-900">{service.title}</h1>
                    <p className="mb-8 max-w-5xl text-lg text-gray-700">
                        {service.hero.paragraph}
                    </p>

                    <div className="max-w-5xl overflow-hidden">
                        <div className={cn("grid grid-cols-1 divide-y divide-black border-y border-black py-2 text-sm md:divide-x md:divide-y-0", {
                            "md:grid-cols-2": !service.hero.functions,
                            "md:grid-cols-3": service.hero.functions
                        })}>
                            <div>
                                <span className="font-semibold text-gray-800">Customers: </span>
                                <span className="text-gray-700">
                                    {service.hero.customers}
                                </span>
                            </div>
                            <div>
                                <span className="ml-8 font-semibold text-gray-800">HC: </span>
                                <span className="text-gray-700">{service.hero.headcount}</span>
                            </div>
                            {service.hero.functions && 
                                <div>
                                    <span className="ml-8 font-semibold text-gray-800">Functions: </span>
                                    <span className="text-gray-700">{service.hero.functions}</span>
                                </div>
                            }
                            
                        </div>
                        
                    </div>
                    <span className="mt-2 block text-gray-500">Last Updated: {lastUpdated.toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}</span>
                </div>
            </div>
        </div>
    )
}

const ServicePage = async ({ params }: ServicePageProps) => {
    const { slug } = await params;

    // Find the service data matching the slug
    const service = Mock.Services.find(s => s.slug === slug);

    // If service not found, show 404
    if (!service) {
        notFound();
    }

    return (
        <>
            <PageHero service={service} />
            <ServicePageClient service={service} slug={slug} />
        </>
    )
}

export default ServicePage
