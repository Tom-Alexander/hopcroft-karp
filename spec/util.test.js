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
    // @todo
  });
});

describe('createMatrix', () => {
  it('creates an adjacency matrix from the graph', () => {
    // @todo
  });
});

describe('partitionMatrix', () => {
  it('partitions the vertices using the adjacency matrix', () => {
    // @todo
  });
});
