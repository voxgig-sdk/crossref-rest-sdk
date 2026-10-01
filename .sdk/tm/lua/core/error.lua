-- CrossrefRest SDK error

local json = require("dkjson")

local CrossrefRestError = {}
CrossrefRestError.__index = CrossrefRestError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function CrossrefRestError.new(code, msg, ctx)
  local self = setmetatable({}, CrossrefRestError)
  self.is_sdk_error = true
  self.sdk = "CrossrefRest"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  CONTEXT[self] = ctx
  return self
end


function CrossrefRestError:context()
  return CONTEXT[self]
end


function CrossrefRestError:error()
  return self.msg
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function CrossrefRestError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function CrossrefRestError:to_json()
  return json.encode(self:to_table())
end


function CrossrefRestError:__tostring()
  return self.msg
end


function CrossrefRestError.__tojson(self)
  return self:to_json()
end


return CrossrefRestError
