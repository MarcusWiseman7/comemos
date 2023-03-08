<script lang="ts">
    // main styles
    import '$lib/scss/main.scss';

    // components
    import CLoading from '$lib/components/CLoading.svelte';
</script>

<svelte:head>
    <title>Comemos</title>
</svelte:head>

<div class="layout">
    <header class="header">
        <a href="/">Comemos!</a>
    </header>

    <main class="page">
        <slot />
    </main>

    <footer class="footer">
        Marcus Wiseman &copy; {new Date().getFullYear()}
    </footer>

    {#if false}
        <CLoading />
    {/if}
</div>

<style lang="scss">
    .layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
        min-height: 100vh;
        color: #fff;
        background-color: var(--color-main-bg);
        overflow-x: hidden;
        user-select: none;
        padding-top: 80px;
    }

    .header {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: var(--z-header);
        padding: 0 16px;
        margin-bottom: 24px;
        height: 80px;
        background-color: var(--color-header-bg);
        box-shadow: var(--shadow-bold);
        font-weight: 600;
        font-size: 36px;

        @media (min-width: 1024px) {
            padding: 0 40px;
        }
    }

    .page {
        min-height: max-content;
        width: 100%;
        padding: 0 14px 30px;

        @media (min-width: 1024px) {
            width: 66.666667%;
            max-width: 896px;
            padding: 0 0 30px;
        }
    }

    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 16px 0;
    }
</style>
