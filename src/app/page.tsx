"use client";
import React, { useState } from "react";
import Image from "next/image";
import LockupOverview from "@/components/staking/LockupOverview";
import StakeModal from "@/components/modal/StakeModal";
import { ActiveStakes } from "@/types";
export default function Home() {
  const [stakeModal, setStakeModal] = useState(false);
  const [activeStakes, setActiveStakes] = useState<ActiveStakes[] | []>([]);
  return (
    <div className="relative w-full h-full bg-[#171717] overflow-auto">
      <div className="absolute w-full h-full laptop:px-[100px] md:px-[50px] px-[20px] z-10">
        <h1 className="text-[36px] sm:mt-[50px] mt-[20px] font-[400]">Stake</h1>
        <div className="dashboard:flex block justify-between w-full sm:mt-[30px] mt-[15px]">
          <div className="sm:w-[430px] w-full mb-[30px]">
            <p className="text-[16px] text-gray-500 font-[400]">JOT price:</p>
            <div className="inline-flex items-center mt-[15px]">
              <Image
                src={"/icon/coin/litho.svg"}
                alt="litho coin"
                width={0}
                height={0}
                className="w-[48px] h-auto"
              />
              <p className="text-[30px] ml-[15px]">$2.899</p>
              <button className="w-[63px] h-[32px] border-[1px] border-[#6F6F6F] rounded-[7px] ml-[15px] text-[15px]">
                Buy
              </button>
            </div>
            <p className="text-[16px] mt-[35px] sm:block hidden">
              First you need to connect your wallet and then choose a suitable
              cryptocurrency for staking .
            </p>
            <button
              className="sm:w-[143px] w-full sm:h-[44px] h-[40px] bg-gradient-to-r from-[#3242F5] to-[#63D8EC] opacity-100 hover:opacity-70 rounded-[10px] sm:mt-[35px] mt-[10px] text-[16px]"
              onClick={() => {
                setStakeModal(true);
              }}
            >
              Stake
            </button>
          </div>
          <LockupOverview />
        </div>
        <p className="w-full text-[24px]">My active stakes</p>
        {activeStakes.length === 0 ? (
          <>
            <div className="w-full h-[72px] bg-[#1C1C1CC9] border-[#282828] rounded-[15px] mt-[15px] flex items-center justify-center text-[20px]">
              No active stakes
            </div>
            <div className="w-full h-[50px]"></div>
          </>
        ) : (
          <>
            {activeStakes.map((item: ActiveStakes, index: number) => (
              <div
                className="w-full lg:h-[72px] h-auto bg-[#1C1C1CC9] mt-[15px] rounded-[15px] border-[1px] border-[#282828] sm:py-[10px] py-[20px] px-[20px] grid md:grid-cols-7 grid-cols-2"
                key={index}
              >
                <div className="">
                  <p className="text-[14px] text-[#7E7E7E]">Total staked:</p>
                  <div className="inline-flex items-center">
                    <Image
                      alt="lp"
                      width={0}
                      height={0}
                      src={item.coin.image}
                      className="w-[23px] h-[24px] ml-[10px]"
                    />
                    <Image
                      alt="litho"
                      width={0}
                      height={0}
                      src={"/icon/coin/litho.svg"}
                      className="w-[23px] h-[24px] ml-[-35px]"
                    />
                    <p className="text-[20px] ml-[20px]">1,232.42</p>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] text-[#7E7E7E]">Multiplier:</p>
                  <p className="text-[20px]">{item.multiply}</p>
                </div>
                <div>
                  <p className="text-[14px] text-[#7E7E7E]">
                    My % of the pool:
                  </p>
                  <p className="text-[20px]">36%</p>
                </div>
                <div>
                  <p className="text-[14px] text-[#7E7E7E]">
                    Locked days left:
                  </p>
                  <p className="text-[20px]">{item.stakePeriod}</p>
                </div>
                <div>
                  <p className="text-[12px] text-[#7E7E7E]">Rewards:</p>
                  <div className="inline-flex items-center">
                    <Image
                      alt="lp"
                      width={0}
                      height={0}
                      src={item.coin.image}
                      className="w-[23px] h-[24px]"
                    />
                    <p className="text-[20px] ml-[5px]">{item.reward}</p>
                  </div>
                </div>
                <div className="inline-flex h-full text-[12px] items-center col-span-2 justify-center">
                  <button className="md:w-[143px] w-1/2 border-[1px] border-[#272727] rounded-[10px] h-[44px] hover:opacity-80 text-[16px]">
                    Unstake
                  </button>
                  <button className="md:w-[143px] w-1/2 bg-gradient-to-r from-[#3242F5] to-[#63D8EC] rounded-[10px] h-[44px] ml-[10px] hover:opacity-80 text-[16px]">
                    Claim
                  </button>
                </div>
              </div>
            ))}
            <div className="w-full h-[50px]"></div>
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
