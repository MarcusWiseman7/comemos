<script lang="ts">
    // types
    import type { PageData } from './$types';
    import type { ICard } from '$lib/ts-interfaces';
    interface IData extends PageData {
        cards: ICard[];
    }

    export let data: IData;

    // icons
    import searchSrc from '$lib/assets/icons/search.svg';

    // helpers
    import { urlFor } from '$lib/image-url';
    import { onMount } from 'svelte';

    // computed
    $: cards = data?.cards;
    $: search = '';
    $: filteredCards = search
        ? cards.filter((card: ICard): boolean =>
              card.title.toLowerCase().replace(' ', '').includes(search.toLowerCase().replace(' ', ''))
          )
        : cards;

    onMount(() => {
        console.log('data :>> ', data);
    });
</script>

<svelte:head>
    <title>Comemos!</title>
</svelte:head>

{#if cards?.length}
    <div class="search">
        <label for="search_input" class="search__label">
            <img src={searchSrc} alt="Search" />
        </label>
        <input type="text" id="search_input" placeholder="Search" bind:value={search} class="search__input" />
    </div>
{/if}

{#if filteredCards?.length}
    <div class="cards">
        {#each filteredCards as card}
            <a href={'/card/' + card._id} class="card">
                <h3 class="card__title">{card.title}</h3>
                <img
                    src={urlFor(card.pic).height(256).format('webp').url()}
                    srcset={urlFor(card.pic)
                        .height(256 * 2)
                        .format('webp')
                        .url()}
                    alt={card.title}
                    class="card__image"
                />
            </a>
        {/each}
    </div>
{:else if search.length > 0}
    <h3 class="text-2xl font-semibold my-4">No recipe cards found for search: "{search}"</h3>
    <h3 class="text-2xl font-semibold">Please try another search...</h3>
{:else}
    <h3 class="text-2xl font-semibold mt-4 mb-6">No recipe cards found, please add some to your sanity studio</h3>
{/if}

<style lang="scss">
    .search {
        display: flex;
        align-items: center;

        &__label {
            margin-right: 12px;
            padding-top: 20px;
            width: 20px;
        }

        &__input {
            color: var(--color-accent);
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
            margin-top: 24px;
            border-radius: 6px;
        }
    }

    .cards {
        @media (min-width: 1024px) {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
            margin: 24px 0;
            cursor: pointer;
        }

        @media (min-width: 1536px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    .card {
        height: 240px;
        width: 100%;
        border-radius: 6px;
        background-color: var(--color-accent);

        &:hover {
            // hover:ring-4 hover:ring-violet-500
        }

        @media (min-width: 1024px) {
            height: 320px;
        }

        &__title {
            font-weight: 600;
            font-size: 24px;
            line-height: 32px;
            height: 64px;
            display: flex;
            align-items: center;
            padding-left: 12px;
        }

        &__image {
            // rounded-b-md
            width: 100%;
            height: 192px;
            object-fit: cover;

            @media (min-width: 1024px) {
                height: 256px;
            }
        }
    }
</style>
