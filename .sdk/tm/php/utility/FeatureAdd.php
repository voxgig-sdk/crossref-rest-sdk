<?php
declare(strict_types=1);

// CrossrefRest SDK utility: feature_add

class CrossrefRestFeatureAdd
{
    public static function call(CrossrefRestContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
