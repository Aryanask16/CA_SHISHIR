"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo3() {
  return (
    <CardContainer className=" relative z-2" >
      <CardItem 
        translateZ="50"
      >
        <div className="self-stretch shadow-[0px_4px_12px_#a3a9fe] rounded-3xs bg-white flex flex-col items-start justify-start pt-[18px] pb-[13px] pr-[23px] pl-[26px] gap-[25px] [transform:_rotate(180deg)] z-[1] mq750:h-[2vh] mq750:relative mq750:w-[4vh] mq750:flex-col mq750:flex ">
          <b className="self-stretch relative leading-[12px] [transform:_rotate(180deg)] mq750:text-[1.2vh] mq750:ml-[4.8vh]">
            Consulting
          </b>
          <div className="w-[104px] h-[104px] relative hidden" />
          <CardItem translateZ="50" className="flex flex-row items-start justify-start py-0 pr-[15px] pl-3 mq750:[display:none]">
            <img
              className="h-[60px] w-[60px] relative object-cover [transform:_rotate(-180deg)] z-[2] ]"
              loading="lazy"
              alt=""
              src="/chatbot-flat-vectorphotoroom-1@2x.png"
            />
          </CardItem>
        </div>
      </CardItem>
    </CardContainer>
  );
}
