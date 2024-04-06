import { TelegramIcon } from "@/utils/icons/telegramIcon";
import { Xicon } from "@/utils/icons/xIcon";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <header className="p-5 lg:p-0 lg:pt-[22px]">
      <nav className=" max-w-[1148.75px] lg:mx-auto lg:h-[94px] bg-white rounded-[30px] p-3 lg:py-[23px] lg:px-[20px] border-[4px] border-mainBlack flex justify-between items-center relative left-[20px] top-[-1px]">
        <h1 className="text-[16px] lg:text-[32px] leading-normal">$BENSON</h1>
        <div className="flex gap-[10px] relative left-[6px] top-[-2px]">
          <Link
            href="/"
            className="center h-[50px] w-[49.95px] rounded-[12px] bg-primaryLight"
          >
            <TelegramIcon />
          </Link>
          <Link
            href="/"
            className="center h-[50px] w-[49.95px] rounded-[12px] bg-mainBlack"
          >
            <Xicon />
          </Link>
          <Link
            href="/"
            className="bg-mainBlack text-white h-[50px] px-2 lg:px-0 lg:w-[169.85px] text-[12px] lg:text-[24px] leading-normal center rounded-[12px]"
          >
            Buy $BENSON
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;
