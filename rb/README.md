# CrossrefRest Ruby SDK

The Ruby SDK for the CrossrefRest API. Provides an entity-oriented interface using idiomatic Ruby conventions.


## Install
```bash
gem install crossref-rest-sdk
```

Or add to your `Gemfile`:

```ruby
gem "crossref-rest-sdk"
```

Then run:

```bash
bundle install
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "CrossrefRest_sdk"

client = CrossrefRestSDK.new({
  "apikey" => ENV["CROSSREF-REST_APIKEY"],
})
```

### 3. Load a funder

```ruby
result, err = client.Funder(nil).load({ "id" => "example_id" }, nil)
raise err if err
puts result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
raise err if err

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
end
```

### Prepare a request without sending it

```ruby
fetchdef, err = client.prepare({
  "path" => "/api/resource/{id}",
  "method" => "DELETE",
  "params" => { "id" => "example" },
})
raise err if err

puts fetchdef["url"]
puts fetchdef["method"]
puts fetchdef["headers"]
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = CrossrefRestSDK.test(nil, nil)

result, err = client.CrossrefRest(nil).load(
  { "id" => "test01" }, nil
)
# result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = CrossrefRestSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CROSSREF-REST_TEST_LIVE=TRUE
CROSSREF-REST_APIKEY=<your-key>
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### CrossrefRestSDK

```ruby
require_relative "CrossrefRest_sdk"
client = CrossrefRestSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = CrossrefRestSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CrossrefRestSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> [Hash, err]` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> [Hash, err]` | Build and send an HTTP request. |
| `Funder` | `(data) -> FunderEntity` | Create a Funder entity instance. |
| `Journal` | `(data) -> JournalEntity` | Create a Journal entity instance. |
| `Member` | `(data) -> MemberEntity` | Create a Member entity instance. |
| `Type` | `(data) -> TypeEntity` | Create a Type entity instance. |
| `Work` | `(data) -> WorkEntity` | Create a Work entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> [any, err]` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> [any, err]` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> [any, err]` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> [any, err]` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> [any, err]` | Remove an entity. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return `[any, err]`. The first value is a
`Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `false` and `err` contains the error value.

### Entities

#### Funder

| Field | Description |
| --- | --- |
| `message` |  |
| `message_type` |  |
| `status` |  |

Operations: Load.

API path: `/funders`

#### Journal

| Field | Description |
| --- | --- |
| `message` |  |
| `message_type` |  |
| `status` |  |

Operations: Load.

API path: `/journals`

#### Member

| Field | Description |
| --- | --- |
| `message` |  |
| `message_type` |  |
| `status` |  |

Operations: Load.

API path: `/members`

#### Type

| Field | Description |
| --- | --- |
| `message` |  |
| `message_type` |  |
| `status` |  |

Operations: Load.

API path: `/types/{id}`

#### Work

| Field | Description |
| --- | --- |
| `message` |  |
| `message_type` |  |
| `message_version` |  |
| `status` |  |

Operations: Load.

API path: `/works`



## Entities


### Funder

Create an instance: `const funder = client.Funder()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | ``$OBJECT`` |  |
| `message_type` | ``$STRING`` |  |
| `status` | ``$STRING`` |  |

#### Example: Load

```ts
const funder = await client.Funder().load({ id: 'funder_id' })
```


### Journal

Create an instance: `const journal = client.Journal()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | ``$OBJECT`` |  |
| `message_type` | ``$STRING`` |  |
| `status` | ``$STRING`` |  |

#### Example: Load

```ts
const journal = await client.Journal().load({ id: 'journal_id' })
```


### Member

Create an instance: `const member = client.Member()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | ``$OBJECT`` |  |
| `message_type` | ``$STRING`` |  |
| `status` | ``$STRING`` |  |

#### Example: Load

```ts
const member = await client.Member().load({ id: 'member_id' })
```


### Type

Create an instance: `const type = client.Type()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | ``$OBJECT`` |  |
| `message_type` | ``$STRING`` |  |
| `status` | ``$STRING`` |  |

#### Example: Load

```ts
const type = await client.Type().load({ id: 'type_id' })
```


### Work

Create an instance: `const work = client.Work()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | ``$OBJECT`` |  |
| `message_type` | ``$STRING`` |  |
| `message_version` | ``$STRING`` |  |
| `status` | ``$STRING`` |  |

#### Example: Load

```ts
const work = await client.Work().load({ id: 'work_id' })
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as a second return value.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── CrossrefRest_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`CrossrefRest_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
moon = client.Moon
moon.load({ "planet_id" => "earth", "id" => "luna" })

# moon.data_get now returns the loaded moon data
# moon.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
