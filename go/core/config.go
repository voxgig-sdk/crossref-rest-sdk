package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CrossrefRest",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api.crossref.org",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"funder": map[string]any{},
				"journal": map[string]any{},
				"member": map[string]any{},
				"type": map[string]any{},
				"work": map[string]any{},
			},
		},
		"entity": map[string]any{
			"funder": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "altnames",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "items",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "itemsperpage",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "totalresults",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "uri",
						"type": "`$STRING`",
					},
				},
				"name": "funder",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "row",
											"orig": "row",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/funders",
								"parts": []any{
									"funders",
								},
								"select": map[string]any{
									"exist": []any{
										"offset",
										"query",
										"row",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "100000001",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/funders/{id}",
								"parts": []any{
									"funders",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"journal": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ISSN",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "coverage",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "items",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "itemsperpage",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "publisher",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "totalresults",
						"type": "`$INTEGER`",
					},
				},
				"name": "journal",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "row",
											"orig": "row",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/journals",
								"parts": []any{
									"journals",
								},
								"select": map[string]any{
									"exist": []any{
										"offset",
										"query",
										"row",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "1476-4687",
											"kind": "param",
											"name": "id",
											"orig": "issn",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/journals/{issn}",
								"parts": []any{
									"journals",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"issn": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "counts",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "items",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "itemsperpage",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "laststatuschecktime",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "primaryname",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "totalresults",
						"type": "`$INTEGER`",
					},
				},
				"name": "member",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "row",
											"orig": "row",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members",
								"parts": []any{
									"members",
								},
								"select": map[string]any{
									"exist": []any{
										"offset",
										"query",
										"row",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "311",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}",
								"parts": []any{
									"members",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"type": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "items",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "label",
						"type": "`$STRING`",
					},
				},
				"name": "type",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "journal-article",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/types/{id}",
								"parts": []any{
									"types",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/types",
								"parts": []any{
									"types",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"work": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "DOI",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ISSN",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "abstract",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "author",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "containertitle",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "isreferencedbycount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "items",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "itemsperpage",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "published",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "publisher",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "query",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "referencecount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "title",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "totalresults",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
				},
				"name": "work",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "mailto",
											"orig": "mailto",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "desc",
											"kind": "query",
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "row",
											"orig": "row",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/works",
								"parts": []any{
									"works",
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"mailto",
										"offset",
										"order",
										"query",
										"row",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "funder_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "row",
											"orig": "row",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/funders/{id}/works",
								"parts": []any{
									"funders",
									"{funder_id}",
									"works",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "funder_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"funder_id",
										"offset",
										"row",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "issn",
											"orig": "issn",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "row",
											"orig": "row",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/journals/{issn}/works",
								"parts": []any{
									"journals",
									"{issn}",
									"works",
								},
								"select": map[string]any{
									"exist": []any{
										"issn",
										"offset",
										"row",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "row",
											"orig": "row",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/works",
								"parts": []any{
									"members",
									"{member_id}",
									"works",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
										"offset",
										"row",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "type_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "row",
											"orig": "row",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/types/{id}/works",
								"parts": []any{
									"types",
									"{type_id}",
									"works",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "type_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"offset",
										"row",
										"type_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "10.1037/0003-066X.59.1.29",
											"kind": "param",
											"name": "id",
											"orig": "doi",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "mailto",
											"orig": "mailto",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/works/{doi}",
								"parts": []any{
									"works",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"doi": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"mailto",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"funder",
						},
						[]any{
							"journal",
						},
						[]any{
							"member",
						},
						[]any{
							"type",
						},
					},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
