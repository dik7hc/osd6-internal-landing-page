import ExperienceSection, { ExperienceDayCard } from "@/components/opex";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Mock from "@/lib/mock-data";

const PageBreadCrumb = () => {
    return (<Breadcrumb className="mb-6">
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/our-activities">Our Activities</BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>)
}
export default function OurActivitiesPage() {
    return (
        <div >
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="p-4">
                    <PageBreadCrumb />
                    <section className="pb-10">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                                Our Activities
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Mock.Activities.map((activity, index) => (
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
                    </section>
                </div>
            </div>
        </div>
    )
}
