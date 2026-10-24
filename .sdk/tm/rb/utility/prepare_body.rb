# CrossrefRest SDK utility: prepare_body
require_relative 'media'
module CrossrefRestUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return CrossrefRestUtilities.raw_body(ctx.reqdata) if CrossrefRestUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
