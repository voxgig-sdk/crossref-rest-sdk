# CrossrefRest SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "CrossrefRest",
            "slug": "crossref-rest",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.crossref.org",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "funder": {},
                "journal": {},
                "member": {},
                "type": {},
                "work": {},
            },
        },
        "entity": {
      "funder": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "message",
            "title": "Message",
            "type": "`$OBJECT`",
          },
          {
            "name": "messagetype",
            "title": "Messagetype",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "funder",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/funders/{id}",
                "segments": [
                  {
                    "lit": "funders",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "funders",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "100000001",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/funders",
                "segments": [
                  {
                    "lit": "funders",
                  },
                ],
                "parts": [
                  "funders",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "row",
                      "orig": "rows",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "journal": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "message",
            "title": "Message",
            "type": "`$OBJECT`",
          },
          {
            "name": "messagetype",
            "title": "Messagetype",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "journal",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/journals/{issn}",
                "segments": [
                  {
                    "lit": "journals",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "journals",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "issn": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "issn",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "1476-4687",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/journals",
                "segments": [
                  {
                    "lit": "journals",
                  },
                ],
                "parts": [
                  "journals",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "row",
                      "orig": "rows",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "member": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "message",
            "title": "Message",
            "type": "`$OBJECT`",
          },
          {
            "name": "messagetype",
            "title": "Messagetype",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "member",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/members/{id}",
                "segments": [
                  {
                    "lit": "members",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "members",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "311",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/members",
                "segments": [
                  {
                    "lit": "members",
                  },
                ],
                "parts": [
                  "members",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "row",
                      "orig": "rows",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "type": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "message",
            "title": "Message",
            "type": "`$OBJECT`",
          },
          {
            "name": "messagetype",
            "title": "Messagetype",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "type",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/types/{id}",
                "segments": [
                  {
                    "lit": "types",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "types",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "journal-article",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/types",
                "segments": [
                  {
                    "lit": "types",
                  },
                ],
                "parts": [
                  "types",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "work": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "message",
            "title": "Message",
            "type": "`$OBJECT`",
          },
          {
            "name": "messagetype",
            "title": "Messagetype",
            "type": "`$STRING`",
          },
          {
            "name": "messageversion",
            "title": "Messageversion",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "work",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/funders/{id}/works",
                "segments": [
                  {
                    "lit": "funders",
                  },
                  {
                    "var": "funder_id",
                  },
                  {
                    "lit": "works",
                  },
                ],
                "parts": [
                  "funders",
                  "{funder_id}",
                  "works",
                ],
                "rename": {
                  "param": {
                    "id": "funder_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "funder_id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "row",
                      "orig": "rows",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "funder_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/works/{doi}",
                "segments": [
                  {
                    "lit": "works",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "works",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "doi": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "doi",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "10.1037/0003-066X.59.1.29",
                    },
                  ],
                  "query": [
                    {
                      "name": "mailto",
                      "orig": "mailto",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/journals/{issn}/works",
                "segments": [
                  {
                    "lit": "journals",
                  },
                  {
                    "var": "issn",
                  },
                  {
                    "lit": "works",
                  },
                ],
                "parts": [
                  "journals",
                  "{issn}",
                  "works",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "issn",
                      "orig": "issn",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "row",
                      "orig": "rows",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "issn",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/members/{id}/works",
                "segments": [
                  {
                    "lit": "members",
                  },
                  {
                    "var": "member_id",
                  },
                  {
                    "lit": "works",
                  },
                ],
                "parts": [
                  "members",
                  "{member_id}",
                  "works",
                ],
                "rename": {
                  "param": {
                    "id": "member_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "member_id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "row",
                      "orig": "rows",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "member_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/types/{id}/works",
                "segments": [
                  {
                    "lit": "types",
                  },
                  {
                    "var": "type_id",
                  },
                  {
                    "lit": "works",
                  },
                ],
                "parts": [
                  "types",
                  "{type_id}",
                  "works",
                ],
                "rename": {
                  "param": {
                    "id": "type_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "type_id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "row",
                      "orig": "rows",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "type_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/works",
                "segments": [
                  {
                    "lit": "works",
                  },
                ],
                "parts": [
                  "works",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filter",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "mailto",
                      "orig": "mailto",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "order",
                      "orig": "order",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "desc",
                    },
                    {
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "row",
                      "orig": "rows",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                    {
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.funder",
            ],
            [
              "$.main.kit.entity.journal",
            ],
            [
              "$.main.kit.entity.member",
            ],
            [
              "$.main.kit.entity.type",
            ],
          ],
        },
      },
    },
    }
