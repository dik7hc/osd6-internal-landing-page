import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from 'next/image'

const eventsData = [
    {
        id: 1,
        imageSrc: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763569492/TransPlan_1_fkg3hn.jpg",
        title: "TransPlan Hub Experience Day",
        description: "On September 9th, 2025, our department has hosted an experience day, where we showcased our services to other departments in RBVN. As the event ends with a lasting impression, a big appreciation goes to GEM team for organizing this event, our amazing moderator – Ryan, and all our speakers who were excellent in explaining our services to a non-logistics audience – anh Phương, anh Huy, chị Sanny, anh Lộc, anh Đạt, anh Minh, chị Thương, chị Trân, chị Bình, anh Hậu, and chị Giang."
    },
    {
        id: 2,
        imageSrc: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763569581/MALO_Visit_cbpmoe.png",
        title: "Welcome MA/LO Visit",
        description: "On September 4th – 5th, 2025, Philipp and Matthias have visited our team with a presentation that aimed to appreciate and ignite us with the mindset of building a #promisechain. In contrast to the old supply chain of storing goods and selling them to customer, this #promisechain is a circular loop that include planned promises being translated into full deliveries, going full circle back to the customer. Being a customer-forward model, many achievements have been made, across customer satisfaction, inventory, stock availability, and forecast accuracy."
    },
    {
        id: 3,
        imageSrc: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763569421/UXcellent1_lfup0h.jpg",
        title: "Digi-awareness Session#4 ",
        description: "On the July 18th, 2025, we had our 4th Digi-awareness session, learning about the different tips & tricks of SAP. Starting from the logon and home screen, we can add our favorite system / t-codes to top section, create folders to help us with navigation, change languages, and save these settings as a file for later uploads. Then, navigating from our home screen to each t-codes, some shortcuts can be used to open new ones / new windows, and close the current one even while running. Inside our t-codes, further personalization can be carried out with creating & saving variants, creating & saving layouts, and filtering & sorting tables before downloading as an excel file."
    }
]

const ExperienceDayCard = ({ imageSrc, description, title }: any) => {
    return (
        <Card className="group relative overflow-hidden border-none rounded-none bg-gray-200 cursor-pointer p-0">
            <div>
                <Image
                    src={imageSrc}
                    alt={title}
                    width={1200}
                    height={800}
                    className="w-full h-auto aspect-[4/3] object-cover"
                />
                <div className="p-8">
                    <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                        {title}
                    </h3>
                </div>
            </div>

            <div
                className="absolute inset-0 bg-gray-200  flex flex-col
                   opacity-0 group-hover:opacity-100
                   transform-gpu translate-y-4 group-hover:translate-y-0
                   transition-all duration-300 ease-in-out"
            >
                <h3 className="text-4xl font-bold text-slate-900 leading-tight p-8 pb-4">
                    {title}
                </h3>
                <div className="bg-gray-300 h-full px-6 py-4 flex flex-col justify-between">
                    <p className=" w-fit text-xl text-slate-700 leading-relaxed overflow-hidden text-ellipsis line-clamp-5" title={description}>
                        {description}
                    </p>
                    <Button
                        variant="outline"
                        className="mt-auto self-start border-blue-600 text-blue-600 bg-transparent 
                        hover:bg-blue-600 hover:text-white rounded-sm px-4 py-2 h-auto
                        font-semibold"
                    >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default function ExperienceSection() {
    return (
        <section className="">
            <div className="mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Our Activities
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eventsData.map((event) => (
                    <ExperienceDayCard
                        key={event.id}
                        imageSrc={event.imageSrc}
                        description={event.description}
                        title={event.title}
                    />
                ))}
            </div>
        </section>
    )
}