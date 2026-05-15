<?php
declare(strict_types=1);

// CrossrefRest SDK utility: result_headers

class CrossrefRestResultHeaders
{
    public static function call(CrossrefRestContext $ctx): ?CrossrefRestResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
