import Image from "next/image";
export default function Footer() {
  return (
    <div className="w-full bg-[#121212] py-[25px] tablet:inline-flex items-center laptop:px-[100px] md:px-[50px] px-[20px] justify-between">
      <Image
        src="/icon/footer/logotitle.svg"
        alt="Logo Title"
        width={0}
        height={0}
        className="w-[120px] h-auto"
      />
      <div className="sm:inline-flex sm:flex-row flex-col items-center tablet:mt-0 sm:mt-[10px] mt-[20px]">
        <div className="inline-flex items-center gap-[20px] mr-[17px]">
          <Image
            src={"/icon/footer/discord.svg"}
            alt="discord"
            width={0}
            height={0}
            className="sm:w-[25px] w-[20px] h-auto"
          />
          <Image
            src={"/icon/footer/github.svg"}
            alt="github"
            width={0}
            height={0}
            className="sm:w-[25px] w-[20px] h-auto"
          />
          <Image
            src={"/icon/footer/raddit.svg"}
            alt="raddit"
            width={0}
            height={0}
            className="sm:w-[25px] w-[20px] h-auto"
          />
          <Image
            src={"/icon/footer/twitter.svg"}
            alt="twitter"
            width={0}
            height={0}
            className="sm:w-[25px] w-[20px] h-auto"
          />
          <Image
            src={"/icon/footer/youtube.svg"}
            alt="youtube"
            width={0}
            height={0}
            className="sm:w-[25px] w-[20px] h-auto"
          />
        </div>
        <div className="sm:w-auto w-full inline-flex justify-between sm:mt-0 mt-[10px]">
          <div className="inline-flex items-center gap-[20px] sm:mr-[20px] mr-0">
            <Image
              src={"/icon/footer/linkedin.svg"}
              alt="linkedin"
              width={0}
              height={0}
              className="sm:w-[25px] w-[20px] h-auto"
            />
            <Image
              src={"/icon/footer/medium.svg"}
              alt="medium"
              width={0}
              height={0}
              className="sm:w-[25px] w-[20px] h-auto"
            />
            <Image
              src={"/icon/footer/hand.svg"}
              alt="hand"
              width={0}
              height={0}
              className="sm:w-[25px] w-[20px] h-auto"
            />
            <Image
              src={"/icon/footer/coinmarketcap.svg"}
              alt="coinmarketcap"
              width={0}
              height={0}
              className="sm:w-[25px] w-[20px] h-auto"
            />
          </div>
          <button className="w-[145px] h-[40px] rounded-[10px] border-[1px] border-[#6B9EF0] inline-flex items-center justify-center">
            <Image
              src={"/icon/footer/telegram.svg"}
              width={0}
              height={0}
              alt="telegram"
              className="sm:w-[25px] w-[20px] h-auto"
            />
            <p className="ml-[15px]">Telegram</p>
          </button>
        </div>
      </div>
    </div>
  );
}
