"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLpContext } from "@/context/LpContext";
import { useChainContext } from "@/context/chainContext";
export default function SetCurrencyDropDown(props: any) {
  const { lp } = useLpContext();
  const { chain } = useChainContext();
  const JotToTRX = [
    { currency: "JOT", image: "/icon/coin/jot1.svg" },
    { currency: "TRX", image: "/icon/coin/tron.svg" },
  ];
  const JotToUSDT = [
    { currency: "JOT", image: "/icon/coin/jot1.svg" },
    { currency: "USDT", image: "/icon/coin/usdt.svg" },
  ];
  const LithoToBNB = [
    { currency: "LITHO", image: "/icon/coin/litho.svg" },
    { currency: "BNB", image: "/icon/coin/bsc.svg" },
  ];
  const LithoToBUSD = [
    { currency: "LITHO", image: "/icon/coin/litho.svg" },
    { currency: "BUSD", image: "/icon/coin/busd.svg" },
  ];
  const [stakeLp, setStakeLp] = useState(JotToTRX);
  useEffect(() => {
    if (chain === "tron") {
      if (lp === "JotToTRX") setStakeLp(JotToTRX);
      else if (lp === "JotToUSDT") setStakeLp(JotToUSDT);
    } else {
      if (lp === "LithoToBNB") setStakeLp(LithoToBNB);
      else setStakeLp(LithoToBUSD);
    }
  }, [lp]);

  return (
    <>
      <div className="w-full bg-[#121212] border-[1px] rounded-[5px] border-[#272727] py-[7px] px-[5px] z-30 absolute">
        {stakeLp.map((item: any, index: any) => (
          <button
            className="inline-flex items-center py-[5px] w-full hover:bg-[#1F1F1F] rounded-[5px]"
            key={index}
            onClick={() => {
              props.setOpenDropDown(false);
              props.setCoin(item)
            }}
          >
            <Image
              src={item.image}
              alt="currency"
              width={0}
              height={0}
              className="w-[17px] h-auto ml-[5px]"
            />
            <p className="text-[12px] ml-[9px]">{item.currency}</p>
          </button>
        ))}
        <div className="w-full py-[5px] items-center inline-flex">
          <Image src={stakeLp[1].image} alt="first coin" width={0} height={0} className="w-[17px] h-auto ml-[10px]"/>
          <Image src={stakeLp[0].image} alt="first coin" width={0} height={0} className="w-[17px] h-auto ml-[-22px]"/>
          <p className="text-[12px] ml-[10px]">{stakeLp[0].currency}/{stakeLp[1].currency} LP</p>
        </div>
      </div>
      <div
        className="fixed right-0 left-0 top-0 bottom-0"
        onClick={() => props.setOpenDropDown(false)}
      ></div>
    </>
  );
}
