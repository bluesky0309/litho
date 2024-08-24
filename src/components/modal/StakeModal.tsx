"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function StakeModal(props: any) {
  const [lp, setLp] = useState(true);
  return (
    <>
      {props.stakeModal && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-[#121212] opacity-80 z-20"
            onClick={() => {
              props.setStakeModal(!props.stakeModal);
            }}
          ></div>
          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="w-[400px] h-[500px] bg-[#121212] border-[1px] border-[#272727] rounded-[10px] z-30 px-[20px] py-[20px]">
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
                    lp ? "bg-gradient-to-r from-[#3242F5] to-[#63D8EC]" : ""
                  } rounded-full text-[12px]`}
                  onClick={() => {
                    setLp(true);
                  }}
                >
                  JOT/TRX LP
                </button>
                <button
                  className={`w-[50%] h-full ${
                    !lp ? "bg-gradient-to-r from-[#3242F5] to-[#63D8EC]" : ""
                  } rounded-full text-[12px]`}
                  onClick={() => {
                    setLp(false);
                  }}
                >
                  JOT/USDT LP
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
                <input className="w-full bg-black rounded-[10px] px-[15px] py-[10px] border-[#272727] border-[1px] focus:outline-none" />
                <div className="absolute right-[10px] inline-flex h-full py-[7px]">
                  <button className="w-[50px] h-full bg-[#413D17] rounded-[5px] text-[#FACC14] hover:bg-[#464119]">
                    Max
                  </button>
                  <button className="w-[85px] h-full bg-[#1F1F1F] border-[1px] border-[#272727] hover:bg-[#2e2e2e] ml-[5px] rounded-[5px]">
                    <div className="inline-flex items-center">
                      <div className="w-[17px] h-[17px] rounded-full flex items-center justify-center bg-[#0E0E0E] mr-[5px]">
                        <Image
                          src="/icon/coin/jot.svg"
                          width={0}
                          height={0}
                          alt="Jot"
                          className="w-[11px] h-auto"
                        />
                      </div>
                      <p className="text-[12px] mr-[5px]">JOT</p>
                      <Image
                        src={"/icon/dropdown.svg"}
                        width={0}
                        height={0}
                        alt="dropdown"
                        className="w-[10px] h-auto"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
