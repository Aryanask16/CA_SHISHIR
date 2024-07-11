"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo4() {
  return (
    <CardContainer className=" relative z-50 " >
        <CardItem
          translateZ="50"
        >
          <b className="relative leading-[10px] inline-block min-w-[48px]">
                  GST Filing
                </b>
            
                <CardItem translateZ="50" className="flex flex-row items-start justify-start py-0 pr-[7px] pl-px">
                  <img
                    className="h-[26px] w-[39.6px] relative"
                    loading="lazy"
                    alt=""
                    src="/frame-40600.svg"
                  />
                </CardItem>
        </CardItem>
    </CardContainer>
  );
}
