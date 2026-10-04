// src/lib/buildTree.js
export function buildTree(paths) {
  const root = { name: '', href: null, children: [] };

  for (const path of paths) {
    const segments = path
      .replace('/src/routes', '')
      .replace('/+page.svx', '')
      .split('/')
      .filter(Boolean)
      .filter((s) => !/^\(.*\)$/.test(s)); // drop route groups like (app)

    if (segments.some((s) => s.includes('['))) continue; // skip dynamic routes

    let node = root;
    for (const seg of segments) {
      let child = node.children.find((c) => c.name === seg);
      if (!child) {
        child = { name: seg, href: null, children: [] };
        node.children.push(child);
      }
      node = child;
    }
    // this node has a real page
    node.href = '/' + segments.join('/');
  }

  const sort = (n) => {
    n.children.sort((a, b) => a.name.localeCompare(b.name));
    n.children.forEach(sort);
  };
  sort(root);

  return root;
}