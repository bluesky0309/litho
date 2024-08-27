import Image from "next/image";
export default function Footer() {
  return (
    <div className="w-full md:h-[76px] sm:h-auto h-[200px] bg-[#121212] py-[25px] tablet:inline-flex items-center laptop:px-[100px] md:px-[50px] px-[20px] justify-between">
      <button>
        <Image
          src="/icon/footer/logotitle.svg"
          alt="Logo Title"
          width={0}
          height={0}
          className="w-[134px] h-auto"
        />
      </button>
      <div className="sm:inline-flex sm:flex-row flex-col items-center tablet:mt-0 sm:mt-[10px] mt-[20px]">
        <div className="inline-flex items-center gap-[20px] mr-[17px]">
          <button>
            <Image
              src={"/icon/footer/discord.svg"}
              alt="discord"
              width={0}
              height={0}
              className="w-[24px] h-auto"
            />
          </button>
          <button>
            <Image
              src={"/icon/footer/github.svg"}
              alt="github"
              width={0}
              height={0}
              className="w-[20px] h-auto"
            />
          </button>
          <button>
            <Image
              src={"/icon/footer/raddit.svg"}
              alt="raddit"
              width={0}
              height={0}
              className="w-[20px] h-auto"
            />
          </button>
          <button>
            <Image
              src={"/icon/footer/twitter.svg"}
              alt="twitter"
              width={0}
              height={0}
              className="w-[20px] h-auto"
            />
          </button>
          <button>
            <Image
              src={"/icon/footer/youtube.svg"}
              alt="youtube"
              width={0}
              height={0}
              className="w-[20px] h-auto"
            />
          </button>
        </div>
        <div className="sm:w-auto w-full inline-flex justify-between sm:mt-0 mt-[10px]">
          <div className="inline-flex items-center gap-[20px] sm:mr-[20px] mr-0">
            <button>
              <Image
                src={"/icon/footer/linkedin.svg"}
                alt="linkedin"
                width={0}
                height={0}
                className="w-[20px] h-auto"
              />
            </button>
            <button>
              <Image
                src={"/icon/footer/medium.svg"}
                alt="medium"
                width={0}
                height={0}
                className="w-[20px] h-auto"
              />
            </button>
            <button>
              <Image
                src={"/icon/footer/hand.svg"}
                alt="hand"
                width={0}
                height={0}
                className="w-[20px] h-auto"
              />
            </button>
            <button>
              <Image
                src={"/icon/footer/coinmarketcap.svg"}
                alt="coinmarketcap"
                width={0}
                height={0}
                className="w-[20px] h-auto"
              />
            </button>
          </div>
          <button className="w-[143px] h-[44px] rounded-[10px] border-[1px] border-[#6B9EF0] inline-flex items-center justify-center">
            <Image
              src={"/icon/footer/telegram.svg"}
              width={0}
              height={0}
              alt="telegram"
              className="w-[18px] h-[15px]"
            />
            <p className="ml-[15px] text-[16px]">Telegram</p>
          </button>
        </div>
      </div>
    </div>
  );
}
