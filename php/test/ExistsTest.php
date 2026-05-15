<?php
declare(strict_types=1);

// CrossrefRest SDK exists test

require_once __DIR__ . '/../crossrefrest_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CrossrefRestSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
