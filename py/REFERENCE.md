# CrossrefRest Python SDK Reference

Complete API reference for the CrossrefRest Python SDK.


## CrossrefRestSDK

### Constructor

```python
from crossref-rest_sdk import CrossrefRestSDK

client = CrossrefRestSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CrossrefRestSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CrossrefRestSDK.test()
```


### Instance Methods

#### `Funder(data=None)`

Create a new `FunderEntity` instance. Pass `None` for no initial data.

#### `Journal(data=None)`

Create a new `JournalEntity` instance. Pass `None` for no initial data.

#### `Member(data=None)`

Create a new `MemberEntity` instance. Pass `None` for no initial data.

#### `Type(data=None)`

Create a new `TypeEntity` instance. Pass `None` for no initial data.

#### `Work(data=None)`

Create a new `WorkEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## FunderEntity

```python
funder = client.Funder()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | ``$OBJECT`` | No |  |
| `message_type` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Funder().load({"id": "funder_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FunderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## JournalEntity

```python
journal = client.Journal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | ``$OBJECT`` | No |  |
| `message_type` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Journal().load({"id": "journal_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JournalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MemberEntity

```python
member = client.Member()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | ``$OBJECT`` | No |  |
| `message_type` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Member().load({"id": "member_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TypeEntity

```python
type = client.Type()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | ``$OBJECT`` | No |  |
| `message_type` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Type().load({"id": "type_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkEntity

```python
work = client.Work()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | ``$OBJECT`` | No |  |
| `message_type` | ``$STRING`` | No |  |
| `message_version` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Work().load({"id": "work_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = CrossrefRestSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

