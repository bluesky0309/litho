export type Lp = { currency: string; image: string };
export type SwitchCurrencyDropDownProps = {
  setOpenDropDown: (open: boolean) => void;
  chain: string;
  setCoin: (coin: Coin) => void;
};
export type Coin = {
  currency: string;
  image: string;
};
export type ActiveStakes = {
  coin: Coin,
  amount: number,
  stakePeriod: number,
  lp: string,
  multiply: number,
  reward: number
};
export type StakeModalProps = {
  stakeModal: boolean;  
  setStakeModal: React.Dispatch<React.SetStateAction<boolean>>;  
  setActiveStakes: React.Dispatch<React.SetStateAction<ActiveStakes[]>>;  
  activeStakes: ActiveStakes[]; 
}
export type SwitchChainDropDownProps = {
  switchChainDropDown: boolean;
  setSwitchChainDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  setChain: (chain: string) => void;
}
export type RangeInputProps = {
  stakePeriod: number;
  setStakePeriod: React.Dispatch<React.SetStateAction<number>>;
}
