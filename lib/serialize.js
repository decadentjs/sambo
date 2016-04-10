function serialize(r, b, d, a, n) {
  if (r === null) {
    return '';
  }
  var l = [r.l], c;
  if (r.c.length === 0) {
    return l;
  }
  if (r.c.length === 1) {
    c = [serialize(r.c[0], b, d, a, true)];
  }
  else {
    c = [r.c.map(function(c) {
      return serialize(c, b, d, a, true);
    }).join(d)];
    if (n) {
      c = [b].concat(c).concat([a]);
    }
  }
  return l.concat(c).join('');
}

module.exports = serialize;
