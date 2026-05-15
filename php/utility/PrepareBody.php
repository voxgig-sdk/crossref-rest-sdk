<?php
declare(strict_types=1);

// CrossrefRest SDK utility: prepare_body

class CrossrefRestPrepareBody
{
    public static function call(CrossrefRestContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
