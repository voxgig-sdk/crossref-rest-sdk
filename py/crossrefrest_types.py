# Typed models for the CrossrefRest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Funder(TypedDict, total=False):
    message: dict
    message_type: str
    status: str


class FunderLoadMatch(TypedDict):
    id: str


class Journal(TypedDict, total=False):
    message: dict
    message_type: str
    status: str


class JournalLoadMatch(TypedDict):
    id: str


class Member(TypedDict, total=False):
    message: dict
    message_type: str
    status: str


class MemberLoadMatch(TypedDict):
    id: str


class Type(TypedDict, total=False):
    message: dict
    message_type: str
    status: str


class TypeLoadMatch(TypedDict):
    id: str


class Work(TypedDict, total=False):
    message: dict
    message_type: str
    message_version: str
    status: str


class WorkLoadMatch(TypedDict):
    funder_id: str
    issn: str
    member_id: str
    type_id: str
    id: str
