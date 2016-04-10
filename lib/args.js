function args() {
  var i = 2, str = process.argv[i++],
    s = process.argv[i++] || ',',
    p = process.argv[i++] || '(',
    d = process.argv[i++] || '|',
    t = process.argv[i++] || ')';

  return {
    string: str,
    separator: s,
    preamble: p,
    delimiter: d,
    terminator: t
  };
}
module.exports = args;
