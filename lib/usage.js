function usage() {
    console.log(`Usage:
sambo <string> [<separator> [<child preamble> [<child separator> [<child terminator>]]]]

Examples:
sambo 'alba,albero,albino'
# => alb(a|ero|ino)
sambo 'alba:albero:albino' ':' '[' ',' ']'
# => alb[a,ero,ino]
`);
}

module.exports = usage;
