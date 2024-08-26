"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LockupOverview from "@/components/staking/LockupOverview";
import StakeModal from "@/components/modal/StakeModal";
export default function Home() {
  const [stakeModal, setStakeModal] = useState(false);
  const handleStakeModal = () => {
    setStakeModal(true);
  };
  const [activeStakes, setActiveStakes] = useState([]);
  useEffect(() => {
    console.log(activeStakes);
  }, [activeStakes]);
  return (
    <div className="relative w-full h-full bg-[#171717] overflow-auto">
      <div className="absolute w-full h-full laptop:px-[100px] md:px-[50px] px-[20px] z-10">
        <h1 className="text-[30px] sm:mt-[50px] mt-[20px]">Stake</h1>
        <div className="dashboard:flex block justify-between w-full sm:mt-[30px] mt-[15px]">
          <div className="dashboard:w-[430px] sm:w-[430px] w-full mb-[30px]">
            <p className="text-[14px] text-gray-500">JOT price:</p>
            <div className="inline-flex items-center mt-[10px]">
              <Image
                src={"/icon/coin/litho.svg"}
                alt="litho coin"
                width={0}
                height={0}
                className="w-[40px] h-auto"
              />
              <p className="text-[27px] ml-[15px]">$2.899</p>
              <button className="w-[60px] h-[30px] border-[1px] border-[#6F6F6F] rounded-[10px] ml-[15px] text-[12px]">
                Buy
              </button>
            </div>
            <p className="text-[13px] mt-[30px] sm:block hidden">
              First you need to connect your wallet and then choose a suitable
              cryptocurrency for staking .
            </p>
            <button
              className="sm:w-[110px] w-full h-[40px] bg-gradient-to-r from-[#3242F5] to-[#63D8EC] opacity-100 hover:opacity-70 rounded-[10px] sm:mt-[30px] mt-[10px] text-[13px]"
              onClick={() => {
                handleStakeModal();
              }}
            >
              Stake
            </button>
          </div>
          <LockupOverview />
        </div>
        <p className="w-full text-[18px]">My active stakes</p>
        {activeStakes.length === 0 ? (
          <>
            <div className="w-full h-[60px] bg-[#1C1C1CC9] border-[#282828] mt-[15px] rounded-[15px] flex items-center justify-center">
              No active stakes
            </div>
            <div className="w-full h-[50px]"></div>
          </>
        ) : (
          <>
            {activeStakes.map((item: any, index: any) => (
              <div
                className="w-full bg-[#1C1C1CC9] mt-[15px] rounded-[15px] border-[1px] border-[#282828] py-[10px] px-[20px] grid md:grid-cols-7 grid-cols-2"
                key={index}
              >
                <div className="">
                  <p className="text-[12px] text-[#7E7E7E]">Total staked:</p>
                  <div className="inline-flex items-center mt-[5px]">
                    <Image
                      alt="lp"
                      width={0}
                      height={0}
                      src={item.coin.image}
                      className="w-[25px] h-auto ml-[10px]"
                    />
                    <Image
                      alt="litho"
                      width={0}
                      height={0}
                      src={"/icon/coin/litho.svg"}
                      className="w-[25px] h-auto ml-[-35px]"
                    />
                  </div>
                </div>
                <div className="">
                  <p className="text-[12px] text-[#7E7E7E]">Multiplier:</p>
                  <p className="mt-[3px] text-[18px]">{item.multiply}</p>
                </div>
                <div className="">
                  <p className="text-[12px] text-[#7E7E7E]">My % of the pool:</p>
                  <p className="mt-[3px] text-[18px]">36%</p>
                </div>
                <div className="">
                  <p className="text-[12px] text-[#7E7E7E]">Locked days left:</p>
                  <p className="mt-[3px] text-[18px]">{item.stakePeriod}</p>
                </div>
                <div className="">
                  <p className="text-[12px] text-[#7E7E7E]">Rewards:</p>
                  <p className="mt-[3px] text-[18px]">{item.reward}</p>
                </div>
                <div className="inline-flex h-full text-[12px] items-center col-span-2 justify-center">
                  <button className="md:w-[150px] w-1/2 border-[1px] border-[#272727] rounded-[10px] h-[40px] hover:opacity-80">Unstake</button>
                  <button className="md:w-[150px] w-1/2 bg-gradient-to-r from-[#3242F5] to-[#63D8EC] rounded-[10px] h-[40px] ml-[10px] hover:opacity-80">Claim</button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <StakeModal
        stakeModal={stakeModal}
        setStakeModal={setStakeModal}
        setActiveStakes={setActiveStakes}
        activeStakes={activeStakes}
      />
      <div className="absolute w-full h-[50%] bg-gradient-radial top-0 z-0"></div>
    </div>
  );
}
