-- Typed models for the CrossrefRest SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Funder
---@field message? table
---@field message_type? string
---@field status? string

---@class FunderLoadMatch
---@field id string

---@class Journal
---@field message? table
---@field message_type? string
---@field status? string

---@class JournalLoadMatch
---@field id string

---@class Member
---@field message? table
---@field message_type? string
---@field status? string

---@class MemberLoadMatch
---@field id string

---@class Type
---@field message? table
---@field message_type? string
---@field status? string

---@class TypeLoadMatch
---@field id string

---@class Work
---@field message? table
---@field message_type? string
---@field message_version? string
---@field status? string

---@class WorkLoadMatch
---@field funder_id string
---@field issn string
---@field member_id string
---@field type_id string
---@field id string

local M = {}

return M
