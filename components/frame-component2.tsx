import type { NextPage } from "next";
import Component1 from "./component1";
import Component from "./component";
import { BorderBeam } from "@/components/ui/BorderBeam";
import Component2 from "./component2";
import Component3 from "./component3";
import Component5 from "./component5";
import Component4 from "./component4";
import Component6 from "./component6";
import { FollowerPointerCard } from "./ui/following-pointer";
export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch relative flex flex-row items-start justify-center pt-0 pb-5 pr-[22px] pl-5 box-border max-w-full text-center text-17xl text-midnightblue-100 font-satoshi-variable ${className}`}
    > 
      <div className="w-[1256px] relative flex flex-col items-center justify-start gap-[40px] max-w-full mq750:gap-[20px]">
        <h1 className="m-0 self-stretch h-[49px] font-sans relative text-inherit font-bold font-inherit inline-block mq450:text-3xl mq750:text-10xl">
          Our Services
        </h1>
        <FollowerPointerCard>
        <div className=" grid grid-cols-3 gap-10 mq750:flex mq750:flex-col ">
          <Component1
            directTaxation="Direct Taxation"
            minimizeTaxStressMaximize={`Minimize tax stress, maximize savings. Our CAs handle complex personal & corporate income taxes, ensuring compliance while legally reducing your tax burden.`}
          />
          <Component2
            directTaxation="Business Advisory"
            minimizeTaxStressMaximize={`Grow your business with expert guidance. Our CAs provide strategic advice on finances, operations, and growth. Make informed decisions & achieve your goals.`}
          />
          <Component3
            directTaxation="GST Filing"
            minimizeTaxStressMaximize="Streamline your GST filing with our expert CAs. Our CAs handle everything from returns to record-keeping, with accuracy and minimizing penalties. "
          />
          <Component4
            directTaxation="Corporate Advisory"
            minimizeTaxStressMaximize={`Navigate complex corporate matters with confidence. Our CAs offer comprehensive advisory services for mergers, acquisitions structuring & legal compliance.`}
          />
          <Component5
            directTaxation="Consulting"
            minimizeTaxStressMaximize="Unlock your business potential with our expert CA consulting. We offer tailored solutions for financial strategies, risk management, and operational efficiency."
          />
          <Component6
            directTaxation={`Audit`}
            minimizeTaxStressMaximize={`Gain trust and transparency with our CA-led audits & assurance. We provide independent verification of your financial health, boosting investor confidence and mitigating risks.`}
          />
        </div>
        </FollowerPointerCard>
      </div>
    </section>
  );
};

export default FrameComponent2;
