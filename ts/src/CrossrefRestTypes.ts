// Typed models for the CrossrefRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Funder {
  altnames?: any[]
  id?: string
  items?: any[]
  itemsperpage?: number
  location?: string
  name?: string
  totalresults?: number
  uri?: string
}

export interface FunderLoadMatch {
  id?: string
}

export interface Journal {
  ISSN?: any[]
  coverage?: Record<string, any>
  items?: any[]
  itemsperpage?: number
  publisher?: string
  title?: string
  totalresults?: number
}

export interface JournalLoadMatch {
  id?: string
}

export interface Member {
  counts?: Record<string, any>
  id?: number
  items?: any[]
  itemsperpage?: number
  laststatuschecktime?: number
  location?: string
  primaryname?: string
  totalresults?: number
}

export interface MemberLoadMatch {
  id?: string
}

export interface Type {
  id?: string
  items?: any[]
  label?: string
}

export interface TypeLoadMatch {
  id?: string
}

export interface Work {
  DOI?: string
  ISSN?: any[]
  URL?: string
  abstract?: string
  author?: any[]
  containertitle?: any[]
  isreferencedbycount?: number
  items?: any[]
  itemsperpage?: number
  published?: Record<string, any>
  publisher?: string
  query?: Record<string, any>
  referencecount?: number
  title?: any[]
  totalresults?: number
  type?: string
}

export interface WorkLoadMatch {
  funder_id?: string
  issn?: string
  member_id?: string
  type_id?: string
  id?: string
}

