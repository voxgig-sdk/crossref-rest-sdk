-- CrossrefRest SDK exists test

local sdk = require("crossref-rest_sdk")

describe("CrossrefRestSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
