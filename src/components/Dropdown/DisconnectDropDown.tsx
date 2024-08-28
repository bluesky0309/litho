import Image from "next/image";
import { DisconnectDropDownProps } from "@/types";
export function DisconnectDropDown(props: DisconnectDropDownProps) {
  return (
    <>
      <div className="absolute right-0 z-30 top-[50px] w-[328px] h-[194px] bg-[#121212] border-[1px] border-[#272727] rounded-[20px] px-[21px] py-[26px]">
        <div className="w-full inline-flex items-center justify-between">
          <p className="text-[20px]">Wallet Disconnect</p>
          <button
            onClick={() => {
              props.setOpenDisconnectModal(false);
            }}
          >
            <Image
              alt="close"
              className="w-[12px] h-auto"
              width={0}
              height={0}
              src={"/icon/close.svg"}
            />
          </button>
        </div>
        <div className="w-full inline-flex items-center mt-[20px]">
          <Image
            alt="Litho Icon"
            width={0}
            height={0}
            src={
              props.chain === "litho"
                ? "/icon/coin/lithologo.svg"
                : "/icon/coin/bsc.svg"
            }
            className="w-[20px] h-auto"
          />
          <p className="text-[14px] ml-[5px]">
            {props.chain === "bsc" ? "BSC blockchain" : "LITHO blockchain"}
          </p>
        </div>
        <button
          className="w-full h-[56px] bg-[#1D1D1D] inline-flex items-center p-[16px] rounded-[11px] mt-[10px]"
          onClick={() => {
            props.disconnectWallet();
            props.setOpenDisconnectModal(false);
          }}
        >
          <Image
            src={"/icon/logout.svg"}
            alt="logout"
            width={0}
            height={0}
            className="w-[24px] h-auto"
          />
          <p className="text-[16px] ml-[10px]">Disconnect</p>
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-20 sm:bg-transparent bg-[#12121280]`}
        onClick={() => props.setOpenDisconnectModal(false)}
      ></div>
    </>
  );
}
