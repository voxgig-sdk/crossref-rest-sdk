# CrossrefRest SDK utility: feature_add
module CrossrefRestUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
