-- CrossrefRest SDK error

local CrossrefRestError = {}
CrossrefRestError.__index = CrossrefRestError


function CrossrefRestError.new(code, msg, ctx)
  local self = setmetatable({}, CrossrefRestError)
  self.is_sdk_error = true
  self.sdk = "CrossrefRest"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CrossrefRestError:error()
  return self.msg
end


function CrossrefRestError:__tostring()
  return self.msg
end


return CrossrefRestError
