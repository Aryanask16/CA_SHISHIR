"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo6() {
  return (
    <CardContainer className=" relative z-2 " >
        <CardItem
          translateZ="50"
        >

                <div className="flex-1 shadow-[0px_4px_12px_#a3a9fe] rounded-3xs bg-white flex flex-col items-start justify-start pt-[7.9px] pb-3 pr-[30px] pl-[31px] gap-[3.1px] z-[1]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[22px]">
                    <b className="relative leading-[24px]">
                      Company Pipeline Management
                    </b>
                  </div>
                  <div className="w-[205px] flex flex-row items-start justify-start gap-[20px] text-3xs">
                    <div className="flex-[0.8214] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 gap-[1px]">
                      <div className="relative leading-[24px] inline-block min-w-[41px]">
                        ITR Filled
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5 text-sm text-indigo">
                        <div className="flex-1 rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl [background:linear-gradient(47.19deg,_#9c53f9,_#f1e8ff)] flex flex-row items-start justify-start py-2 px-[7px]">
                          <div className="relative leading-[24px] font-medium inline-block min-w-[23px]">
                            194
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[24px] inline-block min-w-[53px]">
                        GST Fillings
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-2 text-sm text-indigo">
                        <div className="flex-1 rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl [background:linear-gradient(41.44deg,_#5a59ff,_#dde4ff)] flex flex-row items-start justify-start py-2 px-[7px]">
                          <div className="relative leading-[24px] font-medium inline-block min-w-[22px]">
                            129
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[24px] inline-block min-w-[56px]">
                        Audit Count
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-[5px] text-sm text-indigo">
                        <div className="flex-1 rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl [background:linear-gradient(44.79deg,_#10b981,_#d1fae5)] flex flex-row items-start justify-end py-2 px-[5px]">
                          <div className="relative leading-[24px] font-medium inline-block min-w-[22px]">
                            170
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </CardItem>
    </CardContainer>
  );
}
