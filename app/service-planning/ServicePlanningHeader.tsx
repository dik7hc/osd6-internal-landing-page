'use client'
import { cn } from '@/lib/utils';
import { useState } from 'react';
import Header from '@/components/header';
import { useRouter } from 'next/navigation';

const tabsData = [
    {
        id: 1,
        label: 'Home',
    },
    {
        id: 2,
        label: 'Our Services',
    },
    {
        id: 3,
        label: 'Our Activities',
    },
];
const subTabs1 = [
    {
        id: 3,
        label: 'Master Data',
    },
    {
        id: 1,
        label: 'Planning',
    },
    {
        id: 2,
        label: 'Inbound Control',
    },
  
    {
        id: 4,
        label: 'Data Analytics',
    },
    {
        id: 5,
        label: 'Logistics Projects',
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
                                [tabActiveColors[item.id]]: isActive, // e.g., { "border-bosch_blue": true }
                            }
                        )}
                    >
                        {item.label}
                    </button>
                })}
            </Header>
            <div className={cn("bg-gray-400", tab == 2 ? "" : "hidden")}>
                <div className='3xl:mx-[60rem] lg:mx-[12rem] flex max-w-7xl lg:w-3/4 justify-center'>
                    {tab == 2 && subTabs1.map((subTab) => (
                        <button
                            key={subTab.id}
                            className={cn(" border-b-4 border-transparent px-8 py-[14px] text-gray-900 transition-colors hover:bg-bosch_blue/40 ")}
                        >
                            {subTab.label}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ServicePlanningHeader