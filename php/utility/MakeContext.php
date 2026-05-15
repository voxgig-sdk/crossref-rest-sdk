<?php
declare(strict_types=1);

// CrossrefRest SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CrossrefRestMakeContext
{
    public static function call(array $ctxmap, ?CrossrefRestContext $basectx): CrossrefRestContext
    {
        return new CrossrefRestContext($ctxmap, $basectx);
    }
}
