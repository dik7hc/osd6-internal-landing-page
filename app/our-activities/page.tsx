import ExperienceSection from "@/components/opex";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const PageBreadCrumb = () => {
    return (<Breadcrumb className="mb-6">
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/our-services">Our Activities</BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>)
}
export default function OurActivitiesPage(){
    return (
        <div className="bg-gray-200">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="p-4">
                    <PageBreadCrumb />
                    <ExperienceSection />
                    <ExperienceSection />
                </div>
            </div>
        </div>
    )
}
