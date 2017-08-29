const invokeFunctionOnLeafNodes = (fn, node) => {
  if (node.children.length === 0) return fn(node);
  Array.from(node.children).forEach(c => {
    return invokeFunctionOnLeafNodes(fn, c);
  });
};
