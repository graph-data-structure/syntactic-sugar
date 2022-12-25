[js-graph-sugar](http://make-github-pseudonymous-again.github.io/js-graph-sugar)
==

Graph syntactic sugar code bricks for JavaScript.

```js
G.eadd( "a" , "b" ) ;
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-graph-sugar.svg?style=flat)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-graph-sugar/main/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-graph-sugar.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-graph-sugar)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-graph-sugar.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-graph-sugar)
[![Build Status](https://img.shields.io/travis/make-github-pseudonymous-again/js-graph-sugar.svg?style=flat)](https://travis-ci.org/make-github-pseudonymous-again/js-graph-sugar)
[![Coverage Status](https://img.shields.io/coveralls/make-github-pseudonymous-again/js-graph-sugar.svg?style=flat)](https://coveralls.io/r/make-github-pseudonymous-again/js-graph-sugar)
[![Dependencies Status](https://img.shields.io/david/make-github-pseudonymous-again/js-graph-sugar.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-graph-sugar#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-graph-sugar.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-graph-sugar#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/make-github-pseudonymous-again/js-graph-sugar.svg?style=flat)](https://codeclimate.com/github/make-github-pseudonymous-again/js-graph-sugar)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-graph-sugar.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-graph-sugar)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-graph-sugar.svg?style=flat)](https://github.com/make-github-pseudonymous-again/js-graph-sugar/issues)
[![Inline docs](http://inch-ci.org/github/make-github-pseudonymous-again/js-graph-sugar.svg?branch=master&style=shields)](http://inch-ci.org/github/make-github-pseudonymous-again/js-graph-sugar)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-graph-sugar
# or
jspm install npm:@aureooms/js-graph-sugar
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-graph-sugar
```

### bower
```terminal
bower install @aureooms/js-graph-sugar
```

### ender
```terminal
ender add @aureooms/js-graph-sugar
```

### jam
```terminal
jam install @aureooms/js-graph-sugar
```

### spm
```terminal
spm install @aureooms/js-graph-sugar --save
```

### npm
```terminal
npm install @aureooms/js-graph-sugar --save
```

## Require
### jspm
```js
let graphsugar = require( "github:aureooms/js-graph-sugar" ) ;
// or
import graphsugar from '@aureooms/js-graph-sugar' ;
```
### duo
```js
let graphsugar = require( "aureooms/js-graph-sugar" ) ;
```

### component, ender, spm, npm
```js
let graphsugar = require( "@aureooms/js-graph-sugar" ) ;
```

### bower
The script tag exposes the global variable `graphsugar`.
```html
<script src="bower_components/@aureooms/js-graph-sugar/js/dist/graph-sugar.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-graph-sugar" ] , function ( graphsugar ) { ... } ) ;
```
