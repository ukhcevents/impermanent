import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file, glob } from 'astro/loaders';

const shows = defineCollection({
    loader: file('./src/lib/shows.json'),
    schema: z.object({
        date: z.coerce.date(),
        title: z.string(),
        link: z.string(),
    }),
});

const releases = defineCollection({
    loader: glob({
        base: './src/pages/releases',
        pattern: '**/[^_]*.{md,mdx}',
    }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
    }),
});

export const collections = { shows, releases };