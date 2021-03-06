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

  ARRAYS: {
    ALB_A_ER_GO_O_TO: ['albero', 'alba', 'alberto', 'albergo'],
    ALBERO_FIORE: ['albero', 'fiore'],
    PESCA_TORE_H_ERIA_IERA: ['pesca', 'pescatore', 'peschiera', 'pescheria'],
    MARE_INA_IO_IA: ['mare', 'marina', 'marinaio', 'mario', 'maria'],
    ISIN_1: [
      'XS0258970051', 'XS0283199247', 'XS0299049527', 'XS0318345971', 'XS0484854483',
      'XS0648456167', 'XS0858481194', 'XS0875891615', 'XS0877809375', 'XS0894522795',
      'XS0935881853', 'XS0956262033', 'XS0960889060', 'XS0978719572', 'XS0995130712',
      'XS0996343835', 'XS1033659027', 'XS1038294531', 'XS1053090665', 'XS1059896016',
      'XS1075219763', 'XS1098105254', 'XS1115184753', 'XS1139474206', 'XS1198022706',
      'XS1198278175', 'XS1224031903'
    ]
  },

  STRINGS: {
    ISIN_1: 'XS(0(2(58970051|83199247|99049527)|318345971|484854483|648456167|8(58481194|7(5891615|7809375)|94522795)|9(35881853|56262033|60889060|78719572|9(5130712|6343835)))|1(0(3(3659027|8294531)|5(3090665|9896016)|75219763|98105254)|1(15184753|39474206|98(022706|278175))|224031903))'
  },

  TREES: {}
};

for (var arr in FIXTURES) {
  FIXTURES.TREES[arr] = {
    l: '',
    c: FIXTURES[arr]
  };
}

module.exports = FIXTURES;
