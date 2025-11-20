import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import Mock from '@/lib/mock-data'
import { ActivityData } from '@/app/our-activities/[slug]/page'

export const ExperienceDayCard = ({ content, mainImageCaption, mainImages, slug, title }: Pick<ActivityData , 'title' | "mainImages" | "slug" | "mainImageCaption" | "content">) => {
    const description = content[0] ?? ""
    const imageSrc = mainImages[0] ?? ""
    return (
        <Card className="group relative overflow-hidden border-none rounded-none bg-gray-200 cursor-pointer p-0">
            <div>
                <Image
                    src={imageSrc}
                    alt={mainImageCaption}
                    width={1200}
                    height={800}
                    className="w-full h-auto aspect-[4/3] object-cover"
                />
                <div className="p-8">
                    <h3 className="text-3xl font-bold text-slate-900 leading-tight line-clamp-2">
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
                <h3 className="text-4xl font-bold text-slate-900 leading-tight p-8 line-clamp-2" title={title}>
                    {title}
                </h3>
                <div className="bg-gray-300 h-full px-6 py-4 flex flex-col justify-between">
                    <p className=" w-fit text-xl text-slate-700 leading-relaxed overflow-hidden text-ellipsis line-clamp-5" title={description}>
                        {description}
                    </p>
                    <Link href={`/our-activities/${slug.trim()}`}>
                        <Button
                            variant="outline"
                            className="mt-auto self-start border-blue-600 text-blue-600 bg-transparent 
                            hover:bg-blue-600 hover:text-white rounded-sm px-4 py-2 h-auto
                            font-semibold"
                        >
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
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
                {Mock.Activities.slice(0,3).map((activity, index) => (
                    <ExperienceDayCard
                        key={index}
                        content={activity.content}
                        mainImageCaption={activity.mainImageCaption}
                        mainImages={activity.mainImages}
                        slug={activity.slug}
                        title={activity.title}
                    />
                ))}
            </div>
        </section>
    )
}