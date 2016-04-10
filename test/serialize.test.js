var tap = require('tap'),
  serialize = require('../lib/serialize'),
  FIXTURES = require('./fixtures');

tap.equal(serialize(FIXTURES.TREES.A, '(', '|', ')'), 'a');
tap.equal(serialize(FIXTURES.TREES.A, '*', '&', '^'), 'a');
tap.equal(serialize(FIXTURES.TREES.A, '-', '_', '`'), 'a');

tap.equal(serialize(FIXTURES.TREES.A_B, '(', '|', ')'), 'a|b');
tap.equal(serialize(FIXTURES.TREES.A_B, '*', '&', '^'), 'a&b');
tap.equal(serialize(FIXTURES.TREES.A_B, '-', '_', '`'), 'a_b');

tap.equal(serialize(FIXTURES.TREES.A_AB, '(', '|', ')'), 'a(|b)');
tap.equal(serialize(FIXTURES.TREES.A_AB, '*', '&', '^'), 'a*&b^');
tap.equal(serialize(FIXTURES.TREES.A_AB, '-', '_', '`'), 'a-_b`');

tap.equal(serialize(FIXTURES.TREES.ARIA_ANNA, '(', '|', ')'), 'aria(|nna)');
tap.equal(serialize(FIXTURES.TREES.ARIA_ANNA, '*', '&', '^'), 'aria*&nna^');
tap.equal(serialize(FIXTURES.TREES.ARIA_ANNA, '[', '+', ']'), 'aria[+nna]');

tap.equal(serialize(FIXTURES.TREES.ALB_A_ER_GO_O_TO, '(', '|', ')'), 'alb(a|er(go|o|to))');
tap.equal(serialize(FIXTURES.TREES.ALB_A_ER_GO_O_TO, '*', '&', '^'), 'alb*a&er*go&o&to^^');
tap.equal(serialize(FIXTURES.TREES.ALB_A_ER_GO_O_TO, '~', '*', '='), 'alb~a*er~go*o*to==');
tap.equal(serialize(FIXTURES.TREES.ALB_A_ER_GO_O_TO, '[', '+', ']'), 'alb[a+er[go+o+to]]');

tap.equal(serialize(FIXTURES.TREES.VIALE_ETTO, '(', '|', ')'), 'viale(|tto)');
tap.equal(serialize(FIXTURES.TREES.VIALE_ETTO, '[', '+', ']'), 'viale[+tto]');
tap.equal(serialize(FIXTURES.TREES.VIALE_ETTO, '~', '*', '='), 'viale~*tto=');

// Tests trees with empty children
tap.equal(serialize(FIXTURES.TREES.EMPTY_CHILDREN, '(', '|', ')'), 'a|b(|c)');
tap.equal(serialize(FIXTURES.TREES.EMPTY_CHILDREN, '[', '+', ']'), 'a+b[+c]');
tap.equal(serialize(FIXTURES.TREES.EMPTY_CHILDREN, '~', '*', '='), 'a*b~*c=');
