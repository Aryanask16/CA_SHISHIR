import type { NextPage } from "next";
import { useCallback } from "react";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <footer
      className={`ml-[-1px] self-stretch bg-lavender-300 overflow-hidden flex flex-col items-center justify-start py-12 px-5 box-border gap-[40px] max-w-full text-left text-base text-darkslateblue font-satoshi-variable mq750:gap-[20px] mq750:pt-[31px] mq750:pb-[31px] mq750:box-border ${className}`}
    >
      <div className="w-[1257px] flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
        <div className="w-[852px] flex flex-col items-start justify-start py-0 pr-[435px] pl-0 box-border gap-[18px] max-w-full text-9xl mq450:pr-5 mq450:box-border mq1050:pr-[217px] mq1050:box-border">
          <div className="w-[260px] flex flex-col items-start justify-start pt-0 px-0 pb-[18px] box-border gap-[8px]">
            <b className="self-stretch relative leading-[22px] mq450:text-3xl mq450:leading-[18px]">{`SHISHIR & Co.`}</b>
            <b className="self-stretch relative text-5xl leading-[22px] mq450:text-lgi mq450:leading-[18px]">
              Chartered Accountants
            </b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base">
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-4 text-xl">
              <b className="relative leading-[22px] mq450:text-base mq450:leading-[18px]">
                Financial Advisors
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch relative leading-[22px]">
                Lorem Ipsum Address Lorem Ipsum Address
              </div>
              <div className="self-stretch h-9 relative leading-[22px] flex items-center shrink-0">{`Lorem Ipsum Address Lorem Ipsum `}</div>
            </div>
            <div className="self-stretch relative leading-[22px]">
              Lorem Ipsum Address
            </div>
          </div>
          <div className="w-[214px] flex flex-row items-start justify-start pt-0 px-0 pb-3.5 box-border text-xs">
            <div className="flex-1 relative leading-[22px] font-medium">{`email@shishir&co.in| +91-9999999999`}</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px] text-xl">
            <div className="relative leading-[22px] font-medium inline-block min-w-[113px] mq450:text-base mq450:leading-[18px]">
              FIND US ON
            </div>
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                loading="lazy"
                alt=""
                src="/instagram-1.svg"
              />
              <img
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                loading="lazy"
                alt=""
                src="/icons8facebook-1.svg"
              />
              <div className="flex flex-row items-start justify-start relative gap-[10px]">
                <img
                  className="h-[30px] w-[30px] relative"
                  alt=""
                  src="/facebook-icon.svg"
                />
                <img
                  className="h-[66.67%] w-[66.67%] absolute !m-[0] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] max-w-full overflow-hidden max-h-full z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <img
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                loading="lazy"
                alt=""
                src="/icons8twitter-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <b className="h-[27px] relative text-xl tracking-[-0.03em] flex items-center min-w-[81px] mq450:text-base">
            Solutions
          </b>
          <div className="relative tracking-[-0.03em] inline-block min-w-[97px]">
            Direct Taxation
          </div>
          <div className="relative tracking-[-0.03em] inline-block min-w-[118px]">
            Business Advisory
          </div>
          <div className="relative tracking-[-0.03em] inline-block min-w-[72px]">
            GST Filling
          </div>
          <div className="relative tracking-[-0.03em] inline-block min-w-[128px]">
            Corporate Advisory
          </div>
          <div className="relative tracking-[-0.03em] inline-block min-w-[72px]">
            Consulting
          </div>
          <div className="relative tracking-[-0.03em] font-dm-sans">{`Audit & Assurance`}</div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <b className="h-[27px] relative text-xl tracking-[-0.03em] flex items-center min-w-[99px] mq450:text-base">
            COMPANY
          </b>
          <a
            className="[text-decoration:none] relative tracking-[-0.03em] text-[inherit] inline-block min-w-[62px] cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            About Us
          </a>
          <div className="relative tracking-[-0.03em] inline-block min-w-[74px]">
            Contact Us
          </div>
        </div>
      </div>
      <div className="w-[1257px] flex flex-col items-start justify-start gap-[10.2px] max-w-full">
        <img
          className="w-[1236px] relative max-h-full max-w-full"
          loading="lazy"
          alt=""
          src="/vector-9.svg"
        />
        <div className="self-stretch relative leading-[22px]">{`© 2024 Shishit & Co. All rights reserved.`}</div>
      </div>
    </footer>
  );
};

export default Footer;
