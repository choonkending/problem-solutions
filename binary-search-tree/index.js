// Find the first bad revision
const isBad = o => o.v === "bad";

function findBadRevision(revisions) {
  console.log("revisions", revisions);
  if (revisions.length === 1) return revisions[0];
  if (revisions.length === 2) return isBad(revisions[0]) ? revisions[0]: revisions[1];
  const middle = Math.floor(revisions.length / 2);
  if (isBad(revisions[middle])) {
    return findBadRevision(revisions.slice(0, middle + 1));
  }
  return findBadRevision(revisions.slice(middle));
}

const test = [
  { k: 0, v: "good "},
  { k: 1, v: "good "},
  { k: 2, v: "good "},
  { k: 3, v: "good "},
  { k: 4, v: "bad" },
  { k: 5, v: "bad" },
  { k: 6, v: "bad" },
  { k: 7, v: "bad" }
];
const test2 = [{k:0, v:"bad"}];
const test3 = [{k:0, v:"good"}, {k:1, v:"good"}, {k:2, v:"bad"}];
console.log("results 1 --", findBadRevision(test));
console.log("results 2 --", findBadRevision(test2));
console.log("results 3 --", findBadRevision(test3));
