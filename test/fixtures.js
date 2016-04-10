var FIXTURES = {
  A: [
    {
      l: 'a',
      c: [
        null
      ]
    }
  ],

  A_B: [
    {
      l: 'a',
      c: [
        null
      ]
    },
    {
      l: 'b',
      c: [
        null
      ]
    }
  ],

  A_AB: [
    {
      l: 'a',
      c: [
        null, {
          l: 'b',
          c: [
            null
          ]
        }
      ]
    }
  ],

  ARIA_ANNA: [
    {
      l: 'a',
      c: [
        {
          l: 'r',
          c: [
            {
              l: 'i',
              c: [
                {
                  l: 'a',
                  c: [
                    null,
                    {
                      l: 'n',
                      c: [
                        {
                          l: 'n',
                          c: [
                            {
                              l: 'a',
                              c: [
                                null
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],

  ALB_A_ER_GO_O_TO: [
    {
      l: 'a',
      c: [
        {
          l: 'l',
          c: [
            {
              l: 'b',
              c: [
                {
                  l: 'a',
                  c: [
                    null
                  ]
                }, {
                  l: 'e',
                  c: [
                    {
                      l: 'r',
                      c: [
                        {
                          l: 'g',
                          c: [
                            {
                              l: 'o',
                              c: [
                                null
                              ]
                            }
                          ]
                        },
                        {
                          l: 'o',
                          c: [
                            null
                          ]
                        },
                        {
                          l: 't',
                          c: [
                            {
                              l: 'o',
                              c: [
                                null
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],

  VIALE_ETTO: [
    {
      l: 'v',
      c: [
        {
          l: 'i',
          c: [
            {
              l: 'a',
              c: [
                {
                  l: 'l',
                  c: [
                    {
                      l: 'e',
                      c: [
                        null,
                        {
                          l: 't',
                          c: [
                            {
                              l: 't',
                              c: [
                                {
                                  l: 'o',
                                  c: [
                                    null
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],

  EMPTY_CHILDREN: [
    {
      l: 'a',
      c: []
    },
    {
      l: 'b',
      c: [
        null,
        {
          l: 'c',
          c: []
        }
      ]
    }
  ],

  TREES: {}
};

for (var arr in FIXTURES) {
  FIXTURES.TREES[arr] = {
    l: '',
    c: FIXTURES[arr]
  };
}

module.exports = FIXTURES;
