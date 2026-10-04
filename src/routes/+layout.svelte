<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
  import LeftSidebar from '$lib/components/leftSidebar/leftSidebar.svelte';
	let openLeftSidebar:boolean = $state(false)
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header bind:openLeftSidebar></Header>
<main>
	<div class="flex">
		{#if openLeftSidebar}
			<LeftSidebar/>
		{/if}
		<div class="px-6 pb-6">
			{@render children()}
		</div>
	</div>
	
</main>
<Footer></Footer>