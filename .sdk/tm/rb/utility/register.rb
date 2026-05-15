# CrossrefRest SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CrossrefRestUtility.registrar = ->(u) {
  u.clean = CrossrefRestUtilities::Clean
  u.done = CrossrefRestUtilities::Done
  u.make_error = CrossrefRestUtilities::MakeError
  u.feature_add = CrossrefRestUtilities::FeatureAdd
  u.feature_hook = CrossrefRestUtilities::FeatureHook
  u.feature_init = CrossrefRestUtilities::FeatureInit
  u.fetcher = CrossrefRestUtilities::Fetcher
  u.make_fetch_def = CrossrefRestUtilities::MakeFetchDef
  u.make_context = CrossrefRestUtilities::MakeContext
  u.make_options = CrossrefRestUtilities::MakeOptions
  u.make_request = CrossrefRestUtilities::MakeRequest
  u.make_response = CrossrefRestUtilities::MakeResponse
  u.make_result = CrossrefRestUtilities::MakeResult
  u.make_point = CrossrefRestUtilities::MakePoint
  u.make_spec = CrossrefRestUtilities::MakeSpec
  u.make_url = CrossrefRestUtilities::MakeUrl
  u.param = CrossrefRestUtilities::Param
  u.prepare_auth = CrossrefRestUtilities::PrepareAuth
  u.prepare_body = CrossrefRestUtilities::PrepareBody
  u.prepare_headers = CrossrefRestUtilities::PrepareHeaders
  u.prepare_method = CrossrefRestUtilities::PrepareMethod
  u.prepare_params = CrossrefRestUtilities::PrepareParams
  u.prepare_path = CrossrefRestUtilities::PreparePath
  u.prepare_query = CrossrefRestUtilities::PrepareQuery
  u.result_basic = CrossrefRestUtilities::ResultBasic
  u.result_body = CrossrefRestUtilities::ResultBody
  u.result_headers = CrossrefRestUtilities::ResultHeaders
  u.transform_request = CrossrefRestUtilities::TransformRequest
  u.transform_response = CrossrefRestUtilities::TransformResponse
}
