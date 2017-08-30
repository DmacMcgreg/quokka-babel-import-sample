// The config also be placed into package.json or global quokka config,
// see https://quokkajs.com/docs/configuration.html
({
  env: {
    params: {
      env: "BABEL_ENV=test"
    }
  },
  babel: {
    ignore: 'node_modules\/(?!lodash-es)'
  }
})


import value from './myModule';
import _xor from 'lodash-es/xor'


console.log(_xor);

