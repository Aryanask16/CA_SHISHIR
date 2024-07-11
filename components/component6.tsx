import type { NextPage } from "next";
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export type ComponentType = {
  className?: string;
  directTaxation?: string;
  minimizeTaxStressMaximize?: string;
};

const Component6: NextPage<ComponentType> = ({
  className = "",
  directTaxation,
  minimizeTaxStressMaximize,
}) => { const imageUrl =
  "https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?t=st=1720594187~exp=1720597787~hmac=98506fc272721506d4a9c93180a3e27f45ae7b47e8259b899fa803605fa7011b&w=2000";
  return (
    <div className="h-[20rem] relative ">
      <DirectionAwareHover className=" h-[20rem] w-[20rem]" imageUrl={imageUrl}>
        <p className="font-bold text-xl flex items-start justify-start font-sans">{directTaxation}</p>
        <p className="font-normal text-sm flex items-start justify-start text-start w-[15rem] font-sans">{minimizeTaxStressMaximize}</p>
        <div className="flex flex-row items-start justify-start gap-[4px] text-left text-base font-sans">
          <a
            className="relative [text-decoration:underline] font-bold text-[inherit] inline-block min-w-[98px]"
            href="mailto:harshitn2002@gmail.com"
            target="_blank"
          >
            Contact Now
          </a>
          <img
            className="h-5 w-5 relative"
            loading="lazy"
            alt=""
            src="/arrow-outward.svg"
          />
        </div>
      </DirectionAwareHover>
    </div>
  );
};

export default Component6;
