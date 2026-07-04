// Typed models for the CrossrefRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Funder {
  message?: Record<string, any>
  message_type?: string
  status?: string
}

export interface FunderLoadMatch {
  id: string
}

export interface Journal {
  message?: Record<string, any>
  message_type?: string
  status?: string
}

export interface JournalLoadMatch {
  id: string
}

export interface Member {
  message?: Record<string, any>
  message_type?: string
  status?: string
}

export interface MemberLoadMatch {
  id: string
}

export interface Type {
  message?: Record<string, any>
  message_type?: string
  status?: string
}

export interface TypeLoadMatch {
  id: string
}

export interface Work {
  message?: Record<string, any>
  message_type?: string
  message_version?: string
  status?: string
}

export interface WorkLoadMatch {
  funder_id: string
  issn: string
  member_id: string
  type_id: string
  id: string
}

