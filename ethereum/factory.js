import web3 from "./web3";
import CampaignFactory from "./build/VotingFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xCAaf832Ad3cE44f3FCB68604EA5AC3Bc2F5247D4"
);

export default instance;
