// Centralized type definitions to avoid circular imports

export interface ActivityData {
    slug: string;
    title: string;
    date: string;
    author: string;
    mainImages: string[];
    mainImageCaption: string;
    content: string[];
    galleryImages?: string[];
}

export interface ServiceData {
    slug: string;
    title: string;
    hero: {
        paragraph: string;
        customers: string;
        headcount: string;
        functions?: string;
    };
    overview: {
        description: string;
        sections: Array<{
            title?: string;
            content?: string;
            items: Array<{
                label?: string;
                text: string;
            }>;
        }>;
    };
    standardProcess: {
        description: string;
        images: Array<{
            title?: string;
            imagePath: string;
        }>;
    };
    relatedLinks?: Array<{
        href: string;
        linkText: string;
        details: string;
    }>;
}
