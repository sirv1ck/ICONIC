import * as ConfigModuleEth from "./configEth";
import * as ConfigModuleBnb from "./configBnb";

import IconEth from "../assets/images/token/eth.png";
import IconBnb from "../assets/images/token/bnb.png";

const chains = {
  BNB: {
    id: 1,
    icon: IconBnb,
    name: "BNB Smart Chain Testnet",
    chainId: 97,
    configModule: ConfigModuleBnb,
    payWith: "BNB",
    title: "Buy on BNB",
  },
};

export const chainInfo = [
  {
    ...chains.BNB,
    buyChainId: chains.BNB.chainId,
    buyTitle: chains.BNB.title,
    buyIcon: chains.BNB.icon,
    buyConfigModule: chains.BNB.configModule,
  },
];

export const chainConfig = (chainId) => {
  const config = chainInfo.find((item) => item.chainId === chainId);

  return config || chainInfo[0];
};
