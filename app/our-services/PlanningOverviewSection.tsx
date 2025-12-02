'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

const Overview = () => {
    return (<>
        <p>
            The Planning function is structured around two core pillars that
            work in concert to manage the entire lifecycle of goods and
            resources efficiently. Each pillar is vital for converting the
            company&apos;s strategic goals into an executable supply chain plan.
        </p>

        <div>
            <h2 className="mb-3 text-lg font-semibold text-gray-900">
                1. Demand Planning
            </h2>
            <p className="mb-4">
                This process focuses on accurately predicting future customer
                requirements to create a single, unified view of expected
                sales.
            </p>
            <ul className="ml-5 list-outside list-disc space-y-2">
                <li>
                    <span className="font-bold">Core Responsibility:</span>{" "}
                    Develop and maintain statistical forecasts, incorporate
                    market intelligence (sales, marketing, customer feedback),
                    and manage the cross-functional consensus forecasting
                    process.
                </li>
                <li>
                    <span className="font-bold">Strategic Outcome:</span> Reduces{" "}
                    <span className="font-bold text-bosch_blue">
                        error and bias in forecast
                    </span>
                    , allowing the business to anticipate market shifts, prevent
                    costly stockouts, and avoid risks associated with excess
                    inventory.
                </li>
            </ul>
        </div>

        <div>
            <h2 className="mb-3 text-lg font-semibold text-gray-900">
                2. Procurement Planning
            </h2>
            <p className="mb-4">
                This pillar translates the approved demand plan into a feasible
                plan for material procurement and production, ensuring we have
                the right components at the right time.
            </p>
            <ul className="ml-5 list-outside list-disc space-y-2">
                <li>
                    <span className="font-bold">Core Responsibility:</span>{" "}
                    Determine the optimal timing, location, and volume for
                    purchasing raw materials and components, manage supplier
                    capacity constraints, and execute the detailed material
                    requirements planning (MRP).
                </li>
                <li>
                    <span className="font-bold">Strategic Outcome:</span>{" "}
                    Improves{" "}
                    <span className="font-bold text-bosch_blue">
                        supplier lead time compliance
                    </span>
                    , optimizes inventory levels for key materials, and maximizes
                    production capacity utilization, safeguarding all
                    manufacturing and assembly schedules.
                </li>
            </ul>
        </div>
    </>)
}

const StandardProcess = () => {
    return (<>
        <p className="mb-11">
                The following process map visually outlines the essential steps and review stages of the Procurement Planning process, ensuring a synchronized and efficient approach to material acquisition and scheduling. 
        </p>
        <img alt="StandardProcessPlanning" src={"/images/StandardProcessPlanning.png"} width={884} height={1084} />
          
    </>)
}
const RelatedLinks = () => {
    const links = [
        {
            href: "#",
            linkText: "Procurement Planning Procedure",
            details: "Procurement Planning standardized process",
        },
        {
            href: "#",
            linkText: "Creating scheduling agreement documentation",
            details: "Create schedule agreement releases",
        },
        {
            href: "#",
            linkText: "Creating purchase order wi documentation",
            details: "Creating purchase order with purchase requisition number",
        },
        {
            href: "#",
            linkText: "Procurement Planning - an overview",
            details: "Procure Planning - an overview",
        },
        {
            href: "#",
            linkText: "Modifying MM Delivery Schedule Lines",
            details: "Modifying MM Delivery Schedule Lines",
        },
    ];

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

const PlanningOverviewSection = () => {
    const [tab, setTab] = useState<number>(1)

    const selectTab = (tabId: number) => {
        if(tabId == tab) return
        setTab(tabId)
    }
    return (
        <div className="text-gray-700 ">
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
                <div className={cn("size-full py-2 text-center text-lg hover:cursor-pointer", {
                        "bg-gray-200": tab == 3,
                    })}
                    onClick={() => selectTab(3)}
                >
                    Process links
                </div>
            </nav>
            <div className="bg-gray-200 p-4 pt-10">
                {tab == 1 && <Overview />}
                {tab == 2 && <StandardProcess />}
                {tab == 3 && <RelatedLinks />}
            </div>
        </div>
    )
}

export default PlanningOverviewSection