<?php
declare(strict_types=1);

// CrossrefRest SDK utility: result_body

class CrossrefRestResultBody
{
    public static function call(CrossrefRestContext $ctx): ?CrossrefRestResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
