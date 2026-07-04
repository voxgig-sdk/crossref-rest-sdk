# frozen_string_literal: true

# Typed models for the CrossrefRest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Funder entity data model.
#
# @!attribute [rw] message
#   @return [Hash, nil]
#
# @!attribute [rw] message_type
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
Funder = Struct.new(
  :message,
  :message_type,
  :status,
  keyword_init: true
)

# Request payload for Funder#load.
#
# @!attribute [rw] id
#   @return [String]
FunderLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Journal entity data model.
#
# @!attribute [rw] message
#   @return [Hash, nil]
#
# @!attribute [rw] message_type
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
Journal = Struct.new(
  :message,
  :message_type,
  :status,
  keyword_init: true
)

# Request payload for Journal#load.
#
# @!attribute [rw] id
#   @return [String]
JournalLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Member entity data model.
#
# @!attribute [rw] message
#   @return [Hash, nil]
#
# @!attribute [rw] message_type
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
Member = Struct.new(
  :message,
  :message_type,
  :status,
  keyword_init: true
)

# Request payload for Member#load.
#
# @!attribute [rw] id
#   @return [String]
MemberLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Type entity data model.
#
# @!attribute [rw] message
#   @return [Hash, nil]
#
# @!attribute [rw] message_type
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
Type = Struct.new(
  :message,
  :message_type,
  :status,
  keyword_init: true
)

# Request payload for Type#load.
#
# @!attribute [rw] id
#   @return [String]
TypeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Work entity data model.
#
# @!attribute [rw] message
#   @return [Hash, nil]
#
# @!attribute [rw] message_type
#   @return [String, nil]
#
# @!attribute [rw] message_version
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
Work = Struct.new(
  :message,
  :message_type,
  :message_version,
  :status,
  keyword_init: true
)

# Request payload for Work#load.
#
# @!attribute [rw] funder_id
#   @return [String]
#
# @!attribute [rw] issn
#   @return [String]
#
# @!attribute [rw] member_id
#   @return [String]
#
# @!attribute [rw] type_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
WorkLoadMatch = Struct.new(
  :funder_id,
  :issn,
  :member_id,
  :type_id,
  :id,
  keyword_init: true
)

