import type { NextPage } from "next";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import { ThreeDCardDemo2 } from "./ThreeDCardDemo2";
import { ThreeDCardDemo3 } from "./ThreeDCardDemo3";
import { ThreeDCardDemo4 } from "./ThreeDCardDemo4";
import { ThreeDCardDemo5 } from "./ThreeDCardDemo5";
import { ThreeDCardDemo6 } from "./ThreeDCardDemo6";

export type RightPanelType = {
  className?: string;
};

const RightPanel: NextPage<RightPanelType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch font-sans flex flex-row items-start justify-center pt-0 pb-[30.5px] pr-[21px] pl-5 box-border max-w-full text-center text-35xl text-midnightblue-100 ${className}`}
    >
      <div className="w-[1231px] flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
        <div className="w-[650px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border min-w-[650px] max-w-full lg:flex-1 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
                <h1 className="m-0 h-[73px] relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-13xl mq750:text-24xl">{`SHISHIR & Co.`}</h1>
                <h1 className="m-0 h-[54px] relative text-21xl font-bold font-inherit text-left inline-block max-w-full mq450:text-5xl mq750:text-13xl">
                  CHARTERED ACCOUNTANTS
                </h1>
              </div>
              <h2 className="m-0 w-[637px] h-[76px] relative text-9xl tracking-[0.08em] font-medium font-inherit text-left inline-block max-w-full mq450:text-3xl">
                <p className="m-0">{`“Trusted advisors helping you navigate the `}</p>
                <p className="m-0">complexities of finance”</p>
              </h2>
            </div>

            <button className="cursor-pointer mq750:mt-[3vh] text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            > <a className="relative text-base [text-decoration:underline] " href="mailto:harshitn2002@gmail.com" target="_blank"></a>
              Contact Now
            </button>

          </div>
        </div>
        <div className="w-[498px] mq750:mt-[4vh] flex flex-row items-start justify-start gap-[12px] min-w-[498px] max-w-full text-xs text-darkslateblue font-dm-sans lg:flex-1 mq450:flex-wrap">
          <ThreeDCardDemo />
          <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[248px] max-w-full">
            <div className="self-stretch flex flex-row items-end justify-center gap-[16px] mq450:flex-wrap">
              <ThreeDCardDemo2 />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[89px] relative">
                <ThreeDCardDemo3 />
              </div>
              <div className="shadow-[0px_4px_12px_#a3a9fe] mq750:absolute mq750:mb-[7vh] mq750:z-[500] rounded-3xs bg-white flex flex-col items-start justify-start pt-[12.5px] pb-5 pr-2 pl-[19px] relative gap-[10.5px] text-left text-3xs z-[500]">
                <div className="w-2.5 h-[18px] absolute !m-[0] top-[-12.9px] right-[9px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
                <ThreeDCardDemo4 />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[14px] mq450:flex-wrap mq750:ml-[-16.3vh]">
              <ThreeDCardDemo5 />
              <div className="flex-1 flex flex-row items-start justify-start relative min-w-[176px] text-left mq750:ml-[-1vh]">
                <div className="h-[300px] w-[300px] absolute !m-[0] top-[-147px] left-[-128.9px] [filter:blur(80px)] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#7676ff,_#6e99ff)] " />
                <ThreeDCardDemo6 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightPanel;
