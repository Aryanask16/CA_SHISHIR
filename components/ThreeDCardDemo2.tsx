"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo2() {
  return (
    <CardContainer className=" relative z-2 " >
      <CardItem
        translateZ="50"
      >
        <div className="flex-[0.6934] shadow-[0px_4px_12px_#a3a9fe] rounded-3xs bg-white flex flex-col items-start justify-start pt-[18px] px-[21px] pb-[5px] box-border gap-[18px] min-w-[89px] z-[1] mq450:flex-1">
          <b className="self-stretch relative leading-[12px] inline-block min-w-[94px]">
            Direct Taxation
          </b>
          <CardItem translateZ="50" className="flex flex-row items-start justify-start py-0 pr-[23px] pl-5">
            <img
              className="h-[75px] w-[51px] relative object-cover"
              alt=""
              src="/stilllifebusinessroleswithvariouspawns--1-removebgpreview-1@2x.png"
            />
          </CardItem>
        </div>
      </CardItem>
    </CardContainer>
  );
}
