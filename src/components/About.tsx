import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="container flex flex-col items-center lg:mt-[185px] pt-[43px] pb-[46.68px] lg:px-[275px] relative">
      <h1 className="text-[60px] leading-[65px] text-white">
        What is $BENSON?
      </h1>
      <div className="bg-white border-[4px] border-mainBlack rounded-[40px] pl-[43px] pr-[43.52px] pt-[13px] pb-[12.92px] text-[20px] leading-[32px] text-center mt-[67px] mb-[67px] box-content">
        <p className="mx-w-[711px]">
          Olivia Benson, Taylor Swifts adopted Scottish Fold cat and the SECOND
          richest
        </p>
        <p className="max-w-[660px] text-center ml-[10px]">
        cat in the world with a net worth of $97 million dollars is
          now on Base, but there’s one problem..
        </p>
        <br />
        <p>Nala, the richest cat, stands in the way.</p>
      </div>
      <button className="text-[24px] leading-normal rounded-[12px] lg:w-[208px] p-5 lg:p-0 lg:h-[68px] bg-mainBlack text-white relative top-[-3px]">
        Buy $BENSON
      </button>
      <div className="absolute right-[-60px] bottom-[40px]">
        <Image
          src="/img/about.png"
          alt="About Benson"
          height="350"
          width="351"
        />
      </div>
    </section>
  );
};

export default AboutSection;
