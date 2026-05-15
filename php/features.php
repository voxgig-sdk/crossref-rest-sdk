<?php
declare(strict_types=1);

// CrossrefRest SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CrossrefRestFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CrossrefRestBaseFeature();
            case "test":
                return new CrossrefRestTestFeature();
            default:
                return new CrossrefRestBaseFeature();
        }
    }
}
