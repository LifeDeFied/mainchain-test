package keeper_test

import (
	"context"
	"testing"

	keepertest "LifeDeFied/testutil/keeper"
	"LifeDeFied/x/lifedefied/keeper"
	"LifeDeFied/x/lifedefied/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.LifedefiedKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
