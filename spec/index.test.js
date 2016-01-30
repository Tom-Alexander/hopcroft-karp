import chai from 'chai';
const { expect } = chai;
import { hopcroftKarp } from '../lib/index';

describe('hopcroftKarp', () => {

  it('returns the correct matching', () => {
    expect(hopcroftKarp({
      U0: ['V0', 'V1'],
      U1: ['V0', 'V4'],
      U2: ['V2', 'V3'],
      U3: ['V0', 'V4'],
      U4: ['V1', 'V3']
    })).to.deep.equal({
      U0: 'V1',
      U1: 'V4',
      U2: 'V2',
      U3: 'V0',
      U4: 'V3'
    });
  });

  it('returns the correct matching for only two vertices', () => {
    expect(hopcroftKarp({
      U0: ['V0']
    })).to.deep.equal({
      U0: 'V0'
    });
  });

  it('returns an empty object when no graph is given', () => {
    expect(hopcroftKarp({})).to.deep.equal({});
  });


  it('returns null when a pair cannot be matched', () => {
    expect(hopcroftKarp({
      U0: ['V0'],
      U1: ['V0']
    })).to.deep.equal({
      U0: 'V0',
      U1: null
    });
  });

});
