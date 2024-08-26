import Image from "next/image";
export default function SwitchChainDropDown(props: any) {
  return (
    <div className={`${props.switchChainDropDown ? "block" : "hidden"}`}>
      <div
        className={`w-[250px] h-[260px] bg-[#121212] border-[1px] border-[#272727] absolute top-[50px] left-0 z-30 rounded-[15px] px-[20px] py-[20px]`}
      >
        <p>Switch to</p>
        <div className="inline-flex items-center mt-[10px]">
          <Image
            alt="Tron Icon"
            width={0}
            height={0}
            src="/icon/coin/tron.svg"
            className="w-[14px] h-auto"
          />
          <p className="text-[11px] ml-[5px]">TRON blockchain</p>
        </div>
        <button
          className="bg-[#1F1F1F] hover:bg-[#3b3b3b] w-full h-[40px] rounded-[10px] inline-flex items-center"
          onClick={() => {
            props.setChain("tron"), props.setSwitchChainDropDown(false);
          }}
        >
          <Image
            alt="Tron Link"
            src="/icon/switchchain/TronLink.svg"
            width={0}
            height={0}
            className="w-[75px] h-auto ml-[10px]"
          />
        </button>
        <div className="inline-flex items-center mt-[10px]">
          <Image
            alt="BSC Icon"
            width={0}
            height={0}
            src="/icon/coin/bsc.svg"
            className="w-[14px] h-auto"
          />
          <p className="text-[11px] ml-[5px]">BSC blockchain</p>
        </div>
        <button
          className="bg-[#1F1F1F] hover:bg-[#3b3b3b] w-full h-[40px] rounded-[10px] inline-flex items-center"
          onClick={() => {
            props.setChain("bsc"), props.setSwitchChainDropDown(false);
          }}
        >
          <Image
            alt="Meta Mask"
            src="/icon/switchchain/metamask.svg"
            width={0}
            height={0}
            className="w-[95px] h-auto ml-[10px]"
          />
        </button>
        <button
          className="bg-[#1F1F1F] hover:bg-[#3b3b3b] w-full h-[40px] rounded-[10px] inline-flex items-center mt-[10px]"
          onClick={() => {
            props.setChain("bsc"), props.setSwitchChainDropDown(false);
          }}
        >
          <Image
            alt="Wallet Connect"
            src="/icon/switchchain/walletconnect.svg"
            width={0}
            height={0}
            className="w-[105px] h-auto ml-[10px]"
          />
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-20`}
        onClick={() => props.setSwitchChainDropDown(!props.switchChainDropDown)}
      ></div>
    </div>
  );
}
