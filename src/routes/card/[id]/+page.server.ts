import sanity from '$lib/sanity';
import type { ICard } from '$lib/ts-interfaces';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const { id } = params;
    const query = `*[_type == 'card' && _id == "${id}"][0]`;
    const res: ICard = await sanity.fetch(query);

    return { data: JSON.stringify(res) };
}) satisfies PageServerLoad
