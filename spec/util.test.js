import chai from 'chai';
const { expect } = chai;
import {
  reflect,
  DUMMY_VERTEX,
  defaultMatch,
  createMatrix,
  partitionMatrix } from '../lib/util';

describe('reflect', () => {

  it('reflects an array of strings', () => {
    expect(reflect(['foo', 'bar', 'baz'])).to.be.deep.equal({
      foo: 'foo', bar: 'bar', baz: 'baz'
    });
  });

  it('reflects an array of numbers', () => {
    expect(reflect([1, 2, 3])).to.be.deep.equal({
      1: 1, 2: 2, 3: 3
    });
  });

  it('reflects an empty array', () => {
    expect(reflect([])).to.be.deep.equal({});
  });

});

describe('defaultMatch', () => {
  it('creates a match object with the correct initial values', () => {
    expect(defaultMatch({
      U: {'U0': 'U0', 'U1': 'U1'},
      V: {'V0': 'V0', 'V1': 'V1', 'V4': 'V4'},
    })).to.be.deep.equal({
      U: {'U0': DUMMY_VERTEX, 'U1': DUMMY_VERTEX},
      V: {'V0': DUMMY_VERTEX, 'V1': DUMMY_VERTEX, 'V4': DUMMY_VERTEX},
    });
  });
});

describe('createMatrix', () => {
  it('creates an adjacency matrix from the graph', () => {
    expect(createMatrix({
      U0: ['V0', 'V1'],
      U1: ['V0', 'V4'],
    })).to.be.deep.equal({
      U0: {'V0': 'V0', 'V1': 'V1'},
      U1: {'V0': 'V0', 'V4': 'V4'},
    });
  });
});

describe('partitionMatrix', () => {
  it('partitions the vertices using the adjacency matrix', () => {
    expect(partitionMatrix({
      U0: {'V0': 'V0', 'V1': 'V1'},
      U1: {'V0': 'V0', 'V4': 'V4'},
    })).to.be.deep.equal({
      U: {'U0': 'U0', 'U1': 'U1'},
      V: {'V0': 'V0', 'V1': 'V1', 'V4': 'V4'},
    });
  });
});
