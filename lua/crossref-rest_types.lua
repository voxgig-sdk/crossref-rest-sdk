-- Typed models for the CrossrefRest SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Funder
---@field id? string
---@field message? table
---@field messagetype? string
---@field status? string

---@class FunderLoadMatch
---@field id string

---@class Journal
---@field id? string
---@field message? table
---@field messagetype? string
---@field status? string

---@class JournalLoadMatch
---@field id string

---@class Member
---@field id? string
---@field message? table
---@field messagetype? string
---@field status? string

---@class MemberLoadMatch
---@field id string

---@class Type
---@field id? string
---@field message? table
---@field messagetype? string
---@field status? string

---@class TypeLoadMatch
---@field id string

---@class Work
---@field id? string
---@field message? table
---@field messagetype? string
---@field messageversion? string
---@field status? string

---@class WorkLoadMatch
---@field id string
---@field mailto? string

local M = {}

return M
