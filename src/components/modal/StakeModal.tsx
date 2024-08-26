"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useChainContext } from "@/context/chainContext";
import RangeInput from "@/components/RangeInput/RangeInput";
import SetCurrencyDropDown from "@/components/Dropdown/SetCurrencyDropDown";
import { useLpContext } from "@/context/LpContext";

export default function StakeModal(props: any) {
  const { lp, setLp } = useLpContext();
  const [info, setInfo] = useState(false);
  const [color, setColor] = useState(true);
  const [amount, setAmount] = useState("");
  const [stakePeriod, setStakePeriod] = useState("23");
  const [coin, setCoin] = useState({
    currency: "JOT",
    image: "/icon/coin/litho1.svg",
  });
  const [openDropDown, setOpenDropDown] = useState(false);
  const { chain } = useChainContext();
  const handleStake = () => {
    if (amount === "") {toast.error("Please Input Stake Amount")}
    else {
      const stake = {
        amount: amount,
        stakePeriod: stakePeriod,
        lp: lp,
        multiply: 1.5,
        reward: 1400,
        coin: coin
      }
      props.setActiveStakes([...props.activeStakes, stake]);
      setAmount('');
      setStakePeriod("23");
      props.setStakeModal(false);

    }
  }
  useEffect(() => {
    if (chain === "tron")
      setCoin({ currency: "JOT", image: "/icon/coin/jot1.svg" });
    else setCoin({ currency: "LITHO", image: "/icon/coin/litho.svg" });
  }, [chain]);
  useEffect(() => {

  }, [stakePeriod])
  return (
    <>
      {props.stakeModal && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-[#121212] opacity-80 z-20"
            onClick={() => {
              props.setStakeModal(!props.stakeModal);
              setColor(true);
              setOpenDropDown(false);
            }}
          ></div>
          <div className="sm:absolute sm:w-full sm:h-full fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-30">
            <div className="w-[400px] bg-[#121212] border-[1px] border-[#272727] rounded-[10px] z-30 pt-[20px] pb-[40px] px-[20px]">
              <div className="inline-flex justify-between w-full">
                <p>Choose pool to stake</p>
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
                    className="w-[10px] h-auto"
                  />
                </button>
              </div>
              <div className="w-full h-[33px] rounded-full bg-[#1F1F1F] mt-[10px] inline-flex">
                <button
                  className={`w-[50%] h-full ${
                    color ? "bg-gradient-to-r from-[#3242F5] to-[#63D8EC]" : ""
                  } rounded-full text-[12px]`}
                  onClick={() => {
                    if (chain === "tron") {
                      setLp("JotToTRX");
                    } else setLp("LithoToBNB");
                    setColor(true);
                  }}
                >
                  {chain === "tron" ? "JOT/TRX LP" : "LITHO/BNB LP"}
                </button>
                <button
                  className={`w-[50%] h-full ${
                    !color ? "bg-gradient-to-r from-[#3242F5] to-[#63D8EC]" : ""
                  } rounded-full text-[12px]`}
                  onClick={() => {
                    if (chain === "tron") {
                      setLp("JotToUSDT")
                    } else setLp("LithoToBUSD");
                    setColor(false);
                  }}
                >
                  {chain === "tron" ? "JOT/USDT LP" : "LITHO/BUSD LP"}
                </button>
              </div>
              <div className="w-full px-[13px] py-[15px] mt-[15px] bg-[#1F1F1F] rounded-[10px]">
                <div className="w-full inline-flex justify-between">
                  <p className="text-[12px] text-[#7E7E7E]">Total staked:</p>
                  <p className="text-[11px]">12.22 JOT/TRX LP</p>
                </div>
                <div className="w-full inline-flex justify-between">
                  <p className="text-[12px] text-[#7E7E7E]">
                    Remaining rewards:
                  </p>
                  <p className="text-[11px]">2900000 of 50 000 000 JOT</p>
                </div>
                <div className="w-full inline-flex justify-between">
                  <p className="text-[12px] text-[#7E7E7E]">APY:</p>
                  <p className="text-[11px]">36%</p>
                </div>
              </div>
              <p className="text-[12px] text-[#7E7E7E] mt-[13px]">Amount</p>
              <div className="relative w-full mt-[13px]">
                <input className="w-full bg-black rounded-[10px] px-[15px] py-[10px] border-[#272727] border-[1px] focus:outline-none" onChange={(e) => {setAmount(e.target.value)}} />
                <div className="absolute right-[10px] inline-flex h-full py-[7px]">
                  <button className="w-[50px] h-full bg-[#413D17] rounded-[5px] text-[#FACC14] hover:bg-[#464119]">
                    Max
                  </button>
                  <button
                    className="w-[85px] h-full bg-[#1F1F1F] border-[1px] border-[#272727] hover:bg-[#2e2e2e] ml-[5px] rounded-[5px]"
                    onClick={() => {
                      setOpenDropDown(!openDropDown);
                    }}
                  >
                    <div className="inline-flex items-center mt-[5px]">
                      <Image
                        src={coin.image}
                        width={0}
                        height={0}
                        alt="Jot"
                        className="w-[17px] h-auto mr-[5px]"
                      />

                      <p className="text-[12px] mr-[5px]">{coin.currency}</p>
                      <Image
                        src={"/icon/dropdown.svg"}
                        width={0}
                        height={0}
                        alt="dropdown"
                        className="w-[10px] h-auto"
                      />
                    </div>
                  </button>
                  {openDropDown ? (
                    <div className="absolute top-[45px] w-full">
                      <SetCurrencyDropDown
                        setOpenDropDown={setOpenDropDown}
                        chain={chain}
                        setCoin={setCoin}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
              <p className="text-[12px] text-[#7E7E7E] mt-[10px]">
                Balance: 12,452.22 JOT
              </p>
              <p className="text-[12px] text-[#7E7E7E] mt-[5px]">
                We will automatically provide the liquidity and stake LP
              </p>
              <div className="text-[12px] text-[#7E7E7E] mt-[10px] inline-flex w-full relative">
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
                    className="w-[16px] h-auto ml-[5px]"
                  />
                </button>
                <div
                  className={`${
                    info ? "block" : "hidden"
                  } w-[150px] h-[40px] bg-[#272727] absolute left-[50px] rounded-[5px] border-[1px] border-[#5F5F5F] flex items-center justify-center`}
                >
                  <p className="text-center text-[10px]">
                    Boost your allocation by
                    <br />
                    staking longer
                  </p>
                </div>
              </div>
              <input className="w-[60px] bg-black rounded-[10px] px-[20px] py-[10px] border-[#272727] border-[1px] focus:outline-none mt-[5px]" value={stakePeriod} onChange={(e) => {setStakePeriod(e.target.value)}}></input>
              <div className="w-full mt-[10px]">
                <RangeInput stakePeriod={stakePeriod} setStakePeriod={setStakePeriod}/>
              </div>
              <div className="w-full inline-flex justify-between items-center">
                <p className="text-[12px] text-[#7E7E7E] mt-[10px]">
                  Your Multiplier:
                </p>
                <div className="w-[50px] h-[30px] border-[1px] border-[#272727] rounded-[5px] flex justify-center items-center text-[12px] mt-[10px]">
                  x1,5
                </div>
              </div>
              <div className="w-full h-[40px] bg-[#1F1F1F] rounded-[10px] mt-[10px] flex items-center justify-center text-[12px]">
                2% fee is charged when you stake or unstake.
              </div>
              <div className="w-full h-[40px] flex items-center justify-center">
                <button className="w-[150px] h-full bg-gradient-to-r from-[#3242F5] to-[#63D8EC] mt-[30px] rounded-[10px]" onClick={() => {handleStake()}}>
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
