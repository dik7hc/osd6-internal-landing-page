'use client'
import React, { useState } from 'react'
import { Box } from 'lucide-react'

interface Member {
    name: string
    id: string
    role: string
}

interface DepartmentData {
    name: string
    teams: Member[][]
}

interface Manager {
    name: string
    id: string
    title: string
}

interface Organization {
    manager: Manager
    departments: DepartmentData[]
}


const organizationData: Organization[] = [
    {
        manager: {
            name: 'Ngo Anh Quan',
            id: 'GS/OSD6-APAC23 | GS/PSD63',
            title: 'Logistics Planning, Operations, and Digitalization Manager',
        },
        departments: [
            {
                name: 'Planning',
                teams: [
                    [
                        { name: 'Nguyen Duong Hoai PHUONG', id: 'VM-JP', role: 'Source Planning' },
                        { name: 'Tran Minh Anh THU', id: 'EM-CA, IPO-JP', role: 'Passthrough Planning' },
                        { name: 'Nguyen Tran Ngoc ANH', id: 'PS-JP', role: 'Source Planning' },
                        { name: 'Trinh Thi Thien KIM', id: 'MusP/LDP-JP', role: 'Source Planning' },
                    ],
                ],
            },
            {
                name: 'Operations',
                teams: [
                    [
                        { name: 'Ly My HAN', id: 'VM-JP', role: 'Logistics Operations' },
                        { name: 'Tran Duc THAO', id: 'PS-JP & VM-JP', role: 'Logistics Operations' },
                        { name: 'Le Van KHOA', id: 'VM-JP', role: 'Logistics Operations' },
                        { name: 'Tran Thi THUY', id: 'VM-JP', role: 'Logistics Operations' },
                        { name: 'Nguyen Thi My DUYEN', id: 'GS/OSD1-JP', role: 'Logistics Operations' },
                    ],
                    [
                        { name: 'Lam Duc KHOA', id: 'VM-JP', role: 'Logistics Operations' },
                        { name: 'Bui Tu Anh THU', id: 'PS-JP', role: 'Logistics Operations' },
                        { name: 'Nguyen Van TRONG', id: 'ME-JP', role: 'Logistics Operations' },
                        { name: 'Nguyen Thuy VY', id: 'IPO-JP', role: 'Logistics Operations' },
                    ],
                ],
            },
            {
                name: 'Digitalization',
                teams: [
                    [
                        { name: 'Tran Ngoc DAN', id: 'GS/OSD6-APAC2', role: 'DA & Digitalization' },
                        { name: 'Phan Thi Ha GIANG', id: 'GS/PSD63', role: 'DA & Digitalization' },
                        { name: 'Dinh Dang KHOA', id: 'GS/PSD63', role: 'DA & Digitalization' },
                    ],
                ],
            },
        ],
    },
    {
        manager: {
            name: 'Ngo Anh Quan',
            id: 'GS/OSD6-APAC23 | GS/PSD632',
            title: 'Logistics Planning, Operations, and Digitalization Manager',
        },
        departments: [
            {
                name: 'Planning',
                teams: [
                    [
                        { name: 'Ly My HAN', id: 'VM-JP', role: 'Logistics Operations' },
                        { name: 'Tran Duc THAO', id: 'PS-JP & VM-JP', role: 'Logistics Operations' },
                        { name: 'Le Van KHOA', id: 'VM-JP', role: 'Logistics Operations' },
                        { name: 'Tran Thi THUY', id: 'VM-JP', role: 'Logistics Operations' },
                    ],
                ],
            },
            {
                name: 'Operations',
                teams: [
                    [
                        { name: 'Lam Duc KHOA', id: 'VM-JP', role: 'Logistics Operations' },
                        { name: 'Bui Tu Anh THU', id: 'PS-JP', role: 'Logistics Operations' },
                        { name: 'Nguyen Van TRONG', id: 'ME-JP', role: 'Logistics Operations' },
                        { name: 'Nguyen Thuy VY', id: 'IPO-JP', role: 'Logistics Operations' },
                        { name: 'Tong Uyen NHI', id: 'PS-JP', role: 'Logistics Operations' },
                    ],
                ],
            },
            {
                name: 'Digitalization',
                teams: [
                    [
                        { name: 'Tran Ngoc DAN', id: 'GS/OSD6-APAC2', role: 'DA & Digitalization' },
                        { name: 'Phan Thi Ha GIANG', id: 'GS/PSD63', role: 'DA & Digitalization' },
                        { name: 'Dinh Dang KHOA', id: 'GS/PSD63', role: 'DA & Digitalization' },
                        { name: 'Vo Thinh VUONG', id: 'GS/PSD63', role: 'DA & Digitalization Intern' },
                        { name: 'Thai Phuc TIEN', id: 'GS/PSD63', role: 'DA & Digitalization Intern' },
                    ],
                ],
            },
        ],
    },
]

