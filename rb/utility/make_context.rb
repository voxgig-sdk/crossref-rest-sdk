# CrossrefRest SDK utility: make_context
require_relative '../core/context'
module CrossrefRestUtilities
  MakeContext = ->(ctxmap, basectx) {
    CrossrefRestContext.new(ctxmap, basectx)
  }
end
