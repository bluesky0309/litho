import Image from "next/image";
export default function LockupOverview() {
  return (
    <>
      <div className="dashboard:w-[546px] w-full sm:h-[290px] h-[380px] bg-[#0000004A] rounded-[10px] border-[1px] border-[#272727] px-[20px] pt-[20px] sm:pb-[40px] pb-[20px]">
        <p className="text-[16px]">Jot Art Token Lockup Overview</p>
        <p className="text-[14px] text-[#7E7E7E] mt-[5px]">
          View liquidity and JOT lockup information
        </p>
        <div className="w-full border-t-[1px] border-[#272727] mt-[15px]" />
        <div className="w-full sm:flex sm:flex-row flex flex-col sm:items-center items-start justify-between  mt-[20px]">
          <div className="inline-flex items-center w-[160px]">
            <Image
              alt="package-icon"
              src={"/icon/package-box-lock.svg"}
              width={0}
              height={0}
              className="w-[24px] h-auto"
            />
            <p className="text-[#7E7E7E] ml-[5px] text-[16px]">Liquidity Locked:</p>
          </div>
          <p className="sm:text-right text-left text-[16px]">0.00% Liquidity</p>
        </div>
        <div className="w-full flex sm:flex-row flex-col justify-between mt-[20px]">
          <div className="flex">
            <Image
              alt="package-icon"
              src={"/icon/MBC.svg"}
              width={0}
              height={0}
              className="w-[24px] h-auto mt-[-15px]"
            />
            <div className="w-[115px]">
              <p className="text-[#7E7E7E] ml-[5px] text-[16px]">JOT Locked:</p>
              <p className="text-[#4F4F4F] ml-[5px] text-[12px]">
                Lithospheres blockchain
              </p>
            </div>
          </div>
          <p className="sm:text-right text-left text-[16px]">100,000,000.00 JOT (10.000%)</p>
        </div>
        <div className="w-full flex sm:flex-row flex-col sm:items-center items-start justify-between mt-[20px]">
          <div className="inline-flex items-center w-[160px]">
            <Image
              alt="package-icon"
              src={"/icon/money.svg"}
              width={0}
              height={0}
              className="w-[24px] h-auto"
            />
            <p className="text-[#7E7E7E] ml-[5px] text-[16px]">Circulating Supply:</p>
          </div>
          <p className="sm:text-right text-left text-[16px]">900,000,000.00 JOT</p>
        </div>
      </div>
      <div className="w-full h-[20px] dashboard:hidden block"></div>
    </>
  );
}
