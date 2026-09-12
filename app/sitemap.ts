import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.daichi-star.com';

    return [
        {
            url: `${baseUrl}/`,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/support`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/profile`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
