<?php
declare(strict_types=1);

// CrossrefRest SDK base feature

class CrossrefRestBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CrossrefRestContext $ctx, array $options): void {}
    public function PostConstruct(CrossrefRestContext $ctx): void {}
    public function PostConstructEntity(CrossrefRestContext $ctx): void {}
    public function SetData(CrossrefRestContext $ctx): void {}
    public function GetData(CrossrefRestContext $ctx): void {}
    public function GetMatch(CrossrefRestContext $ctx): void {}
    public function SetMatch(CrossrefRestContext $ctx): void {}
    public function PrePoint(CrossrefRestContext $ctx): void {}
    public function PreSpec(CrossrefRestContext $ctx): void {}
    public function PreRequest(CrossrefRestContext $ctx): void {}
    public function PreResponse(CrossrefRestContext $ctx): void {}
    public function PreResult(CrossrefRestContext $ctx): void {}
    public function PreDone(CrossrefRestContext $ctx): void {}
    public function PreUnexpected(CrossrefRestContext $ctx): void {}
}
