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
    public ?array $altnames = null;
    public ?string $id = null;
    public ?array $items = null;
    public ?int $itemsperpage = null;
    public ?string $location = null;
    public ?string $name = null;
    public ?int $totalresults = null;
    public ?string $uri = null;
}

/** Request payload for Funder#load. */
class FunderLoadMatch
{
    public ?string $id = null;
}

/** Journal entity data model. */
class Journal
{
    public ?array $ISSN = null;
    public ?array $coverage = null;
    public ?array $items = null;
    public ?int $itemsperpage = null;
    public ?string $publisher = null;
    public ?string $title = null;
    public ?int $totalresults = null;
}

/** Request payload for Journal#load. */
class JournalLoadMatch
{
    public ?string $id = null;
}

/** Member entity data model. */
class Member
{
    public ?array $counts = null;
    public ?int $id = null;
    public ?array $items = null;
    public ?int $itemsperpage = null;
    public ?int $laststatuschecktime = null;
    public ?string $location = null;
    public ?string $primaryname = null;
    public ?int $totalresults = null;
}

/** Request payload for Member#load. */
class MemberLoadMatch
{
    public ?string $id = null;
}

/** Type entity data model. */
class Type
{
    public ?string $id = null;
    public ?array $items = null;
    public ?string $label = null;
}

/** Request payload for Type#load. */
class TypeLoadMatch
{
    public ?string $id = null;
}

/** Work entity data model. */
class Work
{
    public ?string $DOI = null;
    public ?array $ISSN = null;
    public ?string $URL = null;
    public ?string $abstract = null;
    public ?array $author = null;
    public ?array $containertitle = null;
    public ?int $isreferencedbycount = null;
    public ?array $items = null;
    public ?int $itemsperpage = null;
    public ?array $published = null;
    public ?string $publisher = null;
    public ?array $query = null;
    public ?int $referencecount = null;
    public ?array $title = null;
    public ?int $totalresults = null;
    public ?string $type = null;
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

