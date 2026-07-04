# Typed models for the CrossrefRest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Funder:
    message: Optional[dict] = None
    message_type: Optional[str] = None
    status: Optional[str] = None


@dataclass
class FunderLoadMatch:
    id: str


@dataclass
class Journal:
    message: Optional[dict] = None
    message_type: Optional[str] = None
    status: Optional[str] = None


@dataclass
class JournalLoadMatch:
    id: str


@dataclass
class Member:
    message: Optional[dict] = None
    message_type: Optional[str] = None
    status: Optional[str] = None


@dataclass
class MemberLoadMatch:
    id: str


@dataclass
class Type:
    message: Optional[dict] = None
    message_type: Optional[str] = None
    status: Optional[str] = None


@dataclass
class TypeLoadMatch:
    id: str


@dataclass
class Work:
    message: Optional[dict] = None
    message_type: Optional[str] = None
    message_version: Optional[str] = None
    status: Optional[str] = None


@dataclass
class WorkLoadMatch:
    funder_id: str
    issn: str
    member_id: str
    type_id: str
    id: str

