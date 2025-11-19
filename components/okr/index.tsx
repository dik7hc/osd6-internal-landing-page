'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import {
    ArrowRight,
    Clock,
    Check
} from 'lucide-react'
import { cn } from '@/lib/utils' // Assuming you have a utility for conditional class names

const menuItems = [
    {
        id: 1,
        title: 'Customer Satisfaction',
        iconSrc: '/svg/okrStatusIcons/customerSatisfaction.svg',
        stats: { achieved: '-', onTrack: 3, inProgress: '-' }
    },
    {
        id: 2,
        title: 'Business Growth',
        iconSrc: '/svg/okrStatusIcons/businessGrowth.svg',
        stats: { achieved: 2, onTrack: 3, inProgress: '-' }
    },
    {
        id: 3,
        title: 'Value of Services',
        iconSrc: '/svg/okrStatusIcons/valueOfServices.svg',
        stats: { achieved: 1, onTrack: 2, inProgress: '-' }
    },
    {
        id: 4,
        title: 'Organizational Capability',
        iconSrc: '/svg/okrStatusIcons/organizationalCapability.svg',
        stats: { achieved: 2, onTrack: 1, inProgress: '-' }
    },
    {
        id: 5,
        title: 'Digitalization',
        iconSrc: '/svg/okrStatusIcons/digitalization.svg',
        stats: { achieved: '-', onTrack: 2, inProgress: 1 }
    }
]

const DashboardComponent = () => {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <section>
            <div className="mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    OKR Status
                </h2>
            </div>
            <div className="flex gap-6">

                <div className="min-w-[26.25rem] flex flex-col">
                    {menuItems.map((item: any) => (
                        <div
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={cn(
                                "group flex items-center justify-between p-6 border-b border-gray-100 cursor-pointer transition-colors group",
                                activeTab === item.id ? 'bg-gray-200' : 'hover:bg-gray-50'
                            )}
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon Container */}
                                <div className="mt-1 text-slate-800">
                                    <Image
                                        src={item.iconSrc}
                                        alt={`${item.title} icon`}
                                        width={32}
                                        height={32}
                                        priority={false}
                                        quality={20}
                                    />
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2 leading-tight">{item.title}</h3>

                                    {/* Status Indicators */}
                                    <div className="flex items-center gap-4 text-xs font-medium">
                                        {/* Achieved (Green) */}
                                        <div className="flex items-center gap-1 text-bosch_green">
                                            <div className="bg-bosch_green text-white p-[1px]">
                                                <Image src={"/svg/okrStatusIcons/achievedIcon.svg"} width={10} height={10} alt="On Track Logo" className='size-3' quality={5} priority={false} />
                                            </div>
                                            <span className={cn(item.stats.achieved === '-' && 'text-slate-400')}>
                                                {activeTab === item.id && (item.stats.achieved === '-' ? 'Achieved: -' : `Achieved: ${item.stats.achieved}`)}
                                                {activeTab !== item.id && item.stats.achieved}
                                            </span>
                                        </div>

                                        {/* On Track (Blue) */}
                                        <div className="flex items-center gap-1 text-sky-600">
                                            <div className="bg-sky-600  p-[1px]">
                                                <Image src={"/svg/okrStatusIcons/onTrackIcon.svg"} width={10} height={10} alt="On Track Logo" className='size-3' quality={5} priority={false} />
                                            </div>
                                            <span className={cn(item.stats.onTrack === '-' && 'text-slate-400')}>
                                                {activeTab === item.id && (item.stats.onTrack === '-' ? 'On Track: -' : `On Track: ${item.stats.onTrack}`)}
                                                {activeTab !== item.id && item.stats.onTrack}

                                            </span>
                                        </div>

                                        {/* In Progress (Red) */}
                                        <div className="flex items-center gap-1 text-red-500">
                                            <div className="bg-red-500 p-[1px]">
                                                <Image src={"/svg/okrStatusIcons/inProgressIcon.svg"} width={10} height={10} alt="In Progress Logo" className='size-3' quality={5} priority={false} />
                                            </div>
                                            <span className={cn(item.stats.inProgress === '-' && 'text-slate-400')}>
                                                {activeTab === item.id && (item.stats.inProgress === '-' ? 'In Progress: -' : `In Progress: ${item.stats.inProgress}`)}
                                                {activeTab !== item.id && item.stats.inProgress}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow */}
                            <ArrowRight className={cn("text-slate-400 group-hover:text-bosch_purple", activeTab == item.id && 'text-bosch_teal')} size={20} />
                        </div>
                    ))}
                </div>

                {/* RIGHT CONTENT PANEL */}
                <div className="flex-1 bg-gray-200 p-10 overflow-y-auto">
                    {activeTab === 1 && (
                        <CustomerSatisfaction />
                    )}
                    {activeTab === 2 && (
                        <BusinessGrowth />
                    )}
                    {activeTab === 3 && (
                        <ValueOfService />
                    )}
                    {activeTab === 4 && (
                        <OrganizationCapability />
                    )}
                    {activeTab === 5 && (
                        <Digitalization />
                    )}
                </div>
            </div>
        </section>
    )
}

