# CrossrefRest SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CrossrefRestFeatures
  def self.make_feature(name)
    case name
    when "base"
      CrossrefRestBaseFeature.new
    when "test"
      CrossrefRestTestFeature.new
    else
      CrossrefRestBaseFeature.new
    end
  end
end
