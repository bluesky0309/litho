"use client";
import Image from "next/image";
import React, { useState } from "react";
export default function ApproveModal4() {
  const [link, setLink] = useState<string>("");
  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
  };
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-40">
        <div className="w-[627px] h-[439px] relative bg-[#121212] border-[1px] border-[#272727] rounded-[30px] flex items-center justify-center">
          <div>
            <div className="w-full text-center inline-flex justify-center">
              <p className="text-[20px]">STEP 2/2</p>
              <p className="bg-gradient-to-r from-[#3242F5] to-[#63D8EC] bg-clip-text text-transparent text-[20px] ml-[10px]">
                SEND
              </p>
            </div>
            <div className="w-full flex justify-center mt-[40px]">
              <Image
                alt="success"
                width={0}
                height={0}
                src={"/icon/success.svg"}
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-full text-center mt-[20px]">
              <p className="text-[16px]">Sent</p>
            </div>
            <p className="w-full text-center mt-[20px] text-[16px] text-[#707070]">
              It takes some time for transaction <br /> to get confirmed.
            </p>
            <div className="w-full inline-flex items-center justify-center mt-[20px]">
              <div className="w-[482px] h-[56px] relative">
                <input
                  className="w-full h-full rounded-[8px] border-[1px] border-[#272727] flex items-center focus:outline-none px-[20px] bg-black text-[16px]"
                  onChange={(e) => setLink(e.target.value)}
                />
                <button
                  className="absolute right-[20px] top-[16px]"
                  onClick={() => handleCopyLink()}
                >
                  <Image
                    src={"icon/copy.svg"}
                    width={0}
                    height={0}
                    alt="copy"
                    className="w-[24px] h-[24px]"
                  />
                </button>
              </div>
            </div>
          </div>
          <button className="absolute top-[30px] right-[30px]">
            <Image
              className="w-[16px] h-[16px]"
              alt="close"
              src={"/icon/close.svg"}
              width={0}
              height={0}
            />
          </button>
        </div>
      </div>
    </>
  );
}
