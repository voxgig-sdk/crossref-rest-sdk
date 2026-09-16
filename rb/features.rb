# CrossrefRest SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CrossrefRestFeatures
  def self.make_feature(name)
    case name
    when "base"
      CrossrefRestBaseFeature.new
    when "ratelimit"
      CrossrefRestRatelimitFeature.new
    when "retry"
      CrossrefRestRetryFeature.new
    when "test"
      CrossrefRestTestFeature.new
    when "timeout"
      CrossrefRestTimeoutFeature.new
    else
      CrossrefRestBaseFeature.new
    end
  end
end
