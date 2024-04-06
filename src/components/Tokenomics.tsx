const TokenomicSection = () => {
    return (
      <section className="container mt-[465px]">
        <h1 className="text-white text-center text-[60px] leading-[58px]">
          Based Benson&apos;s <br />
          Tokenomics
        </h1>
        <div className="mt-[64px] bg-white rounded-[40px] max-w-[985px] mx-auto border-[4px] border-mainBlack pt-[93px] pb-[94px] min-h-[611px] lg:max-h-[611px] px-[88px]  relative top-[-10px] left-[5px]">
          <div className="grid grid-cols-[repeat(2,390px)] gap-x-[30px] gap-y-[27px] left-[-5px] top-[-4px] relative">
            <div className="bg-primary h-[200px] text-white px-[56px] py-[42px] border-[4px] border-mainBlack rounded-[30px] flex flex-col items-center justify-center">
              <h1 className="text-[48px] leading-[58px]">Total Supply</h1>
              <p className="text-[32px] leading-[58px]">500,000,000</p>
            </div>
            <div className="bg-primary h-[200px] text-white px-[56px] py-[42px] border-[4px] border-mainBlack rounded-[30px] flex flex-col items-center justify-center">
              <h1 className="text-[48px] leading-[58px]">100% LP</h1>
              <h1 className="text-[48px] leading-[58px]">0% Presale</h1>
            </div>
            <div className="bg-primary h-[200px] text-white px-[56px] py-[42px] border-[4px] border-mainBlack rounded-[30px] flex flex-col items-center justify-center">
              <h1 className="text-[48px] leading-[58px]">LP Burned</h1>
              <h1 className="text-[48px] leading-[58px]">At Launch</h1>
            </div>
            <div className="bg-primary h-[200px] text-white px-[56px] py-[42px] border-[4px] border-mainBlack rounded-[30px] flex flex-col items-center justify-center">
              <h1 className="text-[48px] leading-[58px]">Ownership</h1>
              <h1 className="text-[48px] leading-[58px]">Revoked</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[64px] relative left-[4px] top-[-9px]">
          <button className="pt-[13px] pb-[17px] min-w-[235px] text-[24px] leading-normal rounded-[12px] bg-mainBlack text-white">
            See the Charts
          </button>
        </div>
      </section>
    );
  };
  
  export default TokenomicSection;
  