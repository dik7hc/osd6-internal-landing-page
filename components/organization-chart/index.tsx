'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface Member {
    name: string
    id: string
    role: string
    image: string
}

interface DepartmentData {
    name: string
    teams: Member[][]
}

interface Manager {
    name: string
    id: string
    title: string
    image: string
}

interface Organization {
    manager: Manager
    departments: DepartmentData[]
}

const organizationData: Organization[] = [

    {

        manager: {

            name: 'Ngo Anh QUAN',

            id: 'GS/OSD6-APAC23 | GS/PSD63',

            title: 'Logistics Planning, Operations, and Digitalization Manager',

            image: '/images/avatar-placeholder.png',

        },

        departments: [

            {

                name: 'Planning',

                teams: [

                    [

                        { name: 'Nguyen Duong Hoai PHUONG', id: 'VM-JP', role: 'Source Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557574/Nguyen_Duong_Hoai_Phuong_xqmyhq.jpg' },

                        { name: 'Tran Minh Anh THU', id: 'EM-CA, IPO-JP', role: 'Passthrough Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557582/Tran_Minh_Anh_Thu_hccdm3.jpg' },

                        { name: 'Nguyen Tran Ngoc ANH', id: 'PS-JP', role: 'Source Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557576/Nguyen_Tran_Ngoc_Anh_ojmgaz.png' },

                        { name: 'Trinh Thi Thien KIM', id: 'MusP/LDP-JP', role: 'Source Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557586/Trinh_Thi_Thien_Kim_hhmseq.jpg' },

                    ],

                ],

            },

            {

                name: 'Operations',

                teams: [

                    [

                        { name: 'Ly My HAN', id: 'GS/OSD6 APAC23 VM-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557573/Ly_My_Han_g4zzke.jpg' },

                        { name: 'Tran Duc THAO', id: 'GS/OSD6 APAC23 PS-JP & VM-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557582/Tran_Duc_Thao_awcl4v.jpg' },

                        { name: 'Ta Quang TRI', id: 'GS/OSD6 APAC23 PS-JP, DCEA', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557579/Ta_Quang_Tri_nf8mo2.jpg' },

                        { name: 'Le Van KHOA', id: 'GS/OSD6 APAC23 VM-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557572/Le_Van_Khoa_p3knbv.jpg' },

                        { name: 'Tran Thi THUY', id: 'GS/OSD6 APAC23 VM-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557584/Tran_Thi_Thuy_poldvo.jpg' },

                        { name: 'Nguyen Thi My DUYEN', id: 'GS/OSD6 APAC23 GS/OSD1-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557574/Nguyen_Thi_My_Duyen_wkc1pq.jpg' },

                        { name: 'Vuong Kim LIEN', id: 'GS/OSD6 APAC23 GS/OSD1-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763612280/Vuong_Kim_Lien_snzwc6.jpg' },

                    ],

                    [

                        { name: 'Lam Duc KHOA', id: 'GS/OSD6 APAC23 VM-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557573/Lam_Duc_Khoa_ww5qoz.jpg' },

                        { name: 'Bui Tu Anh THU', id: 'GS/OSD6 APAC23 PS-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763619049/Bui_Tu_Anh_Thu_z0qy7h.jpg' },

                        { name: 'Nguyen Van TRONG', id: 'GS/OSD6 APAC23 ME-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557576/Nguyen_Van_Trong_ycco2d.jpg' },

                        { name: 'Nguyen Y BAO', id: 'GS/OSD6 APAC23 ME-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763612825/Nguyen_Y_Bao_cwgjqf.png' },

                        { name: 'Nguyen Thuy VY', id: 'GS/OSD6 APAC23 IPO-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763609408/Nguyen_Thuy_Vy_calqfh.png' },

                        { name: 'Phan Nguyen NGOC', id: 'GS/OSD6 APAC23 GS/OSD1-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557578/Phan_Nguyen_Ngoc_yaeeff.jpg' },

                        { name: 'Hoang Khanh LINH', id: 'GS/OSD6 APAC23 PS/LOP5-JP', role: 'Logistics Intern', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763618990/Hoang_Khanh_Linh_itkx7w.jpg' },



                    ],

                ],

            },

            {

                name: 'Digitalization',

                teams: [

                    [

                        { name: 'Tran Ngoc DAN', id: 'GS/OSD6-APAC23', role: 'DA & Digitalization', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557583/Tran_Ngoc_Dan_wgbrqn.jpg' },

                        { name: 'Phan Thi Ha GIANG', id: 'GS/PSD63', role: 'DA & Digitalization', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557578/Phan_Thi_Ha_Giang_hfywsc.jpg' },

                        { name: 'Dinh Dang KHOA', id: 'GS/PSD63', role: 'DA & Digitalization', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557572/Dinh_Dang_Khoa_q33mxc.jpg' },

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
            image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557595/Pham_Thuy_Hang_skw1oi.png',
        },
        departments: [
            {
                name: 'Planning',
                teams: [
                    [
                        { name: 'Ly My HAN', id: 'VM-JP', role: 'Logistics Operations', image: '/images/avatar-placeholder.png' },
                        { name: 'Tran Duc THAO', id: 'PS-JP & VM-JP', role: 'Logistics Operations', image: '/images/avatar-placeholder.png' },
                        { name: 'Le Van KHOA', id: 'VM-JP', role: 'Logistics Operations', image: '/images/avatar-placeholder.png' },
                        { name: 'Tran Thi THUY', id: 'VM-JP', role: 'Logistics Operations', image: '/images/avatar-placeholder.png' },
                    ],
                ],
            },
            {
                name: 'Operations',
                teams: [
                    [
                        { name: 'Lam Duc KHOA', id: 'VM-JP', role: 'Logistics Operations', image: '/images/avatar-placeholder.png' },
                        { name: 'Bui Tu Anh THU', id: 'PS-JP', role: 'Logistics Operations', image: '/images/avatar-placeholder.png' },
                        { name: 'Nguyen Van TRONG', id: 'ME-JP', role: 'Logistics Operations', image: '/images/avatar-placeholder.png' },
                        { name: 'Nguyen Thuy VY', id: 'IPO-JP', role: 'Logistics Operations', image: '/images/avatar-placeholder.png' },
                        { name: 'Tong Uyen NHI', id: 'PS-JP', role: 'Logistics Operations', image: '/images/avatar-placeholder.png' },
                    ],
                ],
            },
            {
                name: 'Digitalization',
                teams: [
                    [
                        { name: 'Tran Ngoc DAN', id: 'GS/OSD6-APAC2', role: 'DA & Digitalization', image: '/images/avatar-placeholder.png' },
                        { name: 'Phan Thi Ha GIANG', id: 'GS/PSD63', role: 'DA & Digitalization', image: '/images/avatar-placeholder.png' },
                        { name: 'Dinh Dang KHOA', id: 'GS/PSD63', role: 'DA & Digitalization', image: '/images/avatar-placeholder.png' },
                        { name: 'Vo Thinh VUONG', id: 'GS/PSD63', role: 'DA & Digitalization Intern', image: '/images/avatar-placeholder.png' },
                        { name: 'Thai Phuc TIEN', id: 'GS/PSD63', role: 'DA & Digitalization Intern', image: '/images/avatar-placeholder.png' },
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
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={40}
                                height={40}
                                className="size-10 shrink-0 rounded-full object-cover"
                            />
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
                                <Image
                                    src={org.manager.image}
                                    alt={org.manager.name}
                                    width={64}
                                    height={64}
                                    className="size-16 shrink-0 rounded-full object-cover"
                                />
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