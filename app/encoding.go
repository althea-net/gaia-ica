package gaia

import (
	"github.com/cosmos/gaia/v7/app/params"

	"github.com/cosmos/cosmos-sdk/std"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	gravitytypes "github.com/Gravity-Bridge/Gravity-Bridge/module/x/gravity/types"
)

// MakeEncodingConfig creates an EncodingConfig for testing
func MakeEncodingConfig() params.EncodingConfig {
	encodingConfig := params.MakeEncodingConfig()
	std.RegisterLegacyAminoCodec(encodingConfig.Amino)
	std.RegisterInterfaces(encodingConfig.InterfaceRegistry)
	ModuleBasics.RegisterLegacyAminoCodec(encodingConfig.Amino)
	ModuleBasics.RegisterInterfaces(encodingConfig.InterfaceRegistry)
	RegisterICAControllerForeignMsgs(encodingConfig.InterfaceRegistry)
	return encodingConfig
}

// RegisterICAControllerForeignMsgs Register all foreign Msg types to submit via Interchain Accounts
func RegisterICAControllerForeignMsgs(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&gravitytypes.MsgSendToEth{},
	)
}
