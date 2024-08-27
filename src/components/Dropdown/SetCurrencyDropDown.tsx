"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLpContext } from "@/context/LpContext";
import { useChainContext } from "@/context/chainContext";
import { JotToTRX, JotToUSDT, LithoToBNB, LithoToBUSD } from "@/constants";
import { Lp, SwitchCurrencyDropDownProps } from "@/types";

export default function SetCurrencyDropDown(props: SwitchCurrencyDropDownProps) {
  const { lp } = useLpContext();
  const { chain } = useChainContext();
  const [stakeLp, setStakeLp] = useState<Lp[] | []>(JotToTRX);
  useEffect(() => {
    if (chain === "litho") {
      if (lp === "JotToTRX") setStakeLp(JotToTRX);
      else if (lp === "JotToUSDT") setStakeLp(JotToUSDT);
    } else {
      if (lp === "LithoToBNB") setStakeLp(LithoToBNB);
      else setStakeLp(LithoToBUSD);
    }
  }, [lp]);

  return (
    <>
      <div className="w-[199px] h-[100px] bg-[#121212] border-[1px] rounded-[15px] border-[#272727] py-[10px] px-[10px] z-30 absolute right-0 mt-[5px]">
        {stakeLp.map((item: Lp, index: number) => (
          <button
            className="inline-flex items-center py-[5px] w-full hover:bg-[#1F1F1F] rounded-[8px] h-[36px] mb-[5px]"
            key={index}
            onClick={() => {
              props.setOpenDropDown(false);
              props.setCoin(item);
            }}
          >
            <Image
              src={item.image}
              alt="currency"
              width={0}
              height={0}
              className="w-[23px] h-[24px] ml-[5px]"
            />
            <p className="text-[16px] ml-[9px]">{item.currency}</p>
          </button>
        ))}
      </div>
      <div
        className="fixed right-0 left-0 top-0 bottom-0"
        onClick={() => props.setOpenDropDown(false)}
      ></div>
    </>
  );
}
