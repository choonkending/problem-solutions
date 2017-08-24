/*
 *
Given a node from a DOM tree find the node in the same position from an identical DOM tree
A         B

 O        O
 |\       |\
 O O      O O
  /|\      /|\
 O O O    O O O
      \        \
       O        O
 */

const nodeToSearchFor = document.createElement('a');
const treeA = document.createElement('div');
const subTreeA = document.createElement('div')

treeA.appendChild(document.createElement('div'));
treeA.appendChild(subTreeA);
subTreeA.appendChild(document.createElement('div'))
subTreeA.appendChild(document.createElement('div'))

subTreeA.lastElementChild.appendChild(document.createElement('div'));
subTreeA.lastElementChild.appendChild(document.createElement('div'));
subTreeA.lastElementChild.appendChild(document.createElement('div'));
subTreeA.lastElementChild.lastElementChild.appendChild(nodeToSearchFor);

const treeB = document.createElement('div');
const subTreeB = document.createElement('div')

treeB.appendChild(document.createElement('div'));
treeB.appendChild(subTreeB);
subTreeB.appendChild(document.createElement('div'))
subTreeB.appendChild(document.createElement('div'))

subTreeB.lastElementChild.appendChild(document.createElement('div'));
subTreeB.lastElementChild.appendChild(document.createElement('div'));
subTreeB.lastElementChild.appendChild(document.createElement('div'));
subTreeB.lastElementChild.lastElementChild.appendChild(document.createElement('a'));


const isSameNode = (n1, n2) => n1.isSameNode(n2);

const findPositionInTree = tree => node => {
  const dfs = (acc, cur) => {
    if (isSameNode(node, cur)) return acc;
    const children = cur.children;
    if (children.length === 0) {
      acc.pop();
      return acc;
    }
    for (let i = 0; i < children.length; i++) {
      acc.push(i);
      dfs(acc, children[i]);
    }
    return acc;
  };
  return dfs([], tree);
};

const getNodeFromPathInTree = tree => path => {
  let cur = tree;
  path.forEach(i => {
    cur = cur.children[i];
  });
  return cur;
};

const findNodeFromTreeB = (treeA, treeB) => node => {
  const path = findPositionInTree(tree)(node);
  const result = getNodeFromPathInTree(tree)(path);
  return result;
};

/const answer = findNodeFromTreeB(treeA, treeB)(nodeToSearchFor);
console.log("result", answer);/ Invoke it


