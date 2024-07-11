"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className=" relative z-2 " >
        <CardItem
          translateZ="50"
        >
          <div className=" flex flex-col items-start justify-start pt-px px-0 pb-0 mt-0">
            <div className="shadow-[0px_4px_12px_#a3a9fe] rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start pt-3 px-[21px] pb-[9px] gap-[3px] z-[1] lg:self-stretch lg:w-auto">
              <b className="relative leading-[12px] z-[2]">
                <p className="m-0">Corporate</p>
                <p className="m-0">Advisory</p>
              </b>
              <CardItem translateZ="100" className="flex flex-row items-start justify-start py-0 pr-[9px] pl-1 w-full">
                <img
                  className="h-[50px] w-[50px] relative overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/frame-40586@2x.png"
                />
              </CardItem>
            </div>
          </div>
        </CardItem>
    </CardContainer>
  );
}
