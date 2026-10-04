<script>
  import { PanelLeftOpen,PanelLeftClose } from '@lucide/svelte';
  let {openLeftSidebar = $bindable()} = $props()
</script>
<div class="px-4 py-4">
    {#if !openLeftSidebar}
        <PanelLeftOpen onclick={() =>{openLeftSidebar = !openLeftSidebar}}/>
    {:else}
        <PanelLeftClose onclick={() =>{openLeftSidebar = !openLeftSidebar}}/>
    {/if}
</div>
