import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "funder",
    "accessor": "Funder",
    "op": "load",
    "method": "GET",
    "path": "/funders/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "100000001"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "ok",
      "message-type": "funder",
      "message": {
        "id": "x",
        "name": "x",
        "location": "x",
        "alt-names": [
          "x"
        ],
        "uri": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "funder",
    "accessor": "Funder",
    "op": "load",
    "method": "GET",
    "path": "/funders",
    "args": [],
    "select": {
      "offset": 0,
      "query": "v1",
      "row": 20
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "query",
      "rows",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "query",
        "wire": "query"
      },
      {
        "name": "row",
        "wire": "rows"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "ok",
      "message-type": "funder-list",
      "message": {
        "items-per-page": 1,
        "total-results": 1,
        "items": [
          {
            "id": "x",
            "name": "x",
            "location": "x",
            "alt-names": [
              "x"
            ],
            "uri": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "journal",
    "accessor": "Journal",
    "op": "load",
    "method": "GET",
    "path": "/journals/{issn}",
    "args": [
      {
        "name": "id",
        "wire": "issn",
        "value": "1476-4687"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "ok",
      "message-type": "journal",
      "message": {
        "title": "x",
        "ISSN": [
          "x"
        ],
        "publisher": "x",
        "coverage": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "journal",
    "accessor": "Journal",
    "op": "load",
    "method": "GET",
    "path": "/journals",
    "args": [],
    "select": {
      "offset": 0,
      "query": "v1",
      "row": 20
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "query",
      "rows",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "query",
        "wire": "query"
      },
      {
        "name": "row",
        "wire": "rows"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "ok",
      "message-type": "journal-list",
      "message": {
        "items-per-page": 1,
        "total-results": 1,
        "items": [
          {
            "title": "x",
            "ISSN": [
              "x"
            ],
            "publisher": "x",
            "coverage": {}
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "member",
    "accessor": "Member",
    "op": "load",
    "method": "GET",
    "path": "/members/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "311"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "ok",
      "message-type": "member",
      "message": {
        "id": 1,
        "primary-name": "x",
        "location": "x",
        "last-status-check-time": 1,
        "counts": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "member",
    "accessor": "Member",
    "op": "load",
    "method": "GET",
    "path": "/members",
    "args": [],
    "select": {
      "offset": 0,
      "query": "v1",
      "row": 20
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "query",
      "rows",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "query",
        "wire": "query"
      },
      {
        "name": "row",
        "wire": "rows"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "ok",
      "message-type": "member-list",
      "message": {
        "items-per-page": 1,
        "total-results": 1,
        "items": [
          {
            "id": 1,
            "primary-name": "x",
            "location": "x",
            "last-status-check-time": 1,
            "counts": {}
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "type",
    "accessor": "Type",
    "op": "load",
    "method": "GET",
    "path": "/types/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "journal-article"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "ok",
      "message-type": "type",
      "message": {
        "id": "x",
        "label": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "type",
    "accessor": "Type",
    "op": "load",
    "method": "GET",
    "path": "/types",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "ok",
      "message-type": "type-list",
      "message": {
        "items": [
          {
            "id": "x",
            "label": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "work",
    "accessor": "Work",
    "op": "load",
    "method": "GET",
    "path": "/funders/{id}/works",
    "args": [
      {
        "name": "funder_id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {
      "offset": 0,
      "row": 20
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "rows",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "row",
        "wire": "rows"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "ok",
      "message-type": "work-list",
      "message-version": "1.0.0",
      "message": {
        "items-per-page": 1,
        "query": {},
        "total-results": 1,
        "items": [
          {
            "DOI": "x",
            "URL": "x",
            "title": [
              "x"
            ],
            "author": [
              {
                "given": "x",
                "family": "x",
                "ORCID": "x"
              }
            ],
            "published": {
              "date-parts": [
                []
              ]
            },
            "type": "x",
            "container-title": [
              "x"
            ],
            "ISSN": [
              "x"
            ],
            "publisher": "x",
            "abstract": "x",
            "reference-count": 1,
            "is-referenced-by-count": 1
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "work",
    "accessor": "Work",
    "op": "load",
    "method": "GET",
    "path": "/works/{doi}",
    "args": [
      {
        "name": "id",
        "wire": "doi",
        "value": "10.1037/0003-066X.59.1.29"
      }
    ],
    "select": {
      "mailto": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "mailto"
    ],
    "queryArgs": [
      {
        "name": "mailto",
        "wire": "mailto"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "ok",
      "message-type": "work",
      "message-version": "1.0.0",
      "message": {
        "DOI": "x",
        "URL": "x",
        "title": [
          "x"
        ],
        "author": [
          {
            "given": "x",
            "family": "x",
            "ORCID": "x"
          }
        ],
        "published": {
          "date-parts": [
            [
              1
            ]
          ]
        },
        "type": "x",
        "container-title": [
          "x"
        ],
        "ISSN": [
          "x"
        ],
        "publisher": "x",
        "abstract": "x",
        "reference-count": 1,
        "is-referenced-by-count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "work",
    "accessor": "Work",
    "op": "load",
    "method": "GET",
    "path": "/journals/{issn}/works",
    "args": [
      {
        "name": "issn",
        "wire": "issn",
        "value": "p1"
      }
    ],
    "select": {
      "offset": 0,
      "row": 20
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "rows",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "row",
        "wire": "rows"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "ok",
      "message-type": "work-list",
      "message-version": "1.0.0",
      "message": {
        "items-per-page": 1,
        "query": {},
        "total-results": 1,
        "items": [
          {
            "DOI": "x",
            "URL": "x",
            "title": [
              "x"
            ],
            "author": [
              {
                "given": "x",
                "family": "x",
                "ORCID": "x"
              }
            ],
            "published": {
              "date-parts": [
                []
              ]
            },
            "type": "x",
            "container-title": [
              "x"
            ],
            "ISSN": [
              "x"
            ],
            "publisher": "x",
            "abstract": "x",
            "reference-count": 1,
            "is-referenced-by-count": 1
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "work",
    "accessor": "Work",
    "op": "load",
    "method": "GET",
    "path": "/members/{id}/works",
    "args": [
      {
        "name": "member_id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {
      "offset": 0,
      "row": 20
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "rows",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "row",
        "wire": "rows"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "ok",
      "message-type": "work-list",
      "message-version": "1.0.0",
      "message": {
        "items-per-page": 1,
        "query": {},
        "total-results": 1,
        "items": [
          {
            "DOI": "x",
            "URL": "x",
            "title": [
              "x"
            ],
            "author": [
              {
                "given": "x",
                "family": "x",
                "ORCID": "x"
              }
            ],
            "published": {
              "date-parts": [
                []
              ]
            },
            "type": "x",
            "container-title": [
              "x"
            ],
            "ISSN": [
              "x"
            ],
            "publisher": "x",
            "abstract": "x",
            "reference-count": 1,
            "is-referenced-by-count": 1
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "work",
    "accessor": "Work",
    "op": "load",
    "method": "GET",
    "path": "/types/{id}/works",
    "args": [
      {
        "name": "type_id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {
      "offset": 0,
      "row": 20
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "rows",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "row",
        "wire": "rows"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "ok",
      "message-type": "work-list",
      "message-version": "1.0.0",
      "message": {
        "items-per-page": 1,
        "query": {},
        "total-results": 1,
        "items": [
          {
            "DOI": "x",
            "URL": "x",
            "title": [
              "x"
            ],
            "author": [
              {
                "given": "x",
                "family": "x",
                "ORCID": "x"
              }
            ],
            "published": {
              "date-parts": [
                []
              ]
            },
            "type": "x",
            "container-title": [
              "x"
            ],
            "ISSN": [
              "x"
            ],
            "publisher": "x",
            "abstract": "x",
            "reference-count": 1,
            "is-referenced-by-count": 1
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "work",
    "accessor": "Work",
    "op": "load",
    "method": "GET",
    "path": "/works",
    "args": [],
    "select": {
      "filter": "v1",
      "mailto": "v1",
      "offset": 0,
      "order": "desc",
      "query": "v1",
      "row": 20,
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "query",
      "rows",
      "offset",
      "filter",
      "sort",
      "order",
      "mailto"
    ],
    "queryArgs": [
      {
        "name": "filter",
        "wire": "filter"
      },
      {
        "name": "mailto",
        "wire": "mailto"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "order",
        "wire": "order"
      },
      {
        "name": "query",
        "wire": "query"
      },
      {
        "name": "row",
        "wire": "rows"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "ok",
      "message-type": "work-list",
      "message-version": "1.0.0",
      "message": {
        "items-per-page": 1,
        "query": {},
        "total-results": 1,
        "items": [
          {
            "DOI": "x",
            "URL": "x",
            "title": [
              "x"
            ],
            "author": [
              {
                "given": "x",
                "family": "x",
                "ORCID": "x"
              }
            ],
            "published": {
              "date-parts": [
                []
              ]
            },
            "type": "x",
            "container-title": [
              "x"
            ],
            "ISSN": [
              "x"
            ],
            "publisher": "x",
            "abstract": "x",
            "reference-count": 1,
            "is-referenced-by-count": 1
          }
        ]
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
