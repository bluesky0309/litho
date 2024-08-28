"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useChainContext } from "@/context/chainContext";
import RangeInput from "@/components/RangeInput/RangeInput";
import SetCurrencyDropDown from "@/components/Dropdown/SetCurrencyDropDown";
import { useLpContext } from "@/context/LpContext";
import { StakeModalProps, Coin } from "@/types";
export default function StakeModal(props: StakeModalProps) {
  const { lp, setLp } = useLpContext();
  const [info, setInfo] = useState(false);
  const [color, setColor] = useState(true);
  const [amount, setAmount] = useState("");
  const [stakePeriod, setStakePeriod] = useState(23);
  const [coin, setCoin] = useState<Coin>({
    currency: "LITHO",
    image: "/icon/coin/litho1.svg",
  });
  const [openDropDown, setOpenDropDown] = useState(false);
  const { chain } = useChainContext();
  const handleStake = () => {
    if (amount === "") {
      toast.error("Please Input Stake Amount");
    } else {
      const stake = {
        amount: parseFloat(amount),
        stakePeriod: stakePeriod,
        lp: lp,
        multiply: 1.5,
        reward: 1400,
        coin: coin,
      };
      props.setActiveStakes([...props.activeStakes, stake]);
      setAmount("");
      setStakePeriod(23);
      props.setStakeModal(false);
    }
  };
  useEffect(() => {
    if (chain === "litho")
      setCoin({ currency: "LITHO", image: "/icon/coin/lithologo.svg" });
    else setCoin({ currency: "LITHO", image: "/icon/coin/litho.svg" });
  }, [chain]);
  useEffect(() => {}, [stakePeriod]);
  return (
    <>
      {props.stakeModal && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 sm:bg-[#121212] sm:opacity-80 bg-transparent z-20"
            onClick={() => {
              props.setStakeModal(!props.stakeModal);
              setColor(true);
              setOpenDropDown(false);
            }}
          ></div>
          <div className="fixed top-0 left-0 right-0 bottom-0 sm:flex sm:items-center sm:justify-center z-30 overflow-auto">
            <div className="sm:w-[486px] w-full bg-[#121212] border-[1px] border-[#272727] rounded-[20px] z-30 pt-[20px] pb-[40px] px-[24px] h-[689px] sm:mt-0 mt-[65px]">
              <div className="inline-flex justify-between w-full">
                <p className="text-[20px]">Choose pool to stake</p>
                <button
                  onClick={() => {
                    props.setStakeModal(false);
                  }}
                >
                  <Image
                    alt="close"
                    src="/icon/close.svg"
                    width={0}
                    height={0}
                    className="w-[12px] h-auto"
                  />
                </button>
              </div>
              <div className="w-full h-[41px] rounded-full bg-[#1F1F1F] mt-[10px] inline-flex">
                <button
                  className={`w-[50%] h-full ${
                    color ? "bg-gradient-to-r from-[#3242F5] to-[#63D8EC]" : ""
                  } rounded-full text-[15px]`}
                  onClick={() => {
                    if (chain === "litho") {
                      setLp("LithoToTRX");
                    } else setLp("LithoToBNB");
                    setColor(true);
                  }}
                >
                  {chain === "litho" ? "LITHO/TRX LP" : "LITHO/BNB LP"}
                </button>
                <button
                  className={`w-[50%] h-full ${
                    !color ? "bg-gradient-to-r from-[#3242F5] to-[#63D8EC]" : ""
                  } rounded-full text-[15px]`}
                  onClick={() => {
                    if (chain === "litho") {
                      setLp("LithoToUSDT");
                    } else setLp("LithoToBUSD");
                    setColor(false);
                  }}
                >
                  {chain === "litho" ? "LITHO/USDT LP" : "LITHO/BUSD LP"}
                </button>
              </div>
              <div className="w-full p-[16px] mt-[15px] bg-[#1F1F1F] rounded-[8px] h-[115px] text-[14px] flex flex-col justify-between">
                <div className="w-full inline-flex justify-between">
                  <p className="text-[#7E7E7E]">Total staked:</p>
                  <p>12.22 LITHO/TRX LP</p>
                </div>
                <div className="w-full inline-flex justify-between">
                  <p className="text-[#7E7E7E]">Remaining rewards:</p>
                  <p className="text-right">2900000 of 50 000 000 LITHO</p>
                </div>
                <div className="w-full inline-flex justify-between">
                  <p className="text-[#7E7E7E]">APY:</p>
                  <p>36%</p>
                </div>
              </div>
              <p className="text-[14px] text-[#7E7E7E] mt-[13px]">Amount</p>
              <div className="relative w-full mt-[13px]">
                <input
                  className="w-full bg-black rounded-[10px] h-[56px] px-[16px] py-[16px] border-[#272727] border-[1px] focus:outline-none text-[24px] placeholder:text-[#272727]"
                  value={amount}
                  placeholder="0.00"
                  type="number"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
                <div className="absolute right-[10px] inline-flex h-full py-[10px]">
                  <button className="w-[62px] h-full bg-[#413D17] rounded-[6px] text-[#FACC14] hover:bg-[#464119] text-[16px]">
                    Max
                  </button>
                  <button
                    className="w-[112px] h-full bg-[#1F1F1F] border-[1px] border-[#272727] hover:bg-[#2e2e2e] ml-[5px] rounded-[6px] px-[10px]"
                    onClick={() => {
                      setOpenDropDown(!openDropDown);
                    }}
                  >
                    <div className="inline-flex items-center mt-[5px]">
                      <Image
                        src={coin.image}
                        width={0}
                        height={0}
                        alt="Litho"
                        className="w-[23px] h-auto mr-[5px]"
                      />

                      <p className="text-[16px] mr-[5px]">{coin.currency}</p>
                      <Image
                        src={"/icon/dropdown.svg"}
                        width={0}
                        height={0}
                        alt="dropdown"
                        className="w-[14px] h-auto"
                      />
                    </div>
                  </button>
                  {openDropDown ? (
                    <div className="absolute top-[50px] w-full">
                      <SetCurrencyDropDown
                        setOpenDropDown={setOpenDropDown}
                        chain={chain}
                        setCoin={setCoin}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
              <p className="text-[14px] text-[#7E7E7E] mt-[10px]">
                Balance: 12,452.22 LITHO
              </p>
              <p className="text-[14px] text-[#7E7E7E] mt-[5px]">
                We will automatically provide the liquidity and stake LP
              </p>
              <div className="text-[14px] text-[#7E7E7E] mt-[10px] inline-flex w-full relative">
                <p>Days</p>
                <button
                  onMouseOver={() => {
                    setInfo(true);
                  }}
                  onMouseLeave={() => {
                    setInfo(false);
                  }}
                >
                  <Image
                    alt="info"
                    src="/icon/info.svg"
                    width={0}
                    height={0}
                    className="w-[18px] h-auto ml-[5px]"
                  />
                </button>
                <div
                  className={`${
                    info ? "block" : "hidden"
                  } w-[181px] h-[47px] bg-[#272727] absolute left-[60px] rounded-[8px] border-[1px] border-[#5F5F5F] flex items-center justify-center`}
                >
                  <p className="text-center text-[12px] text-white">
                    Boost your allocation by
                    <br />
                    staking longer
                  </p>
                </div>
              </div>
              <input
                className="w-[95px] h-[44px] bg-black rounded-[10px] px-[20px] py-[10px] border-[#272727] border-[1px] focus:outline-none mt-[5px] text-[24px] flex items-center justify-center text-center"
                type="number"
                value={stakePeriod}
                onChange={(e) => {
                  setStakePeriod(parseFloat(e.target.value));
                }}
              ></input>
              <div className="w-full mt-[10px]">
                <RangeInput
                  stakePeriod={stakePeriod}
                  setStakePeriod={setStakePeriod}
                />
              </div>
              <div className="w-full inline-flex justify-between items-center">
                <p className="text-[14px] text-[#7E7E7E] mt-[10px]">
                  Your Multiplier:
                </p>
                <div className="w-[55px] h-[33px] border-[1px] border-[#272727] rounded-[8px] flex justify-center items-center text-[14px] mt-[10px]">
                  x1,5
                </div>
              </div>
              <div className="w-full h-[33px] bg-[#1F1F1F] rounded-[5px] mt-[10px] flex items-center justify-center text-[14px]">
                2% fee is charged when you stake or unstake.
              </div>
              <div className="w-full h-[44px] flex items-center justify-center mt-[10px]">
                <button
                  className="w-[143px] h-full bg-gradient-to-r from-[#3242F5] to-[#63D8EC] mt-[30px] rounded-[10px] text-[15px]"
                  onClick={() => {
                    handleStake();
                  }}
                >
                  Stake
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
