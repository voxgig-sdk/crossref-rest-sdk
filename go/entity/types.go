// Typed models for the CrossrefRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Funder is the typed data model for the funder entity.
type Funder struct {
	Message *map[string]any `json:"message,omitempty"`
	MessageType *string `json:"message_type,omitempty"`
	Status *string `json:"status,omitempty"`
}

// FunderLoadMatch is the typed request payload for Funder.LoadTyped.
type FunderLoadMatch struct {
	Id string `json:"id"`
}

// Journal is the typed data model for the journal entity.
type Journal struct {
	Message *map[string]any `json:"message,omitempty"`
	MessageType *string `json:"message_type,omitempty"`
	Status *string `json:"status,omitempty"`
}

// JournalLoadMatch is the typed request payload for Journal.LoadTyped.
type JournalLoadMatch struct {
	Id string `json:"id"`
}

// Member is the typed data model for the member entity.
type Member struct {
	Message *map[string]any `json:"message,omitempty"`
	MessageType *string `json:"message_type,omitempty"`
	Status *string `json:"status,omitempty"`
}

// MemberLoadMatch is the typed request payload for Member.LoadTyped.
type MemberLoadMatch struct {
	Id string `json:"id"`
}

// Type is the typed data model for the type entity.
type Type struct {
	Message *map[string]any `json:"message,omitempty"`
	MessageType *string `json:"message_type,omitempty"`
	Status *string `json:"status,omitempty"`
}

// TypeLoadMatch is the typed request payload for Type.LoadTyped.
type TypeLoadMatch struct {
	Id string `json:"id"`
}

// Work is the typed data model for the work entity.
type Work struct {
	Message *map[string]any `json:"message,omitempty"`
	MessageType *string `json:"message_type,omitempty"`
	MessageVersion *string `json:"message_version,omitempty"`
	Status *string `json:"status,omitempty"`
}

// WorkLoadMatch is the typed request payload for Work.LoadTyped.
type WorkLoadMatch struct {
	FunderId string `json:"funder_id"`
	Issn string `json:"issn"`
	MemberId string `json:"member_id"`
	TypeId string `json:"type_id"`
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
