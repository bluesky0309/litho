"use client";
import React, { useState } from "react";
import Image from "next/image";
import SwitchChainDropDown from "@/components/Dropdown/SwitchChainDropDown";
import { useChainContext } from "@/context/chainContext";
export default function Header() {
  const [switchChainDropDown, setSwitchChainDropDown] = useState(false);
  const {chain, setChain} = useChainContext()
  const handleChangeSwitchChainDropDown = () => {
    setSwitchChainDropDown(!switchChainDropDown);
  };
  return (
    <div className="w-full h-[100px] bg-[#121212] inline-flex items-center justify-between laptop:px-[100px] md:px-[50px] px-[20px]">
      <button className="h-[40px] inline-flex items-center">
        <div className="w-[35px] h-[35px] rounded-full bg-[#272727] flex items-center justify-center border-[1px] border-[#383838]">
          <Image
            alt="logo"
            width={0}
            height={0}
            src="/icon/logo.svg"
            className="w-[21px] h-auto mt-[3px]"
          />
        </div>
        <p className="text-white ml-[15px] text-[18px] hidden sm:block">
          Stake.litho.ai
        </p>
      </button>

      <div className="h-[40px] inline-flex">
        <div className="h-full relative">
          <button
            className="h-full inline-flex items-center rounded-[10px] bg-[#1D1D1D] px-[10px] sm:px-[15px] hover:bg-[#353535] relative"
            onClick={() => {
              handleChangeSwitchChainDropDown();
            }}
          >
            <Image
              alt="tron icon"
              width={0}
              height={0}
              className="w-[25px] h-auto mr-[10px]"
              src={`${chain=== "tron" ? "/icon/coin/tron.svg" : "/icon/coin/bsc.svg"}`}
            />
            <p className="font-[400] mr-[10px] text-[17px] sm:block hidden">
              {chain === "tron" ? "TRON blockchain" : "BSC blockchain"}
            </p>
            <Image
              alt="Drop down"
              width={0}
              height={0}
              className="w-[15px] h-auto"
              src="/icon/dropdown.svg"
            />
          </button>
          <SwitchChainDropDown
            switchChainDropDown={switchChainDropDown}
            setSwitchChainDropDown={setSwitchChainDropDown}
            setChain={setChain}
          />
        </div>
        <button className="border-[#FFFFFF50] border-[1px] h-full rounded-[10px] text-[15px] font-[400] ml-[20px] w-[140px]">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}
