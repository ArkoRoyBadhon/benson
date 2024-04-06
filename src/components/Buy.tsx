import Image from "next/image";

const BuySection = () => {
  return (
    <section className="lg:mt-[392px] container relative mb-[251px]">
      <h1 className="text-[60px] leading-[65px] text-white text-center">
        How To Buy
      </h1>
      <div className="max-w-[985px] mx-auto bg-white border-[4px] border-mainBlack px-[48px] pt-[50px] pb-[49px] mt-[14px] text-[24px] rounded-[40px] relative left-[11px] leading-[32px]">
        <ol className="w-full pl-[30px] list-decimal mt-[-5px]">
          <li>
            Set up a crypto wallet with access to the Base network. Coinbase
            Wallet is recommended. If you are using another wallet such as
            MetaMask, follow these steps to connect to Base.
          </li>
          <br />
          <li>
            Send Ethereum (ETH) to your wallet on the Base network, or send to
            your wallet via the Ethereum network then bridge to Base using
            Coinbase Wallet’s in-wallet bridge, Orbiter or Synapse.
          </li>
          <br />
          <li>
            Head to LlamaSwap with this link that has an ETH to $BENSON swap
            preloaded. LlamaSwap is an aggregator that swaps via multiple sites
            at once, giving you the best price. Make sure your wallet is
            connected on the Base network.
          </li>
          <br />
          $BENSON contract address:
          <br />
          <br />
          <li>
          Select how much you want to swap for $BENSON, click Swap and confirm the transaction in your wallet.
          </li>
        </ol>
      </div>

      <div className="absolute bottom-[-248px] left-[194px]">
        <Image src="/img/buy.png" alt="Buy" height="350" width="350" />
      </div>
    </section>
  );
};

export default BuySection;
