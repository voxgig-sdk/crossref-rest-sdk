<?php
declare(strict_types=1);

// Typed models for the CrossrefRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Funder entity data model. */
class Funder
{
    public ?array $message = null;
    public ?string $message_type = null;
    public ?string $status = null;
}

/** Request payload for Funder#load. */
class FunderLoadMatch
{
    public ?string $id = null;
}

/** Journal entity data model. */
class Journal
{
    public ?array $message = null;
    public ?string $message_type = null;
    public ?string $status = null;
}

/** Request payload for Journal#load. */
class JournalLoadMatch
{
    public ?string $id = null;
}

/** Member entity data model. */
class Member
{
    public ?array $message = null;
    public ?string $message_type = null;
    public ?string $status = null;
}

/** Request payload for Member#load. */
class MemberLoadMatch
{
    public ?string $id = null;
}

/** Type entity data model. */
class Type
{
    public ?array $message = null;
    public ?string $message_type = null;
    public ?string $status = null;
}

/** Request payload for Type#load. */
class TypeLoadMatch
{
    public ?string $id = null;
}

/** Work entity data model. */
class Work
{
    public ?array $message = null;
    public ?string $message_type = null;
    public ?string $message_version = null;
    public ?string $status = null;
}

/** Request payload for Work#load. */
class WorkLoadMatch
{
    public ?string $funder_id = null;
    public ?string $issn = null;
    public ?string $member_id = null;
    public ?string $type_id = null;
    public ?string $id = null;
}

