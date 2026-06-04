<?php
declare(strict_types=1);

// Work entity test

require_once __DIR__ . '/../crossrefrest_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class WorkEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CrossrefRestSDK::test(null, null);
        $ent = $testsdk->Work(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = work_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "work." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CROSSREFREST_TEST_WORK_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $work_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.work")));
        $work_ref01_data = null;
        if (count($work_ref01_data_raw) > 0) {
            $work_ref01_data = Helpers::to_map($work_ref01_data_raw[0][1]);
        }

        // LOAD
        $work_ref01_ent = $client->Work(null);
        $work_ref01_match_dt0 = [];
        [$work_ref01_data_dt0_loaded, $err] = $work_ref01_ent->load($work_ref01_match_dt0, null);
        $this->assertNull($err);
        $this->assertNotNull($work_ref01_data_dt0_loaded);

    }
}

function work_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/work/WorkTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CrossrefRestSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["work01", "work02", "work03", "funder01", "funder02", "funder03", "journal01", "journal02", "journal03", "member01", "member02", "member03", "type01", "type02", "type03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CROSSREFREST_TEST_WORK_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CROSSREFREST_TEST_WORK_ENTID" => $idmap,
        "CROSSREFREST_TEST_LIVE" => "FALSE",
        "CROSSREFREST_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CROSSREFREST_TEST_WORK_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["CROSSREFREST_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new CrossrefRestSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["CROSSREFREST_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CROSSREFREST_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
