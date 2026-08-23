<?php
declare(strict_types=1);

// CrossrefRest SDK configuration

class CrossrefRestConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "CrossrefRest",
                "slug" => "crossref-rest",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.crossref.org",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "funder" => [],
                    "journal" => [],
                    "member" => [],
                    "type" => [],
                    "work" => [],
                ],
            ],
            "entity" => [
        'funder' => [
          'fields' => [
            [
              'name' => 'altnames',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'items',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'itemsperpage',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'location',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'totalresults',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'uri',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'funder',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/funders',
                  'parts' => [
                    'funders',
                  ],
                  'select' => [
                    'exist' => [
                      'offset',
                      'query',
                      'row',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '100000001',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/funders/{id}',
                  'parts' => [
                    'funders',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'journal' => [
          'fields' => [
            [
              'name' => 'ISSN',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'coverage',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'items',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'itemsperpage',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'publisher',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'totalresults',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'journal',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/journals',
                  'parts' => [
                    'journals',
                  ],
                  'select' => [
                    'exist' => [
                      'offset',
                      'query',
                      'row',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '1476-4687',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'issn',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/journals/{issn}',
                  'parts' => [
                    'journals',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'issn' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'member' => [
          'fields' => [
            [
              'name' => 'counts',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'id',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'items',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'itemsperpage',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'laststatuschecktime',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'location',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'primaryname',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'totalresults',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'member',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/members',
                  'parts' => [
                    'members',
                  ],
                  'select' => [
                    'exist' => [
                      'offset',
                      'query',
                      'row',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '311',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/members/{id}',
                  'parts' => [
                    'members',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'type' => [
          'fields' => [
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'items',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'label',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'type',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'journal-article',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/types/{id}',
                  'parts' => [
                    'types',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/types',
                  'parts' => [
                    'types',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'work' => [
          'fields' => [
            [
              'name' => 'DOI',
              'short' => 'Digital Object Identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ISSN',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'URL',
              'short' => 'URL to the work',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'abstract',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'author',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'containertitle',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'isreferencedbycount',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'items',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'itemsperpage',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'published',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'publisher',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'query',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'referencecount',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'title',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'totalresults',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'type',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'work',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'mailto',
                        'orig' => 'mailto',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'desc',
                        'kind' => 'query',
                        'name' => 'order',
                        'orig' => 'order',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/works',
                  'parts' => [
                    'works',
                  ],
                  'select' => [
                    'exist' => [
                      'filter',
                      'mailto',
                      'offset',
                      'order',
                      'query',
                      'row',
                      'sort',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'funder_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/funders/{id}/works',
                  'parts' => [
                    'funders',
                    '{funder_id}',
                    'works',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'funder_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'funder_id',
                      'offset',
                      'row',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'issn',
                        'orig' => 'issn',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/journals/{issn}/works',
                  'parts' => [
                    'journals',
                    '{issn}',
                    'works',
                  ],
                  'select' => [
                    'exist' => [
                      'issn',
                      'offset',
                      'row',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'member_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/members/{id}/works',
                  'parts' => [
                    'members',
                    '{member_id}',
                    'works',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'member_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'member_id',
                      'offset',
                      'row',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'type_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/types/{id}/works',
                  'parts' => [
                    'types',
                    '{type_id}',
                    'works',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'type_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'offset',
                      'row',
                      'type_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '10.1037/0003-066X.59.1.29',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'doi',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'mailto',
                        'orig' => 'mailto',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/works/{doi}',
                  'parts' => [
                    'works',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'doi' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'mailto',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'funder',
              ],
              [
                'journal',
              ],
              [
                'member',
              ],
              [
                'type',
              ],
            ],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CrossrefRestFeatures::make_feature($name);
    }
}
