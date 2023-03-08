<script lang="ts">
    // types
    import type { PageData } from './$types';
    import type { ICard } from '$lib/ts-interfaces';
    interface IData extends PageData {
        card: ICard;
    }

    // helpers
    import { urlFor } from '$lib/image-url';

    export let data: IData;

    const { title, ingredients, pic, steps } = data?.card;
</script>

<svelte:head>
    <title>{'Comemos!' + (title ? ' | ' + title : '')}</title>
</svelte:head>

{#if title}
    <div class="card">
        <div>
            <h1 class="card__title">{title}</h1>

            <!-- Desktop ingredients -->
            {#if ingredients?.length}
                <div class="card__ingredients card__ingredients--desktop">
                    <h3 class="card__subtitle">Ingredients</h3>

                    {#each ingredients as ingredient}
                        <p class="card__ingredient">
                            <span class="card__ingredient__diamond">&diam;</span>{ingredient}
                        </p>
                    {/each}
                </div>
            {/if}
        </div>

        <img
            src={urlFor(pic).height(256).format('webp').url()}
            srcset={urlFor(pic).height(512).format('webp').url()}
            alt={title}
            class="card__image"
        />
    </div>

    <!-- Mobile ingredients -->
    {#if ingredients?.length}
        <div class="card__ingredients card__ingredients--mobile">
            <h3 class="card__subtitle">Ingredients</h3>

            {#each ingredients as ingredient}
                <p class="card__ingredient">
                    <span class="card__ingredient__diamond">&diam;</span>{ingredient}
                </p>
            {/each}
        </div>
    {/if}

    {#if steps?.length}
        <div class="card__instructions">
            <h3 class="card__subtitle">Instructions</h3>
            {#each steps as step, i}
                <p class="card__instruction">
                    <span>{i + 1})</span><span>{step}</span>
                </p>
            {/each}
        </div>
    {/if}
{/if}

<style lang="scss">
    .card {
        @media (min-width: 600px) {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
            margin: 24px 0;
        }

        &__title {
            font-weight: 600;
            margin-bottom: 12px;
            font-size: 36px;
            line-height: 40px;
        }

        &__subtitle {
            font-weight: 600;
            margin-top: 12px;
            margin-bottom: 4px;
            font-size: 24px;
            line-height: 32px;
            text-align: center;
            text-decoration: underline;

            @media (min-width: 600px) {
                text-align: left;
            }
        }

        &__ingredients {
            display: grid;
            gap: 6px;

            &--mobile {
                margin-bottom: 24px;
                @media (min-width: 600px) {
                    display: none;
                }
            }

            &--desktop {
                display: none;

                @media (min-width: 600px) {
                    margin-left: 16px;
                    display: grid;
                }
            }
        }

        &__ingredient {
            font-weight: 600;
            display: flex;
            align-items: center;
            font-size: 18px;
            line-height: 28px;

            &__diamond {
                font-size: 24px;
                line-height: 32px;
                margin-right: 8px;
                font-weight: 400;
            }
        }

        &__image {
            width: 100%;
            object-fit: contain;
            height: 256px;
            border-radius: 8px;
            box-shadow: var(--shadow-card);
            background-color: var(--color-accent);
        }

        &__instructions {
            margin-bottom: 24px;
            display: grid;
            gap: 22px;

            @media (min-width: 600px) {
                margin-left: 16px;
            }
        }

        &__instruction {
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            display: flex;
            gap: 14px;
        }
    }
</style>
