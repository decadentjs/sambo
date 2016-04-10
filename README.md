[![Build Status](https://travis-ci.org/decadentjs/sambo.svg?branch=master)](https://travis-ci.org/decadentjs/sambo)

# sambo

Converts a list of strings into a compact, readable representation with delimiters of choice

```
sambo alba,albero,albergo,alberto
# => alb(a|er(go|o|to))

sambo aria:arianna : [ + ]
# => aria[+nna]
```

# what?

In Irish slang, [sambo](https://en.wiktionary.org/wiki/sambo) is the abbreviation of sandwich. The name hints at the strings being sliced and interleaved with bread, the delimiters.

# why?

Useful when you need to pass long lists of URL params

# license

Copyright (c) 2016, Claudio Procida

[MIT](https://opensource.org/licenses/MIT)
