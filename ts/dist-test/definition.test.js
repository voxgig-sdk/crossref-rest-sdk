"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "funder",
        "accessor": "Funder",
        "op": "load",
        "method": "GET",
        "path": "/funders",
        "args": [],
        "select": {
            "offset": "v1",
            "query": "v1",
            "row": "v1"
        },
        "headers": [],
        "query": [
            "query",
            "rows",
            "offset"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "ok",
            "message-type": "funder-list",
            "message": {
                "items": [
                    {
                        "alt-names": [
                            "x"
                        ],
                        "id": "x",
                        "location": "x",
                        "name": "x",
                        "uri": "x"
                    }
                ],
                "items-per-page": 1,
                "total-results": 1
            }
        },
        "idField": "id"
    },
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
        "query": [],
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
        "entity": "journal",
        "accessor": "Journal",
        "op": "load",
        "method": "GET",
        "path": "/journals",
        "args": [],
        "select": {
            "offset": "v1",
            "query": "v1",
            "row": "v1"
        },
        "headers": [],
        "query": [
            "query",
            "rows",
            "offset"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "ok",
            "message-type": "journal-list",
            "message": {
                "items": [
                    {
                        "ISSN": [
                            "x"
                        ],
                        "coverage": {},
                        "publisher": "x",
                        "title": "x"
                    }
                ],
                "items-per-page": 1,
                "total-results": 1
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
        "query": [],
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
        "entity": "member",
        "accessor": "Member",
        "op": "load",
        "method": "GET",
        "path": "/members",
        "args": [],
        "select": {
            "offset": "v1",
            "query": "v1",
            "row": "v1"
        },
        "headers": [],
        "query": [
            "query",
            "rows",
            "offset"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "ok",
            "message-type": "member-list",
            "message": {
                "items": [
                    {
                        "counts": {},
                        "id": 1,
                        "last-status-check-time": 1,
                        "location": "x",
                        "primary-name": "x"
                    }
                ],
                "items-per-page": 1,
                "total-results": 1
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
        "query": [],
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
        "query": [],
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
        "query": [],
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
        "path": "/works",
        "args": [],
        "select": {
            "filter": "v1",
            "mailto": "v1",
            "offset": "v1",
            "order": "v1",
            "query": "v1",
            "row": "v1",
            "sort": "v1"
        },
        "headers": [],
        "query": [
            "query",
            "rows",
            "offset",
            "filter",
            "sort",
            "order",
            "mailto"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "ok",
            "message-type": "work-list",
            "message-version": "1.0.0",
            "message": {
                "items": [
                    {
                        "DOI": "x",
                        "ISSN": [
                            "x"
                        ],
                        "URL": "x",
                        "abstract": "x",
                        "author": [
                            {
                                "ORCID": "x",
                                "family": "x",
                                "given": "x"
                            }
                        ],
                        "container-title": [
                            "x"
                        ],
                        "is-referenced-by-count": 1,
                        "published": {
                            "date-parts": [
                                []
                            ]
                        },
                        "publisher": "x",
                        "reference-count": 1,
                        "title": [
                            "x"
                        ],
                        "type": "x"
                    }
                ],
                "items-per-page": 1,
                "query": {},
                "total-results": 1
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
            "offset": "v1",
            "row": "v1"
        },
        "headers": [],
        "query": [
            "rows",
            "offset"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "ok",
            "message-type": "work-list",
            "message-version": "1.0.0",
            "message": {
                "items": [
                    {
                        "DOI": "x",
                        "ISSN": [
                            "x"
                        ],
                        "URL": "x",
                        "abstract": "x",
                        "author": [
                            {
                                "ORCID": "x",
                                "family": "x",
                                "given": "x"
                            }
                        ],
                        "container-title": [
                            "x"
                        ],
                        "is-referenced-by-count": 1,
                        "published": {
                            "date-parts": [
                                []
                            ]
                        },
                        "publisher": "x",
                        "reference-count": 1,
                        "title": [
                            "x"
                        ],
                        "type": "x"
                    }
                ],
                "items-per-page": 1,
                "query": {},
                "total-results": 1
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
            "offset": "v1",
            "row": "v1"
        },
        "headers": [],
        "query": [
            "rows",
            "offset"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "ok",
            "message-type": "work-list",
            "message-version": "1.0.0",
            "message": {
                "items": [
                    {
                        "DOI": "x",
                        "ISSN": [
                            "x"
                        ],
                        "URL": "x",
                        "abstract": "x",
                        "author": [
                            {
                                "ORCID": "x",
                                "family": "x",
                                "given": "x"
                            }
                        ],
                        "container-title": [
                            "x"
                        ],
                        "is-referenced-by-count": 1,
                        "published": {
                            "date-parts": [
                                []
                            ]
                        },
                        "publisher": "x",
                        "reference-count": 1,
                        "title": [
                            "x"
                        ],
                        "type": "x"
                    }
                ],
                "items-per-page": 1,
                "query": {},
                "total-results": 1
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
            "offset": "v1",
            "row": "v1"
        },
        "headers": [],
        "query": [
            "rows",
            "offset"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "ok",
            "message-type": "work-list",
            "message-version": "1.0.0",
            "message": {
                "items": [
                    {
                        "DOI": "x",
                        "ISSN": [
                            "x"
                        ],
                        "URL": "x",
                        "abstract": "x",
                        "author": [
                            {
                                "ORCID": "x",
                                "family": "x",
                                "given": "x"
                            }
                        ],
                        "container-title": [
                            "x"
                        ],
                        "is-referenced-by-count": 1,
                        "published": {
                            "date-parts": [
                                []
                            ]
                        },
                        "publisher": "x",
                        "reference-count": 1,
                        "title": [
                            "x"
                        ],
                        "type": "x"
                    }
                ],
                "items-per-page": 1,
                "query": {},
                "total-results": 1
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
            "offset": "v1",
            "row": "v1"
        },
        "headers": [],
        "query": [
            "rows",
            "offset"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "ok",
            "message-type": "work-list",
            "message-version": "1.0.0",
            "message": {
                "items": [
                    {
                        "DOI": "x",
                        "ISSN": [
                            "x"
                        ],
                        "URL": "x",
                        "abstract": "x",
                        "author": [
                            {
                                "ORCID": "x",
                                "family": "x",
                                "given": "x"
                            }
                        ],
                        "container-title": [
                            "x"
                        ],
                        "is-referenced-by-count": 1,
                        "published": {
                            "date-parts": [
                                []
                            ]
                        },
                        "publisher": "x",
                        "reference-count": 1,
                        "title": [
                            "x"
                        ],
                        "type": "x"
                    }
                ],
                "items-per-page": 1,
                "query": {},
                "total-results": 1
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
        "query": [
            "mailto"
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
                        "ORCID": "x",
                        "family": "x",
                        "given": "x"
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
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map