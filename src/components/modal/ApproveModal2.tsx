"use client";
import Image from "next/image";
import { useOpenApproveModalContext } from "@/context/ApproveModalContext";
export default function ApproveModal2() {
  const { setOpenApproveModal } = useOpenApproveModalContext();
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 z-40 flex items-center justify-center">
        <div className="sm:w-[627px] sm:h-[507px] w-full h-full sm:px-[60px] px-[20px] relative bg-[#121212] border-[1px] border-[#272727] sm:rounded-[30px] rounded-none flex items-center justify-center">
          <div>
            <div className="w-full text-center inline-flex justify-center">
              <p className="text-[20px]">STEP 1/2</p>
              <p className="bg-gradient-to-r from-[#3242F5] to-[#63D8EC] bg-clip-text text-transparent text-[20px] ml-[10px]">
                APPROVE
              </p>
            </div>
            <div className="w-full flex justify-center mt-[40px]">
              <Image
                alt="loading"
                width={0}
                height={0}
                src={"/icon/warning.svg"}
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-full text-center mt-[20px]">
              <p className="text-[16px]">
                You rejected Approve transaction in Metamask. Press Approve
                <br />
                again to start over or close this window.
              </p>
            </div>
            <p className="w-full text-center mt-[20px] text-[16px] text-[#707070]">
              BEP-20 tokens are deployed with functionality that allows other
              smart contracts to move tokens. By approving the smart contracts, it now has
              permission to execute the peer to peer swapping behavior on your behalf. The Spend Limit permission is the total amount of tokens that are able to move when using MetaMask Swap.
            </p>
            <div className="w-full flex items-center justify-center mt-[20px]">
              <button className="bg-gradient-to-r from-[#3242F5] to-[#63D8EC] text-[15px] w-[225px] h-[44px] rounded-[10px]  hover:opacity-80">
                Approve again
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
