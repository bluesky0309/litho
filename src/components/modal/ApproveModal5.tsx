"use client";
import Image from "next/image";
import { useOpenApproveModalContext } from "@/context/ApproveModalContext";
export default function ApproveModal5() {
  const { setOpenApproveModal } = useOpenApproveModalContext();
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-40">
        <div className="sm:w-[627px] sm:h-[461px] w-full h-full bg-[#121212] border-[1px] border-[#272727] sm:rounded-[30px] rounded-none flex items-center justify-center relative">
          <div>
            <div className="w-full text-center inline-flex justify-center">
              <p className="text-[20px]">STEP 2/2</p>
              <p className="bg-gradient-to-r from-[#3242F5] to-[#63D8EC] bg-clip-text text-transparent text-[20px] ml-[10px]">
                SEND
              </p>
            </div>
            <div className="w-full flex justify-center mt-[40px]">
              <Image
                alt="warning"
                width={0}
                height={0}
                src={"/icon/warning.svg"}
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-full text-center mt-[30px]">
              <p className="text-[16px]">
                You rejected Send transaction in Metamask. <br />
                Press Send again to start over or close this
                <br /> window.
              </p>
            </div>
            <div className="w-full h-[44px] mt-[30px] flex items-center justify-center">
              <button className="w-[225px] h-full rounded-[10px] bg-gradient-to-r from-[#3242F5] to-[#63D8EC] text-[15px] hover:opacity-80">
                Send again
              </button>
            </div>
          </div>
          <button
            className="absolute top-[30px] right-[30px]"
            onClick={() => {
              setOpenApproveModal(0);
            }}
          >
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
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#121212] opacity-80 z-30"></div>
    </>
  );
}
