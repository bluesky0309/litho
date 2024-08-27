"use client";
import React, { useState } from "react";
import Image from "next/image";
import SwitchChainDropDown from "@/components/Dropdown/SwitchChainDropDown";
import { useChainContext } from "@/context/chainContext";
export default function Header() {
  const [switchChainDropDown, setSwitchChainDropDown] = useState(false);
  const { chain, setChain } = useChainContext();
  const handleChangeSwitchChainDropDown = () => {
    setSwitchChainDropDown(!switchChainDropDown);
  };
  return (
    <div className="w-full h-[87px] bg-[#121212] inline-flex items-center justify-between laptop:px-[100px] md:px-[50px] px-[20px]">
      <div className="w-full h-full relative inline-flex items-center justify-between">
        <button className="h-[34px] inline-flex items-center">
          <div className="w-[34px] h-[34px] rounded-full bg-[#272727] flex items-center justify-center border-[1px] border-[#383838]">
            <Image
              alt="logo"
              width={0}
              height={0}
              src="/icon/logo.svg"
              className="w-[19px] h-[14px] mt-[3px]"
            />
          </div>
          <p className="text-white ml-[8px] text-[18px] hidden sm:block">
            Stake.litho.ai
          </p>
        </button>

        <div className="h-[40px] inline-flex">
          <div className="h-full">
            <button
              className="sm:w-[230px] w-[77px] h-full inline-flex items-center rounded-[10px] bg-[#1D1D1D] px-[10px] sm:px-[20px] hover:bg-[#353535] relative py-[10px] justify-between"
              onClick={() => {
                handleChangeSwitchChainDropDown();
              }}
            >
              <Image
                alt="litho icon"
                width={0}
                height={0}
                className="w-[24px] h-auto"
                src={`${
                  chain === "litho"
                    ? "/icon/coin/lithologo.svg"
                    : "/icon/coin/bsc.svg"
                }`}
              />
              <p className="font-[400] text-[18px] sm:block hidden">
                {chain === "litho" ? "Lithosphere" : "BSC blockchain"}
              </p>
              <Image
                alt="Drop down"
                width={0}
                height={0}
                className="w-[14px] h-auto"
                src="/icon/dropdown.svg"
              />
            </button>
            <SwitchChainDropDown
              switchChainDropDown={switchChainDropDown}
              setSwitchChainDropDown={setSwitchChainDropDown}
              setChain={setChain}
            />
          </div>
          <button className="border-[#FFFFFF50] border-[1px] h-full rounded-[10px] text-[15px] font-[400] ml-[20px] w-[145px]">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
