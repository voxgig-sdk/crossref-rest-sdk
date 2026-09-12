-- CrossrefRest SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "CrossrefRest",
      slug = "crossref-rest",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api.crossref.org",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["funder"] = {},
        ["journal"] = {},
        ["member"] = {},
        ["type"] = {},
        ["work"] = {},
      },
    },
    entity = {
      ["funder"] = {
        ["fields"] = {
          {
            ["name"] = "altnames",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "items",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "itemsperpage",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "location",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "totalresults",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "uri",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "funder",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 20,
                      ["kind"] = "query",
                      ["name"] = "row",
                      ["orig"] = "row",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/funders",
                ["segments"] = {
                  {
                    ["lit"] = "funders",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "offset",
                    "query",
                    "row",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.message`",
                },
                ["parts"] = {
                  "funders",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "100000001",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/funders/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "funders",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.message`",
                },
                ["parts"] = {
                  "funders",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["journal"] = {
        ["fields"] = {
          {
            ["name"] = "ISSN",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "coverage",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "items",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "itemsperpage",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "publisher",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "totalresults",
            ["type"] = "`$INTEGER`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "journal",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 20,
                      ["kind"] = "query",
                      ["name"] = "row",
                      ["orig"] = "row",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/journals",
                ["segments"] = {
                  {
                    ["lit"] = "journals",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "offset",
                    "query",
                    "row",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.message`",
                },
                ["parts"] = {
                  "journals",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "1476-4687",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "issn",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/journals/{issn}",
                ["rename"] = {
                  ["param"] = {
                    ["issn"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "journals",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.message`",
                },
                ["parts"] = {
                  "journals",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["member"] = {
        ["fields"] = {
          {
            ["name"] = "counts",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "items",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "itemsperpage",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "laststatuschecktime",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "location",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "primaryname",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "totalresults",
            ["type"] = "`$INTEGER`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "member",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 20,
                      ["kind"] = "query",
                      ["name"] = "row",
                      ["orig"] = "row",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "offset",
                    "query",
                    "row",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.message`",
                },
                ["parts"] = {
                  "members",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "311",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.message`",
                },
                ["parts"] = {
                  "members",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["type"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "items",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "label",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "type",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "journal-article",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/types/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "types",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.message`",
                },
                ["parts"] = {
                  "types",
                  "{id}",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/types",
                ["segments"] = {
                  {
                    ["lit"] = "types",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.message`",
                },
                ["parts"] = {
                  "types",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["work"] = {
        ["fields"] = {
          {
            ["name"] = "DOI",
            ["short"] = "Digital Object Identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ISSN",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "URL",
            ["short"] = "URL to the work",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "abstract",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "author",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "containertitle",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "isreferencedbycount",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "items",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "itemsperpage",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "published",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "publisher",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "query",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "referencecount",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "totalresults",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "work",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "mailto",
                      ["orig"] = "mailto",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "desc",
                      ["kind"] = "query",
                      ["name"] = "order",
                      ["orig"] = "order",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 20,
                      ["kind"] = "query",
                      ["name"] = "row",
                      ["orig"] = "row",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/works",
                ["segments"] = {
                  {
                    ["lit"] = "works",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "filter",
                    "mailto",
                    "offset",
                    "order",
                    "query",
                    "row",
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.message`",
                },
                ["parts"] = {
                  "works",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "funder_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 20,
                      ["kind"] = "query",
                      ["name"] = "row",
                      ["orig"] = "row",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/funders/{id}/works",
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "funder_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "funders",
                  },
                  {
                    ["var"] = "funder_id",
                  },
                  {
                    ["lit"] = "works",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "funder_id",
                    "offset",
                    "row",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.message`",
                },
                ["parts"] = {
                  "funders",
                  "{funder_id}",
                  "works",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "issn",
                      ["orig"] = "issn",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 20,
                      ["kind"] = "query",
                      ["name"] = "row",
                      ["orig"] = "row",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/journals/{issn}/works",
                ["segments"] = {
                  {
                    ["lit"] = "journals",
                  },
                  {
                    ["var"] = "issn",
                  },
                  {
                    ["lit"] = "works",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "issn",
                    "offset",
                    "row",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.message`",
                },
                ["parts"] = {
                  "journals",
                  "{issn}",
                  "works",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 20,
                      ["kind"] = "query",
                      ["name"] = "row",
                      ["orig"] = "row",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/works",
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "works",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "member_id",
                    "offset",
                    "row",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.message`",
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "works",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "type_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 20,
                      ["kind"] = "query",
                      ["name"] = "row",
                      ["orig"] = "row",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/types/{id}/works",
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "type_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "types",
                  },
                  {
                    ["var"] = "type_id",
                  },
                  {
                    ["lit"] = "works",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "offset",
                    "row",
                    "type_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.message`",
                },
                ["parts"] = {
                  "types",
                  "{type_id}",
                  "works",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "10.1037/0003-066X.59.1.29",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "doi",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "mailto",
                      ["orig"] = "mailto",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/works/{doi}",
                ["rename"] = {
                  ["param"] = {
                    ["doi"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "works",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "mailto",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.message`",
                },
                ["parts"] = {
                  "works",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "funder",
            },
            {
              "journal",
            },
            {
              "member",
            },
            {
              "type",
            },
          },
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
