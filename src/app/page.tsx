import Image from "next/image";
import LockupOverview from "@/components/staking/LockupOverview";
export default function Home() {
  return (
    <div className="relative w-full h-full bg-[#171717] overflow-auto">
      <div className="absolute w-full h-full laptop:px-[100px] md:px-[50px] px-[20px] z-10">
        <h1 className="text-[30px] sm:mt-[50px] mt-[20px]">Stake</h1>
        <div className="dashboard:flex block justify-between w-full sm:mt-[30px] mt-[15px]">
          <div className="dashboard:w-[430px] sm:w-[430px] w-full mb-[30px]">
            <p className="text-[14px] text-gray-500">JOT price:</p>
            <div className="inline-flex items-center mt-[10px]">
              <Image src={'/icon/coin/litho.svg'} alt="litho coin" width={0} height={0} className="w-[40px] h-auto"/>
              <p className="text-[27px] ml-[15px]">$2.899</p>
              <button className="w-[60px] h-[30px] border-[1px] border-[#6F6F6F] rounded-[10px] ml-[15px] text-[12px]">Buy</button>
            </div>
            <p className="text-[13px] mt-[30px] sm:block hidden">First you need to connect your wallet and then choose a suitable cryptocurrency for staking .</p>
            <button className="sm:w-[110px] w-full h-[40px] bg-gradient-to-r from-[#3242F5] to-[#63D8EC] rounded-[10px] sm:mt-[30px] mt-[10px] text-[13px]">Stake</button>
          </div>
          <LockupOverview />
        </div>
      </div>
      <div className="absolute w-full h-[50%] bg-gradient-radial top-0 z-0"></div>
    </div>
  );
}
