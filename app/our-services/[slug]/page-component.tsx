import { notFound } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import type { Metadata } from "next"
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllServiceSlugs, getServiceBySlug } from '@/lib/mdx';
import { getMDXComponents } from '@/mdx-components';

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

const mdxComponents = getMDXComponents({});

// Generate static paths for all services
export async function generateStaticParams() {
    const slugs = getAllServiceSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: 'Service | SD6 | Bosch Việt Nam',
        };
    }

    return {
        title: `${service.frontmatter.title} | SD6 | Bosch Việt Nam`,
        description: service.frontmatter.description,
    };
}

const PageBreadCrumb = ({ title }: { title: string }) => {
    return (
        <Breadcrumb className="mb-6">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Our Services - {title}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

const ServicePage = async ({ params }: ServicePageProps) => {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    const { frontmatter, content } = service;

    return (
        <main className="mx-auto max-w-7xl bg-white px-4 py-12 font-sans text-gray-800 sm:px-6 lg:px-8">
            <PageBreadCrumb title={frontmatter.title} />

            {/* Header section with title and metadata */}
            <div className="mb-8">
                <h1 className="mb-4 text-4xl font-bold text-gray-900">{frontmatter.title}</h1>
                {frontmatter.description && (
                    <p className="mb-4 max-w-5xl text-lg text-gray-700">
                        {frontmatter.description}
                    </p>
                )}
                <span className="text-gray-500">
                    Last Updated: {new Date(frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </span>
            </div>

            {/* MDX Content */}
            <div className="leading-relaxed text-gray-700">
                <div className="prose prose-gray max-w-none">
                    <MDXRemote source={content} components={mdxComponents} />
                </div>
                <div className="clear-both"></div>
            </div>

            {/* Footer with author and tags */}
            <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-4">
                <p className="text-gray-600">{frontmatter.author || 'SD6 Team'}</p>
                {frontmatter.tags && frontmatter.tags.length > 0 && (
                    <div className="flex gap-4 text-gray-500">
                        {frontmatter.tags.map((tag, i) => (
                            <span key={i}>#{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}

export default ServicePage
