'use client'
import React, { useState } from 'react';
import { TrendingUp, Award, Expand, Users, Lightbulb } from 'lucide-react';

const okrData = [
    {
        id: 0,
        icon: TrendingUp,
        label: "Business Revenue Growth",
        keyResults: [
            { text: "KR1: 60% business revenue growth in Q4.2025", status: "Achieved" },
            { text: "KR2: 4 new service contracts within 2025", status: "Achieved" },
            { text: "KR3: 2 new service concepts introduced in 2025", status: "On Track" },
        ]
    },
    {
        id: 1,
        icon: Award,
        label: "Quality & Recognition",
        keyResults: [
            { text: "KR1: Achieve 95% customer satisfaction score", status: "On Track" },
            { text: "KR2: Win 'Industry Leader' award", status: "At Risk" },
            { text: "KR3: Maintain 4.8+ star rating on all platforms", status: "On Track" },
        ]
    },
    {
        id: 2,
        icon: Expand,
        label: "Market Expansion",
        keyResults: [
            { text: "KR1: Launch in 2 new international markets", status: "On Track" },
            { text: "KR2: Establish 3 new distribution channels", status: "Achieved" },
        ]
    },
    {
        id: 3,
        icon: Users,
        label: "Team Growth & Culture",
        keyResults: [
            { text: "KR1: Hire 10 new engineers by Q3", status: "Achieved" },
            { text: "KR2: Achieve 90% employee retention rate", status: "On Track" },
            { text: "KR3: Implement new mentorship program", status: "On Track" },
        ]
    },
    {
        id: 4,
        icon: Lightbulb,
        label: "Product Innovation",
        keyResults: [
            { text: "KR1: Launch 3 new major product features", status: "On Track" },
            { text: "KR2: File 2 new patents related to core tech", status: "On Track" },
            { text: "KR3: Reduce average bug resolution time by 50%", status: "At Risk" },
        ]
    }
];


const OkrButton = ({ item, isSelected, onClick }: any) => {
    const Icon = item.icon;

    const buttonClasses = isSelected
        ? 'bg-purple-700 text-white transform scale-105 shadow-lg'
        : 'bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-md';

    const iconSize = isSelected ? 36 : 28;

    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${buttonClasses}`}
            style={{ 
                width: isSelected ? '96px' : '80px', 
                height: isSelected ? '96px' : '80px',
                minWidth: isSelected ? '96px' : '80px',
                minHeight: isSelected ? '96px' : '80px'
            }}
        >
            <Icon size={iconSize} />
        </button>
    );
};

const StatusBadge = ({ status } : any) => {
    let badgeClasses = '';
    switch (status) {
        case 'Achieved':
            badgeClasses = 'bg-purple-700 text-white';
            break;
        case 'On Track':
            badgeClasses = 'bg-purple-100 text-purple-700';
            break;
        case 'At Risk':
            badgeClasses = 'bg-red-100 text-red-700';
            break;
        default:
            badgeClasses = 'bg-gray-200 text-gray-800';
    }

    return (
        <div className={`w-28 px-4 py-2 text-center text-sm font-medium ${badgeClasses}`}>
            {status}
        </div>
    );
};

const buttonPositions = [
    { id: 0, gridClass: "col-start-3 row-start-1" }, // Top
    { id: 1, gridClass: "col-start-1 row-start-3" }, // Top-left
    { id: 2, gridClass: "col-start-5 row-start-3" }, // Top-right
    { id: 4, gridClass: "col-start-2 row-start-5" }, // Bottom-left (Icon: Lightbulb, id: 4)
    { id: 3, gridClass: "col-start-4 row-start-5" }, // Bottom-right (Icon: Users, id: 3)
];

const ConnectingLines = () => {
    return (<svg
        className="absolute inset-0 size-full"
        viewBox="0 0 320 320"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line x1="160" y1="0" x2="288" y2="140" stroke="#E5E7EB" strokeWidth="2" /> {/* 0 -> 2 */}
        <line x1="288" y1="160" x2="224" y2="280" stroke="#E5E7EB" strokeWidth="2" /> {/* 2 -> 3 */}
        <line x1="224" y1="280" x2="96" y2="280" stroke="#E5E7EB" strokeWidth="2" />  {/* 3 -> 4 */}
        <line x1="96" y1="280" x2="32" y2="160" stroke="#E5E7EB" strokeWidth="2" />   {/* 4 -> 1 */}
        <line x1="32" y1="140" x2="160" y2="0" stroke="#E5E7EB" strokeWidth="2" />  {/* 1 -> 0 */}
    </svg>)
}

export default function OkrSection() {
    const [selectedId, setSelectedId] = useState(0); 

    const selectedOkr = okrData.find(item => item.id === selectedId);

    const positionedData = buttonPositions.map(pos => {
        return {
            ...okrData.find(d => d.id === pos.id),
            gridClass: pos.gridClass
        }
    });

    return (
            <div>
                <h1 className="mb-12 text-3xl font-bold text-gray-900">OKR Status</h1>

                <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:gap-8">

                    <div className="flex w-full shrink-0 items-center justify-center lg:w-1/2">
                        <div className="relative size-80">
                            <ConnectingLines />
                            <div className="relative z-10 grid size-80 grid-cols-5 grid-rows-4">
                                {positionedData.map((item) => (
                                    <div key={item.id} className={`${item.gridClass} flex items-center justify-center`}>
                                        <OkrButton
                                            item={item}
                                            isSelected={selectedId === item.id}
                                            onClick={() => setSelectedId(item.id as any)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">{selectedOkr?.label}</h2>
                        <div className="space-y-6">
                            {selectedOkr?.keyResults.map((kr) => (
                                <div
                                    key={kr.text}
                                    className="flex flex-col items-start justify-between gap-4 border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
                                >
                                    <p className="flex-1 text-base text-gray-700">{kr.text}</p>
                                    <StatusBadge status={kr.status} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
    );
}