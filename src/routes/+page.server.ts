import sanity from '$lib/sanity';
import type { PageServerLoad } from './$types';

export const load = (async ({ }) => {
    const query = `*[_type == 'card']`;
    const res = await sanity.fetch(query);

    return { data: JSON.stringify(res) };
}) satisfies PageServerLoad;