interface FormattedNameProps { name: string }

const FormattedName = ({ name }: FormattedNameProps) => {
    const parts = name.split(' ')
    if (parts.length === 1) return <strong className="font-bold">{name}</strong>
    const lastName = parts.pop()
    const firstName = parts.join(' ')
    return (
        <span className="text-xs text-black transition-colors group-hover:text-sky-600">
            {firstName} <strong className="font-bold">{lastName}</strong>
        </span>
    )
}

interface DepartmentProps { department: DepartmentData }

const Department = ({ department }: DepartmentProps) => (
    <div>
        <h3 className="mb-6 border-b-2 border-sky-600 pb-2 text-xl font-bold text-sky-600">
            {department.name}
        </h3>
        <div className="flex flex-col gap-6 md:flex-row">
            {department.teams.map((team, teamIndex) => (
                <div key={teamIndex} className="flex-1 space-y-4">
                    {team.map((member, memberIndex) => (
                        <div key={memberIndex} className="group flex items-center gap-3">
                            <Box className="size-10 shrink-0 text-slate-800" strokeWidth={1} />
                            <div>
                                <FormattedName name={member.name} />
                                <p className="text-xs font-semibold text-bosch_blue">{member.id}</p>
                                <p className="text-xs text-gray-600">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
)

const OrganizationChart = () => {
    const [activeManagerIndex, setActiveManagerIndex] = useState<number>(0)

    const activeOrganization = organizationData[activeManagerIndex]


    return (
        <section className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">

                <h2 className="mb-12 text-3xl font-bold text-gray-800">
                    Our Organization
                </h2>

                {/* Manager Selection Section */}
                <div className="mb-16 flex flex-col gap-8 sm:flex-row">
                    {organizationData.map((org, index) => {
                        const isActive = index === activeManagerIndex
                        return (
                            <div
                                key={org.manager.id}
                                onClick={() => setActiveManagerIndex(index)}
                                className={`
                  flex max-w-md cursor-pointer items-center gap-4 border-2 bg-white/70 p-4 shadow-lg
                  backdrop-blur-sm transition-all duration-300
                  ${isActive ? 'scale-105 border-sky-500' : 'border-gray-300 hover:border-sky-400'}
                `}
                            >
                                <Box className="size-16 shrink-0 text-slate-800" strokeWidth={1} />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{org.manager.name}</h3>
                                    <p className="mt-1 text-xs font-semibold text-bosch_blue">{org.manager.id}</p>
                                    <p className="mt-1 text-sm text-gray-700">{org.manager.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <Department department={activeOrganization.departments[0]} />
                    </div>
                    <div className="lg:col-span-2">
                        <Department department={activeOrganization.departments[1]} />
                    </div>
                    <div className="lg:col-span-1">
                        <Department department={activeOrganization.departments[2]} />
                    </div>
                </div>
        </section>
    )
}

export default OrganizationChart