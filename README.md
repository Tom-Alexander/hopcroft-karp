# Hopcroft-Karp

[![Build Status](https://travis-ci.org/Tom-Alexander/hopcroft-karp.svg?branch=master)](https://travis-ci.org/Tom-Alexander/hopcroft-karp)

This is an implementation of the Hopcroft-Karp algorithm used in finding the
maximum matching of a bipartite graph. It is useful for solving problems such
as task assignment/scheduling.

## Installation

```bash
npm install hopcroft-karp
```

## Usage

The following example optimally assigns users to issues that they could be familiar with. The result will be an object literal that contains the matched pairs. If a pair is unmatched the vertex will be assigned to `null`.

```javascript
import hopcroftKarp from 'hopcroft-karp'

const result = hopcroftKarp({
  'Gustav': ['#35', '#29'],
  'Hermann': ['#35', '#16'],
  'Malcolm': ['#41', '#24'],
  'Abraham': ['#35', '#16'],
  'Gunther': ['#29', '#24']
});
```

## License

The MIT License (MIT)

Copyright (c) Tom Alexander

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
