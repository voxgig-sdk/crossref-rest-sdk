-- Typed models for the CrossrefRest SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Funder
---@field altnames? table
---@field id? string
---@field items? table
---@field itemsperpage? number
---@field location? string
---@field name? string
---@field totalresults? number
---@field uri? string

---@class FunderLoadMatch
---@field id? string

---@class Journal
---@field ISSN? table
---@field coverage? table
---@field items? table
---@field itemsperpage? number
---@field publisher? string
---@field title? string
---@field totalresults? number

---@class JournalLoadMatch
---@field id? string

---@class Member
---@field counts? table
---@field id? number
---@field items? table
---@field itemsperpage? number
---@field laststatuschecktime? number
---@field location? string
---@field primaryname? string
---@field totalresults? number

---@class MemberLoadMatch
---@field id? string

---@class Type
---@field id? string
---@field items? table
---@field label? string

---@class TypeLoadMatch
---@field id? string

---@class Work
---@field DOI? string
---@field ISSN? table
---@field URL? string
---@field abstract? string
---@field author? table
---@field containertitle? table
---@field isreferencedbycount? number
---@field items? table
---@field itemsperpage? number
---@field published? table
---@field publisher? string
---@field query? table
---@field referencecount? number
---@field title? table
---@field totalresults? number
---@field type? string

---@class WorkLoadMatch
---@field funder_id? string
---@field issn? string
---@field member_id? string
---@field type_id? string
---@field id? string

local M = {}

return M
