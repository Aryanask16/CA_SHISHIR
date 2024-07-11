"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo5() {
  return (
    <CardContainer className=" relative z-2 " >
        <CardItem
          translateZ="50"
        >
          <div className="shadow-[0px_4px_12px_#a3a9fe] rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start pt-3 px-[18px] pb-[19px] box-border relative gap-[13px] min-w-[96px] z-[1] mq450:flex-1">
                <div className="w-[calc(100%_-_85px)] h-[18px] absolute !m-[0] top-[calc(50%_-_70.9px)] right-[29px] left-[56px] hidden z-[0]" />
                <b className="relative leading-[14px]">
                  <p className="m-0">{`Audit & `}</p>
                  <p className="m-0">Insurance</p>
                </b>
                <img
                  className="w-[93.9px] h-[62.1px] relative hidden z-[2]"
                  alt=""
                  src="/frame-40598.svg"
                />
                <CardItem translateZ="50" className="flex flex-row items-start justify-start py-0 px-[3px]">
                  <img
                    className="h-9 w-[39.9px] relative"
                    loading="lazy"
                    alt=""
                    src="/-icon-paper-plane-o.svg"
                  />
                </CardItem>
              </div>
        </CardItem>
    </CardContainer>
  );
}
