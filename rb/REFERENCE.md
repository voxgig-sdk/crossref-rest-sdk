# CrossrefRest Ruby SDK Reference

Complete API reference for the CrossrefRest Ruby SDK.


## CrossrefRestSDK

### Constructor

```ruby
require_relative 'crossref-rest_sdk'

client = CrossrefRestSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CrossrefRestSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CrossrefRestSDK.test
```


### Instance Methods

#### `Funder(data = nil)`

Create a new `Funder` entity instance. Pass `nil` for no initial data.

#### `Journal(data = nil)`

Create a new `Journal` entity instance. Pass `nil` for no initial data.

#### `Member(data = nil)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `Type(data = nil)`

Create a new `Type` entity instance. Pass `nil` for no initial data.

#### `Work(data = nil)`

Create a new `Work` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## FunderEntity

```ruby
funder = client.Funder
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | ``$OBJECT`` | No |  |
| `message_type` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Funder.load({ "id" => "funder_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FunderEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## JournalEntity

```ruby
journal = client.Journal
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | ``$OBJECT`` | No |  |
| `message_type` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Journal.load({ "id" => "journal_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `JournalEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MemberEntity

```ruby
member = client.Member
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | ``$OBJECT`` | No |  |
| `message_type` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Member.load({ "id" => "member_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TypeEntity

```ruby
type = client.Type
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | ``$OBJECT`` | No |  |
| `message_type` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Type.load({ "id" => "type_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TypeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkEntity

```ruby
work = client.Work
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | ``$OBJECT`` | No |  |
| `message_type` | ``$STRING`` | No |  |
| `message_version` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Work.load({ "id" => "work_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = CrossrefRestSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

