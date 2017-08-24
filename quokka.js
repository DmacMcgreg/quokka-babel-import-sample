// The config also be placed into package.json or global quokka config,
// see https://quokkajs.com/docs/configuration.html
({
  babel: {
    ignore: 'node_modules\/(?!lodash)'
  }
})

import value from './myModule';
import _xor from 'lodash-es/xor'

console.log(value);
