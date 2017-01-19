var tap = require('tap'),
  sarnie = require('..'),
  FIXTURES = require('./fixtures');

require('array.from').shim();

// It doesn't mutate the input array
var reversed = Array.from(FIXTURES.ARRAYS.ALBERO_FIORE).reverse();
sarnie(reversed, '(', '|', ')');
tap.same(reversed, Array.from(FIXTURES.ARRAYS.ALBERO_FIORE).reverse());

reversed = Array.from(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO).reverse();
sarnie(reversed, '(', '|', ')');
tap.same(reversed, Array.from(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO).reverse());

// It should return the string unaltered if the array has a single element
tap.equal(sarnie(['albero'], '(', '|', ')'), 'albero');

// Strings without a common radix
tap.equal(sarnie(['a', 'b', 'c'], '(', '|', ')'), 'a|b|c');
tap.equal(sarnie(FIXTURES.ARRAYS.ALBERO_FIORE, '(', '|', ')'), 'albero|fiore');

// Strings with a common radix
tap.equal(sarnie(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO, '(', '|', ')'), 'alb(a|er(go|o|to))');
tap.equal(sarnie(FIXTURES.ARRAYS.PESCA_TORE_H_ERIA_IERA, '(', '|', ')'), 'pesc(a(|tore)|h(eria|iera))');
tap.equal(sarnie(FIXTURES.ARRAYS.MARE_INA_IO_IA, '(', '|', ')'), 'mar(e|i(a|na(|io)|o))');

// Mixed strings
tap.equal(sarnie(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO.concat(FIXTURES.ARRAYS.PESCA_TORE_H_ERIA_IERA), '(', '|', ')'), 'alb(a|er(go|o|to))|pesc(a(|tore)|h(eria|iera))');

// Order of input doesn't matter
tap.equal(sarnie(FIXTURES.ARRAYS.ALBERO_FIORE, '(', '|', ')'),
          sarnie(Array.from(FIXTURES.ARRAYS.ALBERO_FIORE).reverse(), '(', '|', ')'));
tap.equal(sarnie(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO, '(', '|', ')'),
          sarnie(Array.from(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO).reverse(), '(', '|', ')'));

// A real life example
tap.equal(sarnie(FIXTURES.ARRAYS.ISIN_1, '(', '|', ')'), FIXTURES.STRINGS.ISIN_1);
