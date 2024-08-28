import Image from "next/image";
import { SwitchChainDropDownProps } from "@/types";
import { createThirdwebClient } from "thirdweb";

import { useChainContext } from "@/context/chainContext";
export default function SwitchChainDropDown(props: SwitchChainDropDownProps) {
  const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_API_KEY as string,
  });
  const { chain } = useChainContext();
  

  return (
    <div className={`${props.switchChainDropDown ? "block" : "hidden"}`}>
      <div
        className={`sm:w-[328px] w-full bg-[#121212] border-[1px] border-[#272727] absolute top-[75px] sm:right-[83px] right-0 z-30 rounded-[20px] px-[21px] py-[20px]`}
      >
        <p className="text-[20px]">Switch to</p>
        {chain === "bsc" ? (
          <>
            <div className="inline-flex items-center mt-[25px]">
              <Image
                alt="Litho Icon"
                width={0}
                height={0}
                src="/icon/coin/lithologo.svg"
                className="w-[20px] h-auto"
              />
              <p className="text-[14px] ml-[5px]">Lithosphere blockchain</p>
            </div>
            <button
              className="bg-[#1F1F1F] hover:bg-[#3b3b3b] w-full h-[62px] rounded-[11px] inline-flex items-center mt-[5px]"
              onClick={() => {
                props.setChain("litho"), props.setSwitchChainDropDown(false);
                props.setWalletId("pro.tokenpocket")
              }}
            >
              <Image
                alt="Lithosphere wallet"
                src="/icon/coin/lithologo.svg"
                width={0}
                height={0}
                className="w-[30px] h-[30px] ml-[20px]"
              />
              <p className="text-[20px] ml-[10px]">Lithosphere</p>
            </button>
          </>
        ) : (
          <>
            <div className="inline-flex items-center mt-[20px]">
              <Image
                alt="BSC Icon"
                width={0}
                height={0}
                src="/icon/coin/bsc.svg"
                className="w-[17px] h-auto"
              />
              <p className="text-[14px] ml-[5px]">BSC blockchain</p>
            </div>
            <button
              className="bg-[#1F1F1F] hover:bg-[#3b3b3b] w-full h-[62px] rounded-[11px] inline-flex items-center mt-[10px]"
              onClick={() => {
                props.setChain("bsc"), props.setSwitchChainDropDown(false);
                props.setWalletId("io.metamask")
              }}
            >
              <Image
                alt="Meta Mask"
                src="/icon/switchchain/metamask.svg"
                width={0}
                height={0}
                className="w-[160px] h-auto ml-[20px]"
              />
            </button>
            <button
              className="bg-[#1F1F1F] hover:bg-[#3b3b3b] w-full h-[62px] rounded-[10px] inline-flex items-center mt-[15px]"
              onClick={() => {
                props.setChain("bsc"), props.setSwitchChainDropDown(false);
                props.setWalletId("walletConnect")
              }}
            >
              <Image
                alt="Wallet Connect"
                src="/icon/switchchain/walletconnect.svg"
                width={0}
                height={0}
                className="w-[191px] h-[22px] ml-[20px]"
              />
            </button>
          </>
        )}
      </div>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-20 sm:bg-transparent bg-[#12121280]`}
        onClick={() => props.setSwitchChainDropDown(!props.switchChainDropDown)}
      ></div>
    </div>
  );
}
