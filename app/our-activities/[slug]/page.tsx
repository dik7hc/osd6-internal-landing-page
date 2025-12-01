import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllActivitySlugs, getActivityBySlug } from '@/lib/mdx';
import { getMDXComponents } from '@/mdx-components';

interface ActivitiesPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const mdxComponents = getMDXComponents({});

// Generate static paths for all activities
export async function generateStaticParams() {
    const slugs = getAllActivitySlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ActivitiesPageProps): Promise<Metadata> {
    const { slug } = await params;
    const activity = getActivityBySlug(slug);

    if (!activity) {
        return {
            title: 'Activity | SD6 | Bosch Việt Nam',
        };
    }

    return {
        title: `${activity.frontmatter.title} | SD6 | Bosch Việt Nam`,
        description: activity.frontmatter.description,
    };
}

const PageBreadCrumb = ({ title }: { title: string }) => {
    return (<Breadcrumb className="mb-4">
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/our-activities">Our Activities</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>)
}

const ServiceHighlightPage = async ({ params }: ActivitiesPageProps) => {
    const { slug } = await params;
    const highlight = getActivityBySlug(slug);

    if (!highlight) {
        notFound();
    }

    const { frontmatter, content } = highlight;

    return (
        <>
            <PageBreadCrumb title={frontmatter.title}/>
            <div className="my-8 flex items-start justify-between">
                <div>
                    <h1 className="text-5xl font-bold">{frontmatter.title}</h1>
                    <p className="mt-4 text-lg tracking-tight text-gray-600">
                        {frontmatter.description}
                    </p>
                </div>
                <span className="shrink-0 pt-4 text-gray-500">
                    {new Date(frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </span>
            </div>

            <div className="leading-relaxed text-gray-700">
                <div className="prose prose-gray max-w-none">
                    <MDXRemote source={content} components={mdxComponents} />
                </div>

                <div className="clear-both"></div>
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-4">
                <p className="text-gray-600">{frontmatter.author || 'GS/OSD Team'}</p>
                {frontmatter.tags && frontmatter.tags.length > 0 && (
                    <div className="flex gap-4 text-gray-500">
                        {frontmatter.tags.map((tag, i) => (
                            <span key={i}>#{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default ServiceHighlightPage;