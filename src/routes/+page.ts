import type { PageLoad } from './$types';

export const load = (({ data }) => {
    const cards = JSON.parse(data.data);
    return { cards };
}) satisfies PageLoad;
