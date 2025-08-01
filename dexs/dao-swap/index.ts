import * as sdk from "@defillama/sdk";
import { CHAIN } from "../../helpers/chains";
import { univ2Adapter } from "../../helpers/getUniSubgraphVolume";
import { SimpleAdapter } from "../../adapters/types";

const fetch = univ2Adapter({
  endpoints: {
    [CHAIN.BSC]: sdk.graph.modifyEndpoint('7APt1aJ4g5VJqcKF47if3kDjsNSG8mHPGv9YSt8Qf39i')
  },
  factoriesName: "pancakeFactories",
  dayData: "pancakeDayData",
});

const adapter: SimpleAdapter = {
  version: 1,
  fetch,
  chains: [CHAIN.BSC],
  start: 1663921255,
}

export default adapter;
