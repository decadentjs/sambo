function usage() {
    console.log(`Usage:
sarnie <string> [<separator> [<child preamble> [<child separator> [<child terminator>]]]]

Examples:
sarnie 'alba,albero,albino'
# => alb(a|ero|ino)
sarnie 'alba:albero:albino' ':' '[' ',' ']'
# => alb[a,ero,ino]
`);
}

module.exports = usage;
