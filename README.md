[![Build Status](https://travis-ci.org/decadentjs/sarnie.svg?branch=master)](https://travis-ci.org/decadentjs/sarnie)

# sarnie

Converts a list of strings into a compact, readable representation with delimiters of choice

```
sarnie 'alba,albero,albergo,alberto'
# => alb(a|er(go|o|to))

sarnie 'aria:arianna' ':' '[' '+' ']'
# => aria[+nna]
```

## What?

In British slang, [sarnie](https://en.wiktionary.org/wiki/sarnie) is the abbreviation of sandwich. The name hints at the strings being sliced and interleaved with bread, the delimiters.

## Why?

Useful when you need to pass long lists of URL params

## License

Copyright (c) 2016-2017, Claudio Procida

[MIT](https://opensource.org/licenses/MIT)
