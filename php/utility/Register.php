<?php
declare(strict_types=1);

// CrossrefRest SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

CrossrefRestUtility::setRegistrar(function (CrossrefRestUtility $u): void {
    $u->clean = [CrossrefRestClean::class, 'call'];
    $u->done = [CrossrefRestDone::class, 'call'];
    $u->make_error = [CrossrefRestMakeError::class, 'call'];
    $u->feature_add = [CrossrefRestFeatureAdd::class, 'call'];
    $u->feature_hook = [CrossrefRestFeatureHook::class, 'call'];
    $u->feature_init = [CrossrefRestFeatureInit::class, 'call'];
    $u->fetcher = [CrossrefRestFetcher::class, 'call'];
    $u->make_fetch_def = [CrossrefRestMakeFetchDef::class, 'call'];
    $u->make_context = [CrossrefRestMakeContext::class, 'call'];
    $u->make_options = [CrossrefRestMakeOptions::class, 'call'];
    $u->make_request = [CrossrefRestMakeRequest::class, 'call'];
    $u->make_response = [CrossrefRestMakeResponse::class, 'call'];
    $u->make_result = [CrossrefRestMakeResult::class, 'call'];
    $u->make_point = [CrossrefRestMakePoint::class, 'call'];
    $u->make_spec = [CrossrefRestMakeSpec::class, 'call'];
    $u->make_url = [CrossrefRestMakeUrl::class, 'call'];
    $u->param = [CrossrefRestParam::class, 'call'];
    $u->prepare_auth = [CrossrefRestPrepareAuth::class, 'call'];
    $u->prepare_body = [CrossrefRestPrepareBody::class, 'call'];
    $u->prepare_headers = [CrossrefRestPrepareHeaders::class, 'call'];
    $u->prepare_method = [CrossrefRestPrepareMethod::class, 'call'];
    $u->prepare_params = [CrossrefRestPrepareParams::class, 'call'];
    $u->prepare_path = [CrossrefRestPreparePath::class, 'call'];
    $u->prepare_query = [CrossrefRestPrepareQuery::class, 'call'];
    $u->result_basic = [CrossrefRestResultBasic::class, 'call'];
    $u->result_body = [CrossrefRestResultBody::class, 'call'];
    $u->result_headers = [CrossrefRestResultHeaders::class, 'call'];
    $u->transform_request = [CrossrefRestTransformRequest::class, 'call'];
    $u->transform_response = [CrossrefRestTransformResponse::class, 'call'];
});
