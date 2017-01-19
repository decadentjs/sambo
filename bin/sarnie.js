#!/usr/bin/env node

var sarnie = require('..'),
  args = require('../lib/args')(),
  usage = require('../lib/usage');

if (!args.string) {
  usage();
  process.exit(1);
}

process.stdout.write(sarnie(args.string.split(args.separator).sort(), args.preamble, args.delimiter, args.terminator) + '\n');
