import type { PageLoad } from './$types';

export const load = (({ data }) => {
    const card = JSON.parse(data.data);
    return { card };
}) satisfies PageLoad;
