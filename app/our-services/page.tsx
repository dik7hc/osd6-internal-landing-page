import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";
import PlanningOverviewSection from "./PlanningOverviewSection";

const PageBreadCrumb = () => {
    return (<Breadcrumb className="mb-6">
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage>Our Services</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage>Planning</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>)
}

const PageHero = () => {
    return (
        <div className="bg-gray-200">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="p-4">

                    <PageBreadCrumb />
                    <h1 className="mb-4 text-4xl font-bold text-gray-900">Planning</h1>
                    <p className="mb-8 max-w-5xl text-lg text-gray-700">
                        The Planning service is the critical function responsible for ensuring
                        optimal flow of materials and products across the entire supply chain,
                        from raw material procurement to final customer delivery. Our objective
                        is to strategically balance future demand forecasts, inventory
                        investments, and supplier capacity to maximize service levels while
                        minimizing operating costs and working capital. This integrated
                        approach covering Demand and Procurement Planning – enables
                        data-driven decision-making that directly impacts organizational
                        agility, resilience, and financial performance.
                    </p>

                    <div className=" max-w-5xl overflow-hidden">
                        <div className="grid grid-cols-1 divide-y divide-black border-y border-black py-2 text-sm md:grid-cols-3 md:divide-x md:divide-y-0">
                            <div>
                                <span className="font-semibold text-gray-800">Customers: </span>
                                <span className="text-gray-700">
                                    MA, PS, VM, EM, IPO, MusP
                                </span>
                            </div>
                            <div>
                                <span className="ml-8 font-semibold text-gray-800">HC: </span>
                                <span className="text-gray-700">18</span>
                            </div>
                            <div>
                                <span className="ml-8 font-semibold text-gray-800">Functions: </span>
                                <span className="text-gray-700">3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const OtherServicesList = () => {
    return (
        <nav className="space-y-4">
            <a
                href="#"
                className="group flex items-center justify-between font-medium text-gray-800 hover:text-bosch_blue"
            >
                <span>Inbound Control</span>
                <ArrowRight className="size-5 text-gray-400 transition-colors group-hover:text-bosch_blue" />
            </a>
            <a
                href="#"
                className="group flex items-center justify-between font-medium text-gray-800 hover:text-bosch_blue"
            >
                <span>Master Data</span>
                <ArrowRight className="size-5 text-gray-400 transition-colors group-hover:text-bosch_blue" />
            </a>
            <a
                href="#"
                className="group flex items-center justify-between font-medium text-gray-800 hover:text-bosch_blue"
            >
                <span>Data Analysis</span>
                <ArrowRight className="size-5 text-gray-400 transition-colors group-hover:text-bosch_blue" />
            </a>
            <a
                href="#"
                className="group flex items-center justify-between font-medium text-gray-800 hover:text-bosch_blue"
            >
                <span>Logistics Projects</span>
                <ArrowRight className="size-5 text-gray-400 transition-colors group-hover:text-bosch_blue" />
            </a>
        </nav>)
}

export default function PlanningPage() {
    return (
        <>
            <PageHero />
            <div className="mx-auto max-w-7xl px-4 py-10 pb-16 sm:px-6 lg:px-8" >
                <div className=" overflow-hidden">
                    <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-3">
                        <div className="lg:col-span-2 ">
                            <PlanningOverviewSection />
                        </div>

                        <div className="mt-8 h-fit bg-gray-200 p-4 lg:col-span-1 lg:mt-0">
                            <h3 className="mb-5 text-lg font-semibold text-bosch_blue">
                                Other Services
                            </h3>
                            <OtherServicesList />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}