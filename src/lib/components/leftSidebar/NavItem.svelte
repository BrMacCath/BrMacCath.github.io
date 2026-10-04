<!-- src/lib/components/NavItem.svelte -->
<script>
  import { page } from '$app/state';
  import NavItem from './NavItem.svelte'; // Svelte 5 components can import themselves
    const indents = ['pl-0', 'pl-4', 'pl-8', 'pl-12', 'pl-16'];
  let { node,depth } = $props();
  const label = node.name
    .replace(/-/g, ' ')
    .replace(/^\w/, (c) => c.toUpperCase());

  const isActive = page.url.pathname === node.href;
  const isOpen = node.href && page.url.pathname.startsWith(node.href);
</script>

<li>
  {#if node.children.length}
    <details open={isOpen} class={indents[depth ]}>
      <summary>
        {#if node.href}
          <a href={node.href} aria-current={isActive ? 'page' : undefined}>{label} </a>
        {:else}
          {label}
        {/if}
      </summary>
      <ul>
        {#each node.children as child (child.name)}
          <NavItem node={child} depth={depth+1} />
        {/each}
      </ul>
    </details>
  {:else}
    <a href={node.href} class={indents[depth ]} aria-current={isActive ? 'page' : undefined}>{label}</a>
  {/if}
</li>