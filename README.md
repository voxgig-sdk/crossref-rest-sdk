# CrossrefRest SDK

Search and retrieve scholarly metadata for 150M+ works, DOIs, funders, journals, and Crossref members

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Crossref REST API

The [Crossref REST API](https://api.crossref.org) is operated by [Crossref](https://www.crossref.org), the not-for-profit DOI registration agency for scholarly content. It exposes the metadata that publishers deposit with Crossref when they mint DOIs, covering journal articles, books, conference proceedings, datasets, preprints, and more.

What you get from the API:

- Bibliographic records for over 150 million scholarly works keyed by DOI
- Funder Registry entries and the works each funder supported
- Crossref member (publisher) records and the works each member registered
- Journal records indexed by ISSN
- Work-type vocabulary, DOI-owner prefixes, and license assertions on works

The service runs two pools of machines. Clients that identify themselves either via a `mailto` query parameter or a contact address in the `User-Agent` header are routed to the "polite pool" with better performance. Rate-limit hints are returned in `X-Rate-Limit-Limit` and `X-Rate-Limit-Interval` response headers; clients should honour them and back off when needed.

## Try it

**TypeScript**
```bash
npm install crossref-rest
```

**Python**
```bash
pip install crossref-rest-sdk
```

**PHP**
```bash
composer require voxgig/crossref-rest-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/crossref-rest-sdk/go
```

**Ruby**
```bash
gem install crossref-rest-sdk
```

**Lua**
```bash
luarocks install crossref-rest-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { CrossrefRestSDK } from 'crossref-rest'

const client = new CrossrefRestSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o crossref-rest-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "crossref-rest": {
      "command": "/abs/path/to/crossref-rest-mcp"
    }
  }
}
```

## Entities

The API exposes 5 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Funder** | Entry in the Crossref Funder Registry; available at `/funders` and `/funders/{id}`, with associated works at `/funders/{id}/works` | `/funders` |
| **Journal** | Journal record indexed by ISSN; available at `/journals` and `/journals/{issn}`, with its works at `/journals/{issn}/works` | `/journals` |
| **Member** | Crossref member organisation (typically a publisher); available at `/members` and `/members/{id}`, with works the member registered at `/members/{id}/works` | `/members` |
| **Type** | Controlled vocabulary of work types (journal-article, book-chapter, dataset, etc.); available at `/types` and `/types/{id}` | `/types/{id}` |
| **Work** | Scholarly output identified by a DOI (article, book, dataset, preprint, etc.); available at `/works` and `/works/{doi}` | `/works` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from crossrefrest_sdk import CrossrefRestSDK

client = CrossrefRestSDK({})


# Load a specific funder
funder, err = client.Funder(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'crossrefrest_sdk.php';

$client = new CrossrefRestSDK([]);


// Load a specific funder
[$funder, $err] = $client->Funder(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/crossref-rest-sdk/go"

client := sdk.NewCrossrefRestSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "CrossrefRest_sdk"

client = CrossrefRestSDK.new({})


# Load a specific funder
funder, err = client.Funder(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("crossref-rest_sdk")

local client = sdk.new({})


-- Load a specific funder
local funder, err = client:Funder(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = CrossrefRestSDK.test()
const result = await client.Funder().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = CrossrefRestSDK.test(None, None)
result, err = client.Funder(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = CrossrefRestSDK::test(null, null);
[$result, $err] = $client->Funder(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Funder(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = CrossrefRestSDK.test(nil, nil)
result, err = client.Funder(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Funder(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Crossref REST API

- Upstream: [https://www.crossref.org](https://www.crossref.org)
- API docs: [https://api.crossref.org/swagger-ui/index.html](https://api.crossref.org/swagger-ui/index.html)

- Crossref makes no ownership claims over bibliographic metadata or DOIs returned by the API
- Metadata may be cached and incorporated into downstream systems
- The REST API documentation itself is licensed CC BY 4.0
- No registration required, but identifying yourself (see the polite pool) is strongly encouraged

---

Generated from the Crossref REST API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
