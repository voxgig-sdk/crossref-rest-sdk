package voxgigcrossrefrestsdk

import (
	"github.com/voxgig-sdk/crossref-rest-sdk/go/core"
	"github.com/voxgig-sdk/crossref-rest-sdk/go/entity"
	"github.com/voxgig-sdk/crossref-rest-sdk/go/feature"
	_ "github.com/voxgig-sdk/crossref-rest-sdk/go/utility"
)

// Type aliases preserve external API.
type CrossrefRestSDK = core.CrossrefRestSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CrossrefRestEntity = core.CrossrefRestEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CrossrefRestError = core.CrossrefRestError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewFunderEntityFunc = func(client *core.CrossrefRestSDK, entopts map[string]any) core.CrossrefRestEntity {
		return entity.NewFunderEntity(client, entopts)
	}
	core.NewJournalEntityFunc = func(client *core.CrossrefRestSDK, entopts map[string]any) core.CrossrefRestEntity {
		return entity.NewJournalEntity(client, entopts)
	}
	core.NewMemberEntityFunc = func(client *core.CrossrefRestSDK, entopts map[string]any) core.CrossrefRestEntity {
		return entity.NewMemberEntity(client, entopts)
	}
	core.NewTypeEntityFunc = func(client *core.CrossrefRestSDK, entopts map[string]any) core.CrossrefRestEntity {
		return entity.NewTypeEntity(client, entopts)
	}
	core.NewWorkEntityFunc = func(client *core.CrossrefRestSDK, entopts map[string]any) core.CrossrefRestEntity {
		return entity.NewWorkEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCrossrefRestSDK = core.NewCrossrefRestSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCrossrefRestSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CrossrefRestSDK  { return NewCrossrefRestSDK(nil) }
func Test() *CrossrefRestSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
