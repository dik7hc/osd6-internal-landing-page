'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

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
    image?: string
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

            title: ' Planning, Operations, and Digitalization Manager',

            image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557573/Ngo_Anh_Quan_drpmlq.jpg',

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

                        // Nhóm VM-JP

                        { name: 'Ly My HAN', id: 'GS/OSD6 APAC23 VM-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557573/Ly_My_Han_g4zzke.jpg' },

                        { name: 'Le Van KHOA', id: 'GS/OSD6 APAC23 VM-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557572/Le_Van_Khoa_p3knbv.jpg' },

                        { name: 'Tran Thi THUY', id: 'GS/OSD6 APAC23 VM-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557584/Tran_Thi_Thuy_poldvo.jpg' },

                        { name: 'Lam Duc KHOA', id: 'GS/OSD6 APAC23 VM-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557573/Lam_Duc_Khoa_ww5qoz.jpg' },

                        // Nhóm PS-JP và các biến thể liên quan

                        { name: 'Tran Duc THAO', id: 'GS/OSD6 APAC23 PS-JP & VM-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557582/Tran_Duc_Thao_awcl4v.jpg' },

                        { name: 'Ta Quang TRI', id: 'GS/OSD6 APAC23 PS-JP, DCEA', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557579/Ta_Quang_Tri_nf8mo2.jpg' },

                        { name: 'Nguyen Mai TRANG', id: 'GS/OSD6 APAC23 PS- JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763609424/Nguyen_Mai_Trang_fja8ne.jpg' },
                        { name: 'Tong Uyen NHI', id: 'GS/OSD6 APAC23 PS-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763619080/Tong_Uyen_Nhi_atkzvf.jpg' },
                    ],

                    [

                        // Nhóm GS/OSD1-JP

                        { name: 'Nguyen Thi My DUYEN', id: 'GS/OSD6 APAC23 GS/OSD1-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557574/Nguyen_Thi_My_Duyen_wkc1pq.jpg' },

                        { name: 'Vuong Kim LIEN', id: 'GS/OSD6 APAC23 GS/OSD1-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763612280/Vuong_Kim_Lien_snzwc6.jpg' },

                        { name: 'Phan Nguyen NGOC', id: 'GS/OSD6 APAC23 GS/OSD1-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557578/Phan_Nguyen_Ngoc_yaeeff.jpg' },

                        // Nhóm ME-JP

                        { name: 'Nguyen Van TRONG', id: 'GS/OSD6 APAC23 ME-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557576/Nguyen_Van_Trong_ycco2d.jpg' },

                        { name: 'Nguyen Y BAO', id: 'GS/OSD6 APAC23 ME-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763612825/Nguyen_Y_Bao_cwgjqf.png' },

                        // Các nhóm lẻ còn lại (IPO, LOP5)

                        { name: 'Nguyen Thuy VY', id: 'GS/OSD6 APAC23 IPO-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763609408/Nguyen_Thuy_Vy_calqfh.png' },
                        { name: 'Bui Tu Anh THU', id: 'GS/OSD6 APAC23 PS-JP', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763619049/Bui_Tu_Anh_Thu_z0qy7h.jpg' },

                        { name: 'Hoang Khanh LINH', id: 'GS/OSD6 APAC23 PS/LOP5-JP', role: 'Logistics Intern', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763618990/Hoang_Khanh_Linh_itkx7w.jpg' },

                    ],

                ],

            },

            {

                name: 'Digitalization',

                teams: [

                    [

                        { name: 'Phan Thi Ha GIANG', id: 'GS/OSD6-APAC23', role: 'DA & Digitalization', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557578/Phan_Thi_Ha_Giang_hfywsc.jpg' },

                        { name: 'Tran Ngoc DAN', id: 'GS/OSD6-APAC23', role: 'DA & Digitalization', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557583/Tran_Ngoc_Dan_wgbrqn.jpg' },

                        { name: 'Dinh Dang KHOA', id: 'GS/OSD6-APAC23', role: 'DA & Digitalization', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557572/Dinh_Dang_Khoa_q33mxc.jpg' },

                    ],

                ],

            },

        ],

    },

    {

        manager: {

            name: 'Pham Thuy HANG',

            id: 'GS/OSD6-APAC21 & APAC22',

            title: 'Planning & Operations Manager',

            image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557595/Pham_Thuy_Hang_skw1oi.png',

        },

        departments: [

            {

                name: 'Operations',

                teams: [

                    [

                        // Cột 1: Master Data Management & Management Reporting


                        { name: 'Thai Ho Duy PHUONG', id: 'CN/EA', role: 'Master Data Management', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763618902/Thai_Ho_Duy_Phuong_mumou9.jpg' },
                        { name: 'Nguyen Hoai THUAN', id: 'CN/EA', role: 'Master Data Management', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763628653/Nguyen_Hoai_THUAN_mxua3v.png' },

                        { name: 'Pham Minh TUAN', id: 'CN/EA', role: 'Management Reporting', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557594/Pham_Minh_Tuan_vkqzpe.png' },
                        { name: 'Tran Vu Ngoc TRAN', id: 'CN', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763609812/Tran_Vu_Ngoc_Tran_eu0oph.jpg' },

                        { name: 'Pham Hong NGOC', id: 'EA', role: 'Logistics Operations', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557592/Pham_Hong_Ngoc_ulf9vr.jpg' },
                    ]

                ]

            },

            {

                name: 'Source Planning',

                teams: [

                    [

                        // Cột 1: Source Planning (Khu vực ZO)

                        { name: 'Le Lam Huu LOC', id: 'ZO-Indonesia', role: 'Source Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557589/Le_Lam_Huu_Loc_l2somg.png' },

                        { name: 'Dang Thi Viet HA', id: 'ZO-Thailand', role: 'Source Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557588/Dang_Thi_Viet_Ha_pvvfzj.jpg' },
                        { name: 'Phan Thi NA', id: 'ZO-Malaysia', role: 'Source Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557597/Phan_Thi_Na_rc5ine.png' },
                        { name: 'Ly Tan DAT', id: 'ZO-Singapore', role: 'Source Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557589/Ly_Tan_Dat_krcjmv.png' },



                        { name: 'Nguyen Quoc HUY', id: 'ZO-Philippines', role: 'Source Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557590/Nguyen_Quoc_Huy_vkq1bn.png' },

                    ],

                    [

                        // Cột 2: Source Planning (Khu vực JK & CN)

                        { name: 'Nguyen Thi Thanh MINH', id: 'CN-China', role: 'Source Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557592/Nguyen_Thi_Thanh_Minh_lxyb7v.png' },
                        { name: 'Pham Ngan HA', id: 'CN-China', role: 'Source Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557594/Pham_Ngan_Ha_ibiogf.png' },
                        { name: 'Pham Ngoc Uyen PHUONG', id: 'JK-Japan', role: 'Source Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557594/Pham_Ngoc_Uyen_Phuong_ovy6dd.png' },

                        { name: 'Nguyen Duy THANG', id: 'JK-Japan', role: 'Source Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557590/Nguyen_Duy_Thang_wz7o59.jpg' },



                    ],

                ]

            },
            {

                name: 'Demand Planning',

                teams: [


                    [


                        { name: 'Nguyen Thanh TUNG', id: 'ZO-Thailand/Singapore', role: 'Demand Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557591/Nguyen_Thanh_Tung_pk99xq.jpg' },
                        { name: 'Bui Thi Thanh NHAN', id: 'CN-China', role: 'Demand Planning', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557586/Bui_Thi_Thanh_Nhan_mpgckw.png' },



                    ]


                ]

            }

        ]
    },

    {

        manager: {

            name: 'Logistics Projects',

            id: 'GS/OSD6-APAC2',

            title: 'Consulting Experts',

            // image?: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763557595/Pham_Thuy_Hang_skw1oi.png',

        },

        departments: [

            {

                name: 'Logistics Projects Experts',

                teams: [

                    [



                        { name: 'Ta Thanh TU', id: 'GS/OSD6-APAC2', role: 'Logistics Experts', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763623865/Ta_Thanh_Tu_uheout.jpg' },

                    ],
                    [
                        {
                            name: 'Truong Quoc HUNG', id: 'GS/OSD6-APAC2', role: 'Logistics Experts', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763623866/Truong_Quoc_Hung_autxrc.jpg'
                        },
                    ]

                ]

            },



        ]
    }
]

interface FormattedNameProps { name: string, isManager?: boolean }

const FormattedName = ({ name, isManager = false }: FormattedNameProps) => {
    const parts = name.split(' ')
    if (parts.length === 1) return <strong className="font-bold">{name}</strong>
    const lastName = parts.pop()
    const firstName = parts.join(' ')
    return (
        <span className={cn("text-xs text-black transition-colors ", isManager && "text-xl")}>
            {firstName} <strong className="font-bold group-hover:text-bosch_green">{lastName}</strong>
        </span>
    )
}

interface DepartmentProps { department: DepartmentData }

const Department = ({ department }: DepartmentProps) => (
    <div>
        <h3 className="mb-6 border-b-2 border-bosch_blue pb-2 text-xl font-bold text-bosch_blue">
            {department.name}
        </h3>
        <div className="flex flex-col gap-6 md:flex-row">
            {department.teams.map((team, teamIndex) => (
                <div key={teamIndex} className="flex-1 space-y-4">
                    {team.map((member, memberIndex) => (
                        <div key={memberIndex} className="group flex items-center gap-3">
                            <img
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
        <section className="mx-auto flex max-w-7xl flex-col items-center">

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
                            {
                                org.manager.image ?
                                    <img
                                        src={org.manager.image}
                                        alt={org.manager.name}
                                        width={64}
                                        height={64}
                                        className="size-16 shrink-0 rounded-full object-cover"
                                    />
                                    : <div className='size-16'></div>
                            }
                            <div className='max-w-52'>
                                <FormattedName name={org.manager.name} isManager />
                                <p className="mt-1 text-xs font-semibold text-bosch_blue">{org.manager.id}</p>
                                <p className="mt-1 text-sm text-gray-700">{org.manager.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className={cn("grid w-full grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-4", {
                "lg:grid-cols-2 max-w-xl": activeOrganization.departments.length == 1
            })}>
                <div className={cn({
                    "lg:col-span-1": activeOrganization.departments.length >= 2,
                    "lg:col-span-2": activeOrganization.departments.length == 1,
                })}>
                    <Department department={activeOrganization.departments[0]} />
                </div>
                {
                    activeOrganization.departments[1] &&
                    <div className={cn({
                        "lg:col-span-2": activeOrganization.departments.length > 2,
                        "lg:col-span-3": activeOrganization.departments.length == 2,
                    })}>
                        <Department department={activeOrganization.departments[1]} />
                    </div>
                }
                {activeOrganization.departments[2] &&

                    <div className="lg:col-span-1">
                        <Department department={activeOrganization.departments[2]} />
                    </div>
                }
            </div>
        </section>
    )
}

export default OrganizationChart