#obj-del
[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
> Remove multiple keys by path - safety.

## Install

```sh
$ npm install --save obj-del
```

##Usage
```js
var del = require('obj-del');

var obj = {
  a: 1,
  b: { c: 1 },
  x: { y: { z: 1 } }
};

del(obj, 'a', 'b.c', 'x.y.z'); // → { b: {}, x: { y: {} } }
```

## License

MIT © [Ariel Mashraki](https://github.com/a8m)
[npm-image]: https://img.shields.io/npm/v/obj-del.svg?style=flat-square
[npm-url]: https://npmjs.org/package/obj-del
[travis-image]: https://img.shields.io/travis/a8m/obj-del.svg?style=flat-square
[travis-url]: https://travis-ci.org/a8m/obj-del
[coveralls-image]: https://img.shields.io/coveralls/a8m/obj-del.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/a8m/obj-del
[david-image]: http://img.shields.io/david/a8m/obj-del.svg?style=flat-square
[david-url]: https://david-dm.org/a8m/obj-del
[license-image]: http://img.shields.io/npm/l/obj-del.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/obj-del.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/obj-del
