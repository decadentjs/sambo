var tap = require('tap'),
  sambo = require('..'),
  parser = require('../lib/parser'),
  FIXTURES = require('./fixtures');

require('array.from').shim();

// It should return the string unaltered if the array has a single element
tap.same(parser(sambo(['albero'], '(', '|', ')'), '(', '|', ')'), ['albero']);

// Strings without a common radix
tap.same(parser(sambo(['a', 'b', 'c'], '(', '|', ')'), '(', '|', ')'), ['a', 'b', 'c']);
tap.same(parser(sambo(FIXTURES.ARRAYS.ALBERO_FIORE, '(', '|', ')'), '(', '|', ')'),
  Array.from(FIXTURES.ARRAYS.ALBERO_FIORE).sort());

// Strings with a common radix
tap.same(parser(sambo(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO, '(', '|', ')'), '(', '|', ')'),
  Array.from(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO).sort());
tap.same(parser(sambo(FIXTURES.ARRAYS.PESCA_TORE_H_ERIA_IERA, '(', '|', ')'), '(', '|', ')'),
  Array.from(FIXTURES.ARRAYS.PESCA_TORE_H_ERIA_IERA).sort());
tap.same(parser(sambo(FIXTURES.ARRAYS.MARE_INA_IO_IA, '(', '|', ')'), '(', '|', ')'),
  Array.from(FIXTURES.ARRAYS.MARE_INA_IO_IA).sort());

// Mixed strings
tap.same(parser(sambo(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO
  .concat(FIXTURES.ARRAYS.PESCA_TORE_H_ERIA_IERA), '(', '|', ')'), '(', '|', ')'),
    Array.from(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO.concat(FIXTURES.ARRAYS.PESCA_TORE_H_ERIA_IERA).sort()));

// Order of input doesn't matter
tap.same(parser(sambo(FIXTURES.ARRAYS.ALBERO_FIORE, '(', '|', ')'), '(', '|', ')'),
          parser(sambo(Array.from(FIXTURES.ARRAYS.ALBERO_FIORE).reverse(), '(', '|', ')'), '(', '|', ')'));
tap.same(parser(sambo(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO, '(', '|', ')'), '(', '|', ')'),
          parser(sambo(Array.from(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO).reverse(), '(', '|', ')'), '(', '|', ')'));

// A real life example
tap.same(parser(sambo(FIXTURES.ARRAYS.ISIN_1, '(', '|', ')'), '(', '|', ')'),
  Array.from(FIXTURES.ARRAYS.ISIN_1).sort());
