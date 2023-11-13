/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  if (graph.length === 2) return [[0, 1]];
  let allPaths = [];
  const initialNode = graph[0];
  const lastIndex = graph.length - 1;
  return getBranchPath(initialNode, [0], graph, allPaths, 0, lastIndex).filter(
    (path) => {
      return !isNaN(path[0]);
    }
  );
};

const getBranchPath = (
  node,
  branchArray,
  graph,
  allPaths,
  currentIndex,
  lastIndex
) => {
  if (currentIndex === lastIndex) {
    return branchArray;
  } else {
    node.forEach((visits) => {
      let addToBranch = branchArray.concat([visits]);
      allPaths.push(
        getBranchPath(
          graph[visits],
          addToBranch,
          graph,
          allPaths,
          visits,
          lastIndex
        )
      );
    });
    return allPaths;
  }
};