const BusinessGrowth = () => {
    return (<div className="space-y-10">
        <section>
            <h3 className="text-lg font-medium text-slate-800 mb-4">
                Objective: To expand business portfolio/ customer/ scope of services
            </h3>

            <div className="space-y-6 pl-1">
                <div className="flex items-center gap-3">
                    <StatusBadge status="Achieved" showStatus />
                    <ArrowRight size={14} className="" />
                    <span className="font-bold text-slate-900">Progress:</span>
                    <span className="text-slate-700">61.1% YTY Revenue Growth</span>
                </div>

                <div className="flex items-start gap-3">
                    <StatusBadge status="Achieved" showStatus />
                    <ArrowRight size={14} className="" />
                    <span className="font-bold text-slate-900">Progress:</span>
                    <span className="text-slate-700">6 new service contracts (DC / ME / 2 DP for MA EA / Consulting 2nd & 3rd SLA)</span>
                </div>
                <div className="flex items-start gap-3">
                    <StatusBadge status="On Track" showStatus />
                    <ArrowRight size={14} className="" />
                    <span className="font-bold text-slate-900">Progress:</span>
                    <span className="text-slate-700">1 concept as of Q2.2025 (P+T+F Concept for MA), 1 Concept in Q4 </span>
                </div>
            </div>
        </section>
    </div>)
}
const ValueOfService = () => {
    return (<div className="space-y-10">
        <section>
            <h3 className="text-lg font-medium text-slate-800 mb-4">
                Objective: Service transformation by self-assertiveness collaboration across OSDx
            </h3>

            <div className="space-y-6 pl-1">
                <div className="flex items-center gap-3">
                    <StatusBadge status="Achieved" showStatus />
                    <ArrowRight size={14} className="" />
                    <span className="font-bold text-slate-900">Progress:</span>
                    <span className="text-slate-700">Wiki Project for Process Transparency finished</span>
                </div>

                <div className="flex items-start gap-3">
                    <StatusBadge status="On Track" showStatus />
                    <ArrowRight size={14} className="" />
                    <div>
                        <span className="font-bold text-slate-900 ">Progress:</span>
                        <ul className="list-disc list-outside ml-4 space-y-1 text-slate-700">
                            <li>YTD %container utilization from HcP to K25M average 52.4% (compared 38% in 2024).</li>
                            <li>%Container utilization from LAFIEN average 74% (compared to 41%)</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <StatusBadge status="On Track" showStatus />
                    <ArrowRight size={14} className="" />
                    <span className="font-bold text-slate-900">Progress:</span>
                    <span className="text-slate-700">1:1 interview with DP (Jia Guijun) / SP (Chen Juan) / SMS4 (Yan Xiaolei) / SLC (Duan Dan)</span>
                </div>
            </div>
        </section>
    </div>)
}
const Digitalization = () => {
    return (<div className="space-y-10">
        <section>
            <h3 className="text-lg font-medium text-slate-800 mb-4">
                Objective: Enhance digital awareness productivity & customer-centric value creation
            </h3>

            <div className="space-y-6 pl-1">
                <div className="flex items-start gap-3">
                    <StatusBadge status="On Track" showStatus />
                    <ArrowRight size={14} className="" />
                    <span className="font-bold text-slate-900">Progress:</span>
                    <span className="text-slate-700">Digi-awareness successfully kick off 5/6 session</span>
                </div>
                <div className="flex items-start gap-3">
                    <StatusBadge status="In Progress" showStatus />
                    <ArrowRight size={14} className="" />
                    <span className="font-bold text-slate-900">Progress:</span>
                    <span className="text-slate-700">0.7/2.5 HCs saved by Q2.2025</span>
                </div>
                <div className="flex items-start gap-3">
                    <StatusBadge status="On Track" showStatus />
                    <ArrowRight size={14} className="" />
                    <span className="font-bold text-slate-900">Progress:</span>
                    <span className="text-slate-700">2 success stories  in digitalization by Q2.2025 (PS/LOP1-JP & VM/LOP1-JP)</span>
                </div>
            </div>
        </section>
    </div>)
}
const CustomerSatisfaction = () => {
    return (<div className="space-y-10">
        <section>
            <h3 className="text-lg font-medium text-slate-800 mb-4">
                Objective 1: Gain better understanding about insights in customer satisfaction
            </h3>

            <div className="space-y-3 pl-1">
                {/* Row 1 */}
                <div className="flex items-center gap-3">
                    <StatusBadge status="On Track" showStatus />
                    <ArrowRight size={14} className="" />
                    <span className="font-bold text-slate-900">Progress:</span>
                    <span className="text-slate-700">62/80 VoCs Collected</span>
                </div>

                {/* Row 2 */}
                <div className="flex items-center gap-3">
                    <StatusBadge status="On Track" showStatus />
                    <ArrowRight size={14} className="" />
                    <span className="font-bold text-slate-900">Progress:</span>
                    <span className="text-slate-700">4.8/5 Rating on VoCs</span>
                </div>
            </div>
        </section>

        {/* Objective 2 */}
        <section>
            <h3 className="text-lg font-medium text-slate-800 mb-4">
                Objective 2: To become trusted strategic logistics partner in APAC region
            </h3>

            <div className="flex items-start gap-3 pl-1">
                <div className="mt-1">
                    <StatusBadge status="On Track" showStatus />
                </div>
                <div className="flex items-start gap-3 mt-1">
                    <ArrowRight size={14} className=" mt-1" />
                    <div>
                        <span className="font-bold text-slate-900 block mb-2">Progress:</span>
                        <ul className="list-disc list-outside ml-4 space-y-1 text-slate-700">
                            <li>Completed 1 UX Project & 3 UXcellent workshops.</li>
                            <li>2 new UX/UI designers from Digi team</li>
                            <li>Maintain 100% internal associates finished UX0</li>
                            <li>UX Champion Lead join UX ML4 audit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    </div>)
}
const OrganizationCapability = () => {
    return (<div className="space-y-10">
        <section>
            <h3 className="text-lg font-medium text-slate-800 mb-4">
                Objective 1: Develop open, continuous & proactive learn culture
            </h3>

            <div className="space-y-3 pl-1">
                {/* Row 1 */}
                <div className="flex items-center gap-3">
                    <StatusBadge status="Achieved" showStatus />
                    <ArrowRight size={14} className="" />
                    <span className="font-bold text-slate-900">Progress:</span>
                    <span className="text-slate-700">7% capacity already dedicated to L&D Activities by Q2.2025</span>
                </div>
            </div>
        </section>

        <section>
            <h3 className="text-lg font-medium text-slate-800 mb-4">
                Objective 2: Build a high performing / future ready team in organization
            </h3>

            <div className="space-y-3 pl-1">
                <div className="flex items-center gap-3">
                    <StatusBadge status="Achieved" showStatus />
                    <ArrowRight size={14} className="" />
                    <span className="font-bold text-slate-900">Progress:</span>
                    <span className="text-slate-700">Competency Matric completed Q3.2025</span>
                </div>
                <div className="flex items-center gap-3">
                    <StatusBadge status="On Track" showStatus />
                    <ArrowRight size={14} className="" />
                    <span className="font-bold text-slate-900">Progress:</span>
                    <span className="text-slate-700">12 associated joined the Proxy Matching Project</span>
                </div>
            </div>
        </section>

    </div>)
}

const StatusBadge = ({ status, showStatus = false }: { status: "On Track" | "In Progress" | "Achieved", showStatus: boolean }) => (
    <span className="inline-flex items-center gap-1.5 font-medium text-sm min-w-fit">
        {
            status == "Achieved" && (
                <div className="flex items-center gap-1 text-bosch_green">
                    <div className="bg-bosch_green text-white p-[1px]">
                        <Image src={"/svg/okrStatusIcons/achievedIcon.svg"} width={10} height={10} alt="On Track Logo" className='size-3' quality={5} priority={false} />
                    </div>
                    <span className='text-bosch_green'>{showStatus && status}</span>
                </div>
            )
        }
        {
            status == "On Track" && (
                <div className="flex items-center gap-1 text-bosch_blue">
                    <div className="bg-bosch_blue text-white p-[1px]">
                        <Image src={"/svg/okrStatusIcons/onTrackIcon.svg"} width={10} height={10} alt="On Track Logo" className='size-3' quality={5} priority={false} />
                    </div>
                    <span className='text-bosch_blue'>{showStatus && status}</span>
                </div>
            )
        }
        {
            status == "In Progress" && (
                <div className="flex items-center gap-1 text-red-500">
                    <div className="bg-red-500 text-white p-[1px]">
                        <Image src={"/svg/okrStatusIcons/inProgressIcon.svg"} width={10} height={10} alt="In Progress Logo" className='size-3' quality={5} priority={false} />
                    </div>
                    <span className='text-red-500'>{showStatus && status}</span>
                </div>
            )
        }
    </span>
)

export default DashboardComponent