'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Mock, { ServiceData } from "@/lib/mock-data"
import { ArrowRight } from "lucide-react"

const OtherServicesList = ({ currentSlug }: { currentSlug: string }) => {
    const otherServices = Mock.Services.filter(s => s.slug !== currentSlug).slice(0, 4);
    
    return (
        <nav className="space-y-4">
            {otherServices.map((service) => (
                <Link
                    key={service.slug}
                    href={`/our-services/${service.slug}`}
                    className="group flex items-center justify-between font-medium text-gray-800 hover:text-bosch_blue"
                >
                    <span>{service.title}</span>
                    <ArrowRight className="size-5 text-gray-400 transition-colors group-hover:text-bosch_blue" />
                </Link>
            ))}
        </nav>
    )
}

const Overview = ({ data }: { data: ServiceData['overview'] }) => {
    return (<>
        <p className="mb-2">
            {data.description}
        </p>

        {data.sections.map((section, index) => (
            <div key={index} className="mb-4">
                {section.title && (
                    <h2 className="mb-3 text-lg font-semibold text-gray-900">
                        {section.title}
                    </h2>
                )}
                {section.content && (
                    <p className="mb-4">
                        {section.content}
                    </p>
                )}
                <ul className="ml-5 list-outside list-disc space-y-2">
                    {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                            <span className="font-bold">{item.label}</span>{" "}
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </>)
}

const StandardProcess = ({ data }: { data: ServiceData['standardProcess'] }) => {
    return (<>
        <p className="mb-11">
            {data.description}
        </p>
        <div className="flex flex-col gap-8">
            {data.images.map((image, index) => (
                <div key={index} className="flex flex-col gap-4">
                    {image.title && (
                        <h3>
                            {image.title}
                        </h3>
                    )}
                    <Image 
                        alt={image.title || `Standard Process ${index + 1}`} 
                        src={image.imagePath} 
                        width={884} 
                        height={1084} 
                        quality={50}
                    />
                </div>
            ))}
        </div>
    </>)
}

const RelatedLinks = ({ links }: { links: ServiceData['relatedLinks'] }) => {
    if (!links) return null
    return (
        <div className="w-full text-gray-700">
            <div className="grid grid-cols-2 gap-4 border-b-2 border-gray-400 px-4 py-3 font-bold text-gray-900">
                <h3>Related Links</h3>
                <h3>More Details</h3>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-black">
                {links.map((item, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4 px-4 py-3">
                        <div>
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-bosch_green hover:underline"
                            >
                                {item.linkText}
                            </a>
                        </div>

                        <div className="text-gray-800">
                            {item.details}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

interface ServicePageClientProps {
    service: ServiceData;
    slug: string;
}

export const ServicePageClient = ({ service, slug }: ServicePageClientProps) => {
    const [tab, setTab] = useState<number>(1)

    const selectTab = (tabId: number) => {
        if(tabId == tab) return
        setTab(tabId)
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 pb-16 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <div className="text-gray-700">
                            <nav className="flex justify-evenly space-x-8">
                                <div className={cn("size-full py-2 text-center text-lg hover:cursor-pointer", {
                                        "bg-gray-200": tab == 1,
                                    })}
                                    onClick={() => selectTab(1)}
                                >
                                    Overview
                                </div>
                                <div className={cn("size-full py-2 text-center text-lg hover:cursor-pointer", {
                                        "bg-gray-200": tab == 2,
                                    })}
                                    onClick={() => selectTab(2)}
                                >
                                    Standard Process
                                </div>
                                {   
                                    service.relatedLinks && 
                                    <div className={cn("size-full py-2 text-center text-lg hover:cursor-pointer", {
                                            "bg-gray-200": tab == 3,
                                        })}
                                        onClick={() => selectTab(3)}
                                    >
                                        Process links
                                    </div>
                                }
                            </nav>
                            <div className="bg-gray-200 p-4 pt-10">
                                {tab == 1 && <Overview data={service.overview} />}
                                {tab == 2 && <StandardProcess data={service.standardProcess} />}
                                {tab == 3 && <RelatedLinks links={service.relatedLinks} />}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 h-fit bg-gray-200 p-4 lg:col-span-1 lg:mt-0">
                        <h3 className="mb-5 text-lg font-semibold text-bosch_blue">
                            Other Services
                        </h3>
                        <OtherServicesList currentSlug={slug} />
                    </div>
                </div>
            </div>
        </div>
    )
}
