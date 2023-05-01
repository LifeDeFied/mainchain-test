package keeper_test

import (
	"testing"

	testkeeper "LifeDeFied/testutil/keeper"
	"LifeDeFied/x/lifedefied/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.LifedefiedKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
