package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewFunderEntityFunc func(client *CrossrefRestSDK, entopts map[string]any) CrossrefRestEntity

var NewJournalEntityFunc func(client *CrossrefRestSDK, entopts map[string]any) CrossrefRestEntity

var NewMemberEntityFunc func(client *CrossrefRestSDK, entopts map[string]any) CrossrefRestEntity

var NewTypeEntityFunc func(client *CrossrefRestSDK, entopts map[string]any) CrossrefRestEntity

var NewWorkEntityFunc func(client *CrossrefRestSDK, entopts map[string]any) CrossrefRestEntity

