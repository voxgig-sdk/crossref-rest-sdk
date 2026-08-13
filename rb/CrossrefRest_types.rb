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
# @!attribute [rw] altnames
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] itemsperpage
#   @return [Integer, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] totalresults
#   @return [Integer, nil]
#
# @!attribute [rw] uri
#   @return [String, nil]
Funder = Struct.new(
  :altnames,
  :id,
  :items,
  :itemsperpage,
  :location,
  :name,
  :totalresults,
  :uri,
  keyword_init: true
)

# Request payload for Funder#load.
#
# @!attribute [rw] id
#   @return [String, nil]
FunderLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Journal entity data model.
#
# @!attribute [rw] ISSN
#   @return [Array, nil]
#
# @!attribute [rw] coverage
#   @return [Hash, nil]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] itemsperpage
#   @return [Integer, nil]
#
# @!attribute [rw] publisher
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] totalresults
#   @return [Integer, nil]
Journal = Struct.new(
  :ISSN,
  :coverage,
  :items,
  :itemsperpage,
  :publisher,
  :title,
  :totalresults,
  keyword_init: true
)

# Request payload for Journal#load.
#
# @!attribute [rw] id
#   @return [String, nil]
JournalLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Member entity data model.
#
# @!attribute [rw] counts
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] itemsperpage
#   @return [Integer, nil]
#
# @!attribute [rw] laststatuschecktime
#   @return [Integer, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] primaryname
#   @return [String, nil]
#
# @!attribute [rw] totalresults
#   @return [Integer, nil]
Member = Struct.new(
  :counts,
  :id,
  :items,
  :itemsperpage,
  :laststatuschecktime,
  :location,
  :primaryname,
  :totalresults,
  keyword_init: true
)

# Request payload for Member#load.
#
# @!attribute [rw] id
#   @return [String, nil]
MemberLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Type entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
Type = Struct.new(
  :id,
  :items,
  :label,
  keyword_init: true
)

# Request payload for Type#load.
#
# @!attribute [rw] id
#   @return [String, nil]
TypeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Work entity data model.
#
# @!attribute [rw] DOI
#   @return [String, nil]
#
# @!attribute [rw] ISSN
#   @return [Array, nil]
#
# @!attribute [rw] URL
#   @return [String, nil]
#
# @!attribute [rw] abstract
#   @return [String, nil]
#
# @!attribute [rw] author
#   @return [Array, nil]
#
# @!attribute [rw] containertitle
#   @return [Array, nil]
#
# @!attribute [rw] isreferencedbycount
#   @return [Integer, nil]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] itemsperpage
#   @return [Integer, nil]
#
# @!attribute [rw] published
#   @return [Hash, nil]
#
# @!attribute [rw] publisher
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [Hash, nil]
#
# @!attribute [rw] referencecount
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [Array, nil]
#
# @!attribute [rw] totalresults
#   @return [Integer, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Work = Struct.new(
  :DOI,
  :ISSN,
  :URL,
  :abstract,
  :author,
  :containertitle,
  :isreferencedbycount,
  :items,
  :itemsperpage,
  :published,
  :publisher,
  :query,
  :referencecount,
  :title,
  :totalresults,
  :type,
  keyword_init: true
)

# Request payload for Work#load.
#
# @!attribute [rw] funder_id
#   @return [String, nil]
#
# @!attribute [rw] issn
#   @return [String, nil]
#
# @!attribute [rw] member_id
#   @return [String, nil]
#
# @!attribute [rw] type_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
WorkLoadMatch = Struct.new(
  :funder_id,
  :issn,
  :member_id,
  :type_id,
  :id,
  keyword_init: true
)

