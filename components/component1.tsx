import type { NextPage } from "next";
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";

export type ComponentType = {
  className?: string;
  directTaxation?: string;
  minimizeTaxStressMaximize?: string;
};

const Component: NextPage<ComponentType> = ({
  className = "",
  directTaxation,
  minimizeTaxStressMaximize,
}) => { const imageUrl =
  "https://img.freepik.com/free-vector/tax-preparation-concept-illustration_114360-19336.jpg";
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

export default Component;
