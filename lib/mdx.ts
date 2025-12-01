import 'server-only';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Base content directory
const contentDirectory = path.join(process.cwd(), 'content');

export interface Activity {
    slug: string;
    frontmatter: {
        title: string;
        date: string;
        description: string;
        author?: string;
        tags?: string[];
        featuredImage?: string;
        published?: boolean;
    };
    content: string;
}

export interface Service {
    slug: string;
    frontmatter: {
        title: string;
        date: string;
        description: string;
        author?: string;
        tags?: string[];
        featuredImage?: string;
        published?: boolean;
    };
    content: string;
}

/**
 * Convert title to URL-safe slug
 * Removes non-alphanumeric characters, converts to lowercase, replaces spaces with hyphens
 */
export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric except spaces and hyphens
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
}

// ============================================================
// ACTIVITIES FUNCTIONS
// ============================================================

const activitiesDirectory = path.join(contentDirectory, 'activities');

/**
 * Get all activity slugs for static generation
 * Note: Applies generateSlug() to ensure URL-safe slugs, even if filenames are already in slug format
 */
export function getAllActivitySlugs(): string[] {
    if (!fs.existsSync(activitiesDirectory)) {
        return [];
    }

    const files = fs.readdirSync(activitiesDirectory);
    return files
        .filter(file => file.endsWith('.mdx'))
        .map(file => file.replace(/\.mdx$/, ''))
        .map(slug => generateSlug(slug));
}

/**
 * Get a single activity by slug
 * Note: Expects the slug to match the filename. If filenames are already in slug format,
 * this works seamlessly.
 */
export function getActivityBySlug(slug: string): Activity | null {
    try {
        const filePath = path.join(activitiesDirectory, `${slug}.mdx`);
        
        if (!fs.existsSync(filePath)) {
            return null;
        }

        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            frontmatter: {
                title: data.title || 'Untitled',
                date: data.date || new Date().toISOString(),
                description: data.description || '',
                author: data.author,
                tags: data.tags || [],
                featuredImage: data.featuredImage,
                published: data.published ?? true, // Default to true if not specified
            },
            content,
        };
    } catch (error) {
        console.error(`Error reading activity: ${slug}`, error);
        return null;
    }
}

/**
 * Get all activities (sorted by date, published only)
 */
export function getAllActivities(): Activity[] {
    const slugs = getAllActivitySlugs();
    return slugs
        .map(slug => getActivityBySlug(slug))
        .filter((activity): activity is Activity => 
            activity !== null && Boolean(activity.frontmatter.published)
        )
        .sort((a, b) => 
            new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
        );
}

/**
 * Get all unique tags from all activities
 */
export function getActivitiesTags(): string[] {
    const activities = getAllActivities();
    const tags: string[] = [];
    activities.forEach(activity => tags.push(...activity.frontmatter.tags || []));
    return [...new Set(tags)];
}

// ============================================================
// SERVICES FUNCTIONS
// ============================================================

const servicesDirectory = path.join(contentDirectory, 'services');

/**
 * Get all service slugs for static generation
 * Note: Applies generateSlug() to ensure URL-safe slugs, even if filenames are already in slug format
 */
export function getAllServiceSlugs(): string[] {
    if (!fs.existsSync(servicesDirectory)) {
        return [];
    }

    const files = fs.readdirSync(servicesDirectory);
    return files
        .filter(file => file.endsWith('.mdx'))
        .map(file => file.replace(/\.mdx$/, ''));
}

/**
 * Get a single service by slug
 * Note: Expects the slug to match the filename. If filenames are already in slug format,
 * this works seamlessly.
 */
export function getServiceBySlug(slug: string): Service | null {
    try {
        const filePath = path.join(servicesDirectory, `${slug}.mdx`);
        
        if (!fs.existsSync(filePath)) {
            return null;
        }

        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            frontmatter: {
                title: data.title || 'Untitled',
                date: data.date || new Date().toISOString(),
                description: data.description || '',
                author: data.author,
                tags: data.tags || [],
                featuredImage: data.featuredImage,
                published: data.published ?? true, // Default to true if not specified
            },
            content,
        };
    } catch (error) {
        console.error(`Error reading service: ${slug}`, error);
        return null;
    }
}

/**
 * Get all services (sorted by date, published only)
 */
export function getAllServices(): Service[] {
    const slugs = getAllServiceSlugs();
    return slugs
        .map(slug => getServiceBySlug(slug))
        .filter((service): service is Service => 
            service !== null && Boolean(service.frontmatter.published)
        )
        .sort((a, b) => 
            new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
        );
}

/**
 * Get all unique tags from all services
 */
export function getServicesTags(): string[] {
    const services = getAllServices();
    const tags: string[] = [];
    services.forEach(service => tags.push(...service.frontmatter.tags || []));
    return [...new Set(tags)];
}
