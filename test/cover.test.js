var tap = require('tap'),
  cover = require('../lib/cover'),
  FIXTURES = require('./fixtures');

// Bad input
tap.notOk(cover(['a'], 1));
tap.notOk(cover(['a', 'b'], 2));
tap.notOk(cover(['a', 'b', 'd'], 3));

tap.notOk(cover(['a'], 1, 0, 2));
tap.notOk(cover(['a', 'b'], 2, 0, 3));
tap.notOk(cover(['a', 'b', 'd'], 3, 0, 4));

// Validate trees
tap.same(cover(['a']), FIXTURES.A);
tap.same(cover(['a', 'b']), FIXTURES.A_B);
tap.same(cover(['a', 'ab']), FIXTURES.A_AB);
tap.same(cover(['aria', 'arianna']), FIXTURES.ARIA_ANNA);
tap.same(cover(['alba', 'albergo', 'albero', 'alberto']), FIXTURES.ALB_A_ER_GO_O_TO);
