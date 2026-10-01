// Typed models for the CrossrefRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Funder {
  id?: string
  message?: Record<string, any>
  messagetype?: string
  status?: string
}

export interface FunderLoadMatch {
  id: string
}

export interface Journal {
  id?: string
  message?: Record<string, any>
  messagetype?: string
  status?: string
}

export interface JournalLoadMatch {
  id: string
}

export interface Member {
  id?: string
  message?: Record<string, any>
  messagetype?: string
  status?: string
}

export interface MemberLoadMatch {
  id: string
}

export interface Type {
  id?: string
  message?: Record<string, any>
  messagetype?: string
  status?: string
}

export interface TypeLoadMatch {
  id: string
}

export interface Work {
  id?: string
  message?: Record<string, any>
  messagetype?: string
  messageversion?: string
  status?: string
}

export interface WorkLoadMatch {
  id: string
  mailto?: string
}

