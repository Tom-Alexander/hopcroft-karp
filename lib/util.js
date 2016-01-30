export const DUMMY_VERTEX = null;

/**
 * returns an object witch has identical values as its keys
 * @param  {Array} array
 * @return {Object}
 */
export function reflect(array) {
  return array.reduce(
      (b, v) => Object.assign(b, { [v]: v }), {}
  );
}

/**
 * Initialzes each of the potential matches with the dummy vertex
 * @param  {Object} partition
 * @return {Object}
 */
export function defaultMatch(partition) {
  return {
    U: Object.keys(partition.U)
      .reduce((a, v) => Object.assign(a, { [v]: DUMMY_VERTEX }), {}),
    V: Object.keys(partition.V)
      .reduce((a, v) => Object.assign(a, { [v]: DUMMY_VERTEX }), {}),
  };
}

/**
 * creates an adjacency matrix from the supplied graph
 * @param  {Object} graph
 * @return {Object}
 */
export function createMatrix(graph) {
  return Object.keys(graph).reduce(
      (a, key) => Object.assign(a, {
        [key]: reflect(graph[key]),
      }), {}
  );
}

/**
 * returns the two disjoint sets of vertices from the adjacency matrix
 * @param  {Object} matrix
 * @return {Object}
 */
export function partitionMatrix(matrix) {
  return {
    U: reflect(Object.keys(matrix)),
    V: reflect(Object.keys(matrix).reduce(
        (a, k) => a.concat(Object.keys(matrix[k])), [])
        .filter((v, i, array) => array.indexOf(v) === i)),
  };
}
