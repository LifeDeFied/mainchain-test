package lifedefied_test

import (
	"testing"

	keepertest "LifeDeFied/testutil/keeper"
	"LifeDeFied/testutil/nullify"
	"LifeDeFied/x/lifedefied"
	"LifeDeFied/x/lifedefied/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.LifedefiedKeeper(t)
	lifedefied.InitGenesis(ctx, *k, genesisState)
	got := lifedefied.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
