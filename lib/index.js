import {
  DUMMY_VERTEX,
  defaultMatch,
  createMatrix,
  partitionMatrix } from './util';

/**
 * Returns a maximum matching of a bipartite graph
 * @param {Object} graph
 */
export function hopcroftKarp(graph) {
  const distance = [];
  const adjacency = createMatrix(graph);
  const partition = partitionMatrix(adjacency);
  const matches = defaultMatch(partition);

  function breadthFirstSearch() {
    const queue = [];

    for (const u in partition.U) {
      if (partition.U.hasOwnProperty(u)) {
        if (matches.U[u] === DUMMY_VERTEX) {
          distance[u] = 0;
          queue.push(u);
        } else distance[u] = Infinity;
      }
    }

    distance[DUMMY_VERTEX] = Infinity;

    while (queue.length > 0) {
      const u = queue.shift();
      if (distance[u] < distance[DUMMY_VERTEX]) {
        for (const v in adjacency[u]) {
          if (adjacency[u].hasOwnProperty(v)) {
            if (distance[matches.V[v]] === Infinity) {
              distance[matches.V[v]] = distance[u] + 1;
              queue.push(matches.V[v]);
            }
          }
        }
      }
    }

    return distance[DUMMY_VERTEX] !== Infinity;
  }

  function depthFirstSearch(u) {
    if (u !== DUMMY_VERTEX) {
      for (const v in adjacency[u]) {
        if (adjacency[u].hasOwnProperty(v)) {
          if (distance[matches.V[v]] === distance[u] + 1) {
            if (depthFirstSearch(matches.V[v])) {
              matches.V[v] = u;
              matches.U[u] = v;
              return true;
            }
          }
        }
      }

      distance[u] = Infinity;
      return false;
    }

    return true;
  }

  while (breadthFirstSearch()) {
    for (const u in partition.U) {
      if (partition.U.hasOwnProperty(u)) {
        if (matches.U[u] === DUMMY_VERTEX) {
          depthFirstSearch(u);
        }
      }
    }
  }

  return matches.U;
}
