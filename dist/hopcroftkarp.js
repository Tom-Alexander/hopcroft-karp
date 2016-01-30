(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hopcroftCarp"] = factory();
	else
		root["hopcroftCarp"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hopcroftKarp = hopcroftKarp;

	var _util = __webpack_require__(1);

	/**
	 * Returns a maximum matching of a bipartite graph
	 * @param {Object} graph
	 */
	function hopcroftKarp(graph) {
	  var distance = [];
	  var adjacency = (0, _util.createMatrix)(graph);
	  var partition = (0, _util.partitionMatrix)(adjacency);
	  var matches = (0, _util.defaultMatch)(partition);

	  function breadthFirstSearch() {
	    var queue = [];

	    for (var u in partition.U) {
	      if (partition.U.hasOwnProperty(u)) {
	        if (matches.U[u] === _util.DUMMY_VERTEX) {
	          distance[u] = 0;
	          queue.push(u);
	        } else distance[u] = Infinity;
	      }
	    }

	    distance[_util.DUMMY_VERTEX] = Infinity;

	    while (queue.length > 0) {
	      var u = queue.shift();
	      if (distance[u] < distance[_util.DUMMY_VERTEX]) {
	        for (var v in adjacency[u]) {
	          if (adjacency[u].hasOwnProperty(v)) {
	            if (distance[matches.V[v]] === Infinity) {
	              distance[matches.V[v]] = distance[u] + 1;
	              queue.push(matches.V[v]);
	            }
	          }
	        }
	      }
	    }

	    return distance[_util.DUMMY_VERTEX] !== Infinity;
	  }

	  function depthFirstSearch(u) {
	    if (u !== _util.DUMMY_VERTEX) {
	      for (var v in adjacency[u]) {
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
	    for (var u in partition.U) {
	      if (partition.U.hasOwnProperty(u)) {
	        if (matches.U[u] === _util.DUMMY_VERTEX) {
	          depthFirstSearch(u);
	        }
	      }
	    }
	  }

	  return matches.U;
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reflect = reflect;
	exports.defaultMatch = defaultMatch;
	exports.createMatrix = createMatrix;
	exports.partitionMatrix = partitionMatrix;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var DUMMY_VERTEX = exports.DUMMY_VERTEX = null;

	/**
	 * returns an object witch has identical values as its keys
	 * @param  {Array} array
	 * @return {Object}
	 */
	function reflect(array) {
	  return array.reduce(function (b, v) {
	    return Object.assign(b, _defineProperty({}, v, v));
	  }, {});
	}

	/**
	 * Initialzes each of the potential matches with the dummy vertex
	 * @param  {Object} partition
	 * @return {Object}
	 */
	function defaultMatch(partition) {
	  return {
	    U: Object.keys(partition.U).reduce(function (a, v) {
	      return Object.assign(a, _defineProperty({}, v, DUMMY_VERTEX));
	    }, {}),
	    V: Object.keys(partition.V).reduce(function (a, v) {
	      return Object.assign(a, _defineProperty({}, v, DUMMY_VERTEX));
	    }, {})
	  };
	}

	/**
	 * creates an adjacency matrix from the supplied graph
	 * @param  {Object} graph
	 * @return {Object}
	 */
	function createMatrix(graph) {
	  return Object.keys(graph).reduce(function (a, key) {
	    return Object.assign(a, _defineProperty({}, key, reflect(graph[key])));
	  }, {});
	}

	/**
	 * returns the two disjoint sets of vertices from the adjacency matrix
	 * @param  {Object} matrix
	 * @return {Object}
	 */
	function partitionMatrix(matrix) {
	  return {
	    U: reflect(Object.keys(matrix)),
	    V: reflect(Object.keys(matrix).reduce(function (a, k) {
	      return a.concat(Object.keys(matrix[k]));
	    }, []).filter(function (v, i, array) {
	      return array.indexOf(v) === i;
	    }))
	  };
	}

/***/ }
/******/ ])
});
;