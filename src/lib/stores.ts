import { readable, writable } from 'svelte/store';

/**
 * WRITABLE EXPORTS
 */
export let globalPopup = writable(null);

/**
 * READABLE EXPORTS
 */
export const btnClass = readable(
    'rounded-lg font-semibold text-xl px-3 lg:px-8 py-2 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 flex justify-center items-center cursor-pointer'
);
