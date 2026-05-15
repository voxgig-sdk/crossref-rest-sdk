# CrossrefRest SDK exists test

require "minitest/autorun"
require_relative "../CrossrefRest_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CrossrefRestSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
