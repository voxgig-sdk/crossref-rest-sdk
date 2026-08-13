// Typed models for the CrossrefRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/crossref-rest-sdk/go/core"
)

// Funder is the typed data model for the funder entity.
type Funder struct {
	Altnames *[]any `json:"altnames,omitempty"`
	Id *string `json:"id,omitempty"`
	Items *[]any `json:"items,omitempty"`
	Itemsperpage *int `json:"itemsperpage,omitempty"`
	Location *string `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Totalresults *int `json:"totalresults,omitempty"`
	Uri *string `json:"uri,omitempty"`
}

// FunderLoadMatch is the typed request payload for Funder.LoadTyped.
type FunderLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// Journal is the typed data model for the journal entity.
type Journal struct {
	ISSN *[]any `json:"ISSN,omitempty"`
	Coverage *map[string]any `json:"coverage,omitempty"`
	Items *[]any `json:"items,omitempty"`
	Itemsperpage *int `json:"itemsperpage,omitempty"`
	Publisher *string `json:"publisher,omitempty"`
	Title *string `json:"title,omitempty"`
	Totalresults *int `json:"totalresults,omitempty"`
}

// JournalLoadMatch is the typed request payload for Journal.LoadTyped.
type JournalLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// Member is the typed data model for the member entity.
type Member struct {
	Counts *map[string]any `json:"counts,omitempty"`
	Id *int `json:"id,omitempty"`
	Items *[]any `json:"items,omitempty"`
	Itemsperpage *int `json:"itemsperpage,omitempty"`
	Laststatuschecktime *int `json:"laststatuschecktime,omitempty"`
	Location *string `json:"location,omitempty"`
	Primaryname *string `json:"primaryname,omitempty"`
	Totalresults *int `json:"totalresults,omitempty"`
}

// MemberLoadMatch is the typed request payload for Member.LoadTyped.
type MemberLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// Type is the typed data model for the type entity.
type Type struct {
	Id *string `json:"id,omitempty"`
	Items *[]any `json:"items,omitempty"`
	Label *string `json:"label,omitempty"`
}

// TypeLoadMatch is the typed request payload for Type.LoadTyped.
type TypeLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// Work is the typed data model for the work entity.
type Work struct {
	DOI *string `json:"DOI,omitempty"`
	ISSN *[]any `json:"ISSN,omitempty"`
	URL *string `json:"URL,omitempty"`
	Abstract *string `json:"abstract,omitempty"`
	Author *[]any `json:"author,omitempty"`
	Containertitle *[]any `json:"containertitle,omitempty"`
	Isreferencedbycount *int `json:"isreferencedbycount,omitempty"`
	Items *[]any `json:"items,omitempty"`
	Itemsperpage *int `json:"itemsperpage,omitempty"`
	Published *map[string]any `json:"published,omitempty"`
	Publisher *string `json:"publisher,omitempty"`
	Query *map[string]any `json:"query,omitempty"`
	Referencecount *int `json:"referencecount,omitempty"`
	Title *[]any `json:"title,omitempty"`
	Totalresults *int `json:"totalresults,omitempty"`
	Type *string `json:"type,omitempty"`
}

// WorkLoadMatch is the typed request payload for Work.LoadTyped.
type WorkLoadMatch struct {
	FunderId *string `json:"funder_id,omitempty"`
	Issn *string `json:"issn,omitempty"`
	MemberId *string `json:"member_id,omitempty"`
	TypeId *string `json:"type_id,omitempty"`
	Id *string `json:"id,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
