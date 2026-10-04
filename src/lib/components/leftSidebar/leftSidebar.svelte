<!-- src/lib/components/Sidebar.svelte -->
<script>
  import { buildTree } from './buildTree.js';
  import NavItem from './NavItem.svelte';

  const modules = import.meta.glob('/src/routes/**/+page.svx');
  const tree = buildTree(Object.keys(modules));
  const depth = 0;
  console.log(tree)
</script>

<nav class="px-4">
  <ul>
    <li><a href="/">Home</a></li>
    {#each tree.children as node (node.name)}
      <NavItem {node} {depth}/>
    {/each}
  </ul>
</nav>