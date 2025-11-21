'use client'
import { cn } from '@/lib/utils';
import { useState } from 'react';
import Header from '@/components/header';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const tabsData = [
    {
        id: 1,
        label: 'Home',
        pathname: "/"
    },
    {
        id: 2,
        label: 'Our Services',
    },
    {
        id: 3,
        label: 'Our Activities',
        pathname: "/our-activities/"
    },
];
const subTabs1 = [
    {
        id: 3,
        label: 'Master Data',
        pathname: '/our-services/master-data',
    },
    {
        id: 1,
        label: 'Planning',
        pathname: '/our-services/planning',
    },
    {
        id: 2,
        label: 'Inbound Control',
        pathname: '/our-services/inbound-control',
    },
  
    {
        id: 4,
        label: 'Data Analytics',
        pathname: '/our-services/data-analytics',
    },
    {
        id: 5,
        label: 'Logistics Projects',
        pathname: '/our-services/logistics-projects',
    },
];

const tabHoverColors: Record<number, string> = {
    1: "hover:border-bosch_blue",
    2: "hover:border-bosch_purple",
    3: "hover:border-bosch_green",
}

const tabActiveColors: Record<number, string> = {
    1: "border-bosch_blue",
    2: "border-bosch_purple",
    3: "border-bosch_green",
}

const ServicePlanningHeader = () => {
    const [tab, setTab] = useState(0)
    const router = useRouter()
    const pathname = usePathname()

    const handleClickTab = (id: number) => {
        if (id == 3) {
            router.push("/our-activities")
        }
        if (id == 1) {
            router.push("/")
        }
        if(id == tab) {
            setTab(0)
            return
        }
        setTab(id)
    }

    return (
        <>
            <Header>
                {tabsData.map((item) => {
                    const isActive = item.id === tab
                    return <button
                        key={item.id}
                        onClick={() => handleClickTab(item.id)}
                        className={cn(
                            // Base styles
                            "border-b-4 border-transparent px-8 py-[14px] text-gray-900 transition-colors hover:bg-bosch_blue/40",

                            tabHoverColors[item.id],

                            {
                                "bg-bosch_blue/40": isActive,
                                [tabActiveColors[item.id]]: isActive || (pathname == item.pathname || (pathname.includes("/our-services/") && item.id == 2)), 
                            }
                        )}
                    >
                        {item.label}
                    </button>
                })}
            </Header>
            <div className={cn("bg-gray-400", tab == 2 ? "" : "hidden")}>
                <div className='3xl:mx-[39rem] 2xl:mx-[19rem] lg:mx-[9.5rem] flex max-w-7xl lg:w-3/4 justify-center'>
                    {tab == 2 && subTabs1.map((subTab) => (
                       <Link key={subTab.id} href={subTab.pathname}>
                            <div
                                className={cn(" border-b-4 border-transparent px-8 py-[14px] text-gray-900 transition-colors hover:bg-bosch_blue/40 ")}
                            >
                                {subTab.label}
                            </div>
                       </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ServicePlanningHeader