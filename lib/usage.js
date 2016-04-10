function usage() {
    console.log('Usage:\n\
sambo <string> [<separator> [<child preamble> [<child separator> [<child terminator>]]]]\n\
\n\
Examples:\n\
sambo alba,albero,albino\n\
# => alb(a|ero|ino)\n\
sambo alba:albero:albino : [ , ]\n\
# => alb[a,ero,ino]\n');
}

module.exports = usage;
