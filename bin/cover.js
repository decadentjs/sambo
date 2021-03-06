#!/usr/bin/env node

var cover = require('../lib/cover'),
  args = require('../lib/args')(),
  usage = require('../lib/usage');

if (!args.string) {
  usage();
  process.exit(1);
}

process.stdout.write(JSON.stringify(cover(args.string.split(args.separator).sort()), null, 2));
