var cover = require('./lib/cover'),
  serialize = require('./lib/serialize');

require('array.from').shim();

module.exports = function(s, b, d, a) {
  var t = Array.from(s);
  t.sort();
  return serialize({
    l: '',
    c: cover(t)
  }, b, d, a);
};
