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
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
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
              'title' => 'Altnames',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'items',
              'title' => 'Items',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'itemsperpage',
              'title' => 'Itemsperpage',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'location',
              'title' => 'Location',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'totalresults',
              'title' => 'Totalresults',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'uri',
              'title' => 'Uri',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'funder',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/funders',
                  'segments' => [
                    [
                      'lit' => 'funders',
                    ],
                  ],
                  'parts' => [
                    'funders',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                      [
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 20,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'offset',
                      'query',
                      'row',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/funders/{id}',
                  'segments' => [
                    [
                      'lit' => 'funders',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'funders',
                    '{id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '100000001',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
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
              'title' => 'Issn',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'coverage',
              'title' => 'Coverage',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'items',
              'title' => 'Items',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'itemsperpage',
              'title' => 'Itemsperpage',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'publisher',
              'title' => 'Publisher',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'totalresults',
              'title' => 'Totalresults',
              'type' => '`$INTEGER`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'journal',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/journals',
                  'segments' => [
                    [
                      'lit' => 'journals',
                    ],
                  ],
                  'parts' => [
                    'journals',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                      [
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 20,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'offset',
                      'query',
                      'row',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/journals/{issn}',
                  'segments' => [
                    [
                      'lit' => 'journals',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'journals',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'issn' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'issn',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '1476-4687',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
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
              'title' => 'Counts',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'items',
              'title' => 'Items',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'itemsperpage',
              'title' => 'Itemsperpage',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'laststatuschecktime',
              'title' => 'Laststatuschecktime',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'location',
              'title' => 'Location',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'primaryname',
              'title' => 'Primaryname',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'totalresults',
              'title' => 'Totalresults',
              'type' => '`$INTEGER`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'member',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/members',
                  'segments' => [
                    [
                      'lit' => 'members',
                    ],
                  ],
                  'parts' => [
                    'members',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                      [
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 20,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'offset',
                      'query',
                      'row',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/members/{id}',
                  'segments' => [
                    [
                      'lit' => 'members',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'members',
                    '{id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '311',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
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
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'items',
              'title' => 'Items',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'label',
              'title' => 'Label',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'type',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/types/{id}',
                  'segments' => [
                    [
                      'lit' => 'types',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'types',
                    '{id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'journal-article',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/types',
                  'segments' => [
                    [
                      'lit' => 'types',
                    ],
                  ],
                  'parts' => [
                    'types',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                  'args' => [],
                  'select' => [],
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
              'title' => 'Doi',
              'type' => '`$STRING`',
              'short' => 'Digital Object Identifier',
            ],
            [
              'name' => 'ISSN',
              'title' => 'Issn',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'URL',
              'title' => 'Url',
              'type' => '`$STRING`',
              'short' => 'URL to the work',
            ],
            [
              'name' => 'abstract',
              'title' => 'Abstract',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'author',
              'title' => 'Author',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'containertitle',
              'title' => 'Containertitle',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'isreferencedbycount',
              'title' => 'Isreferencedbycount',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'items',
              'title' => 'Items',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'itemsperpage',
              'title' => 'Itemsperpage',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'published',
              'title' => 'Published',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'publisher',
              'title' => 'Publisher',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'query',
              'title' => 'Query',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'referencecount',
              'title' => 'Referencecount',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'totalresults',
              'title' => 'Totalresults',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'work',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/works',
                  'segments' => [
                    [
                      'lit' => 'works',
                    ],
                  ],
                  'parts' => [
                    'works',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'mailto',
                        'orig' => 'mailto',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                      [
                        'name' => 'order',
                        'orig' => 'order',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'desc',
                      ],
                      [
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 20,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
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
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/funders/{id}/works',
                  'segments' => [
                    [
                      'lit' => 'funders',
                    ],
                    [
                      'var' => 'funder_id',
                    ],
                    [
                      'lit' => 'works',
                    ],
                  ],
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'funder_id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                      [
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 20,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'funder_id',
                      'offset',
                      'row',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/journals/{issn}/works',
                  'segments' => [
                    [
                      'lit' => 'journals',
                    ],
                    [
                      'var' => 'issn',
                    ],
                    [
                      'lit' => 'works',
                    ],
                  ],
                  'parts' => [
                    'journals',
                    '{issn}',
                    'works',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'issn',
                        'orig' => 'issn',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                      [
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 20,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'issn',
                      'offset',
                      'row',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/members/{id}/works',
                  'segments' => [
                    [
                      'lit' => 'members',
                    ],
                    [
                      'var' => 'member_id',
                    ],
                    [
                      'lit' => 'works',
                    ],
                  ],
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'member_id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                      [
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 20,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'member_id',
                      'offset',
                      'row',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/types/{id}/works',
                  'segments' => [
                    [
                      'lit' => 'types',
                    ],
                    [
                      'var' => 'type_id',
                    ],
                    [
                      'lit' => 'works',
                    ],
                  ],
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'type_id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                      [
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 20,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'offset',
                      'row',
                      'type_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/works/{doi}',
                  'segments' => [
                    [
                      'lit' => 'works',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'works',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'doi' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.message`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'doi',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '10.1037/0003-066X.59.1.29',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'mailto',
                        'orig' => 'mailto',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'mailto',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.funder',
              ],
              [
                '$.main.kit.entity.journal',
              ],
              [
                '$.main.kit.entity.member',
              ],
              [
                '$.main.kit.entity.type',
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
