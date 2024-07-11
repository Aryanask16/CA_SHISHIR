"use client";
import type { NextPage } from "next";
import RightPanel from "../components/right-panel";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import React from "react";
import dynamic from "next/dynamic";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
// const World = dynamic(() => import("../components/ui/globe").then((m) => m.World), {
//   ssr: false,
// });
const Icons = {
  gitHub: () => (
    <svg width="100" height="100" viewBox="0 0 438.549 438.549">
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      />
    </svg>
  ),
  notion: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000000"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  ),
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        fill="#b3b3b3"
        filter="url(#a)"
      />
      <path
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
        fill="#ffffff"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
        fill="url(#linearGradient1780)"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        fill="url(#b)"
      />
      <path
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  ),
};
const Desktop: NextPage = () => {
  // const globeConfig = {
  //   pointSize: 4,
  //   globeColor: "#062056",
  //   showAtmosphere: true,
  //   atmosphereColor: "#FFFFFF",
  //   atmosphereAltitude: 0.1,
  //   emissive: "#062056",
  //   emissiveIntensity: 0.1,
  //   shininess: 0.9,
  //   polygonColor: "rgba(255,255,255,0.7)",
  //   ambientLight: "#38bdf8",
  //   directionalLeftLight: "#ffffff",
  //   directionalTopLight: "#ffffff",
  //   pointLight: "#ffffff",
  //   arcTime: 1000,
  //   arcLength: 0.9,
  //   rings: 1,
  //   maxRings: 3,
  //   initialPosition: { lat: 22.3193, lng: 114.1694 },
  //   autoRotate: true,
  //   autoRotateSpeed: 0.5,
  // };
  // const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  // const sampleArcs = [
  //   {
  //     order: 1,
  //     startLat: -19.885592,
  //     startLng: -43.951191,
  //     endLat: -22.9068,
  //     endLng: -43.1729,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 1,
  //     startLat: 28.6139,
  //     startLng: 77.209,
  //     endLat: 3.139,
  //     endLng: 101.6869,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 1,
  //     startLat: -19.885592,
  //     startLng: -43.951191,
  //     endLat: -1.303396,
  //     endLng: 36.852443,
  //     arcAlt: 0.5,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 2,
  //     startLat: 1.3521,
  //     startLng: 103.8198,
  //     endLat: 35.6762,
  //     endLng: 139.6503,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 2,
  //     startLat: 51.5072,
  //     startLng: -0.1276,
  //     endLat: 3.139,
  //     endLng: 101.6869,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 2,
  //     startLat: -15.785493,
  //     startLng: -47.909029,
  //     endLat: 36.162809,
  //     endLng: -115.119411,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 3,
  //     startLat: -33.8688,
  //     startLng: 151.2093,
  //     endLat: 22.3193,
  //     endLng: 114.1694,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 3,
  //     startLat: 21.3099,
  //     startLng: -157.8581,
  //     endLat: 40.7128,
  //     endLng: -74.006,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 3,
  //     startLat: -6.2088,
  //     startLng: 106.8456,
  //     endLat: 51.5072,
  //     endLng: -0.1276,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 4,
  //     startLat: 11.986597,
  //     startLng: 8.571831,
  //     endLat: -15.595412,
  //     endLng: -56.05918,
  //     arcAlt: 0.5,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 4,
  //     startLat: -34.6037,
  //     startLng: -58.3816,
  //     endLat: 22.3193,
  //     endLng: 114.1694,
  //     arcAlt: 0.7,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 4,
  //     startLat: 51.5072,
  //     startLng: -0.1276,
  //     endLat: 48.8566,
  //     endLng: -2.3522,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 5,
  //     startLat: 14.5995,
  //     startLng: 120.9842,
  //     endLat: 51.5072,
  //     endLng: -0.1276,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 5,
  //     startLat: 1.3521,
  //     startLng: 103.8198,
  //     endLat: -33.8688,
  //     endLng: 151.2093,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 5,
  //     startLat: 34.0522,
  //     startLng: -118.2437,
  //     endLat: 48.8566,
  //     endLng: -2.3522,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 6,
  //     startLat: -15.432563,
  //     startLng: 28.315853,
  //     endLat: 1.094136,
  //     endLng: -63.34546,
  //     arcAlt: 0.7,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 6,
  //     startLat: 37.5665,
  //     startLng: 126.978,
  //     endLat: 35.6762,
  //     endLng: 139.6503,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 6,
  //     startLat: 22.3193,
  //     startLng: 114.1694,
  //     endLat: 51.5072,
  //     endLng: -0.1276,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 7,
  //     startLat: -19.885592,
  //     startLng: -43.951191,
  //     endLat: -15.595412,
  //     endLng: -56.05918,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 7,
  //     startLat: 48.8566,
  //     startLng: -2.3522,
  //     endLat: 52.52,
  //     endLng: 13.405,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 7,
  //     startLat: 52.52,
  //     startLng: 13.405,
  //     endLat: 34.0522,
  //     endLng: -118.2437,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 8,
  //     startLat: -8.833221,
  //     startLng: 13.264837,
  //     endLat: -33.936138,
  //     endLng: 18.436529,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 8,
  //     startLat: 49.2827,
  //     startLng: -123.1207,
  //     endLat: 52.3676,
  //     endLng: 4.9041,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 8,
  //     startLat: 1.3521,
  //     startLng: 103.8198,
  //     endLat: 40.7128,
  //     endLng: -74.006,
  //     arcAlt: 0.5,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 9,
  //     startLat: 51.5072,
  //     startLng: -0.1276,
  //     endLat: 34.0522,
  //     endLng: -118.2437,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 9,
  //     startLat: 22.3193,
  //     startLng: 114.1694,
  //     endLat: -22.9068,
  //     endLng: -43.1729,
  //     arcAlt: 0.7,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 9,
  //     startLat: 1.3521,
  //     startLng: 103.8198,
  //     endLat: -34.6037,
  //     endLng: -58.3816,
  //     arcAlt: 0.5,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 10,
  //     startLat: -22.9068,
  //     startLng: -43.1729,
  //     endLat: 28.6139,
  //     endLng: 77.209,
  //     arcAlt: 0.7,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 10,
  //     startLat: 34.0522,
  //     startLng: -118.2437,
  //     endLat: 31.2304,
  //     endLng: 121.4737,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 10,
  //     startLat: -6.2088,
  //     startLng: 106.8456,
  //     endLat: 52.3676,
  //     endLng: 4.9041,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 11,
  //     startLat: 41.9028,
  //     startLng: 12.4964,
  //     endLat: 34.0522,
  //     endLng: -118.2437,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 11,
  //     startLat: -6.2088,
  //     startLng: 106.8456,
  //     endLat: 31.2304,
  //     endLng: 121.4737,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 11,
  //     startLat: 22.3193,
  //     startLng: 114.1694,
  //     endLat: 1.3521,
  //     endLng: 103.8198,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 12,
  //     startLat: 34.0522,
  //     startLng: -118.2437,
  //     endLat: 37.7749,
  //     endLng: -122.4194,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 12,
  //     startLat: 35.6762,
  //     startLng: 139.6503,
  //     endLat: 22.3193,
  //     endLng: 114.1694,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 12,
  //     startLat: 22.3193,
  //     startLng: 114.1694,
  //     endLat: 34.0522,
  //     endLng: -118.2437,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 13,
  //     startLat: 52.52,
  //     startLng: 13.405,
  //     endLat: 22.3193,
  //     endLng: 114.1694,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 13,
  //     startLat: 11.986597,
  //     startLng: 8.571831,
  //     endLat: 35.6762,
  //     endLng: 139.6503,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 13,
  //     startLat: -22.9068,
  //     startLng: -43.1729,
  //     endLat: -34.6037,
  //     endLng: -58.3816,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 14,
  //     startLat: -33.936138,
  //     startLng: 18.436529,
  //     endLat: 21.395643,
  //     endLng: 39.883798,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  // ]
  
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[100px] leading-[normal] tracking-[normal] mq450:gap-[25px] ">
      
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[65px] box-border top-[0] z-[99] sticky max-w-full">
        <header className="h-[74px] flex-1 relative shadow-[0px_4px_22px_rgba(206,_218,_255,_0.5)] rounded-t-none rounded-b-13xl bg-lavender-200 overflow-hidden max-w-full">
          <img
            className="absolute h-[calc(100%_-_25px)] top-[13px] bottom-[12px] left-[92px] max-h-full w-[83px] object-contain mq750:ml-[-10vh]"
            loading="lazy"
            alt=""
            src="/pngwingcom2-1@2x.png"
          />
        </header>
      </section>
      <RightPanel />

      <div
        className="  font-sans text-white flex flex-col justify-center box-border max-w-full mq450:pl-5 
           mq450:pr-5 mq450:box-border mq750:box-border  mq750:pt-[10vh] h-[70vh] mq750:h-[80vh] mq750:flex items-center mq750:items-center mq750:justify-center"
        data-scroll-to="aboutSectionContainer"
      >
        <BackgroundGradientAnimation className="">
          <div className=" flex flex-col items-center justify-center z-[150] mq750:flex-col mq750:flex mq750:items-center mq750:justify-center mq750:mt-[4vh] ">

            <h1 className=" text-white text-[10vh] font-bold font-inherit mq450:text-[8vw] mq750:text-[8vw]">About Shishir & Co.</h1>
            <div className=" flex w-[80%] items-center justify-center text-5xl">
              <h3 className="flex text-center font-light text-inherit z-[100] mq450:text-lgi mq450:leading-[27px]">{`As a Chartered Accountant company, we pride ourselves on delivering exceptional financial expertise tailored to meet our clients' diverse needs. With a strong commitment to professionalism and integrity, we offer a full spectrum of services including auditing, taxation, advisory, and financial consulting. Our dedicated team strives to foster long-term client relationships through personalized solutions and reliable support, ensuring transparency and efficiency in every aspect of financial management.`}</h3>
            </div>
          </div>
        </BackgroundGradientAnimation>


      </div>


      <FrameComponent2 />
      <FrameComponent />
      <section className="self-stretch h-[80vh] bg-gray-950 w-[100%] overflow-hidden flex items-center justify-center box-border max-w-full text-17xl text-white font-satoshi-variable mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[46px] mq750:pr-[46px] mq750:box-border mq750:flex-col mq750:h-[70vh]">
        <div className=" ml-[10vw] mq750:ml-[-10vw]">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border gap-[28px] w-[20vw] mq750:w-[50vw]">
            <h1 className="m-0 w-[1283px] h-[49px relative text-inherit font-thin font-sans font-black font-inherit inline-block max-w-[103%] shrink-0 mq450:text-3xl mq750:text-10xl">
              Chartered accountants committed to your financial growth and
              prosperity
            </h1>
            <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            > <a className="relative text-base [text-decoration:underline] " href="mailto:harshitn2002@gmail.com" target="_blank"></a>
              Contact Now
            </button>
          </div>
        </div>
        <div className=" h-[100vh] w-[100vw] mr-0 mq750:h-[0vh] mq750:w-[180vw] mt-[30vh]">
          
          <div className="relative flex h-[500px] w-full flex-col items-center  justify-center overflow-hidden rounded-lg border bg-background  mq750:mt-[-30vh] ">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-white bg-clip-text text-center text-8xl font-semibold font-sans leading-none text-transparent dark:from-white">
              VISIT US
            </span>

      
            <OrbitingCircles
              className="size-[8vh] border-none mq750:size-[5vh]"
              duration={20}
              delay={20}
              radius={80}
    
            >
              <Icons.whatsapp />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[8vh] border-none mq750:size-[5vh]"
              duration={20}
              delay={10}
              radius={80}
            >
              <Icons.notion />
            </OrbitingCircles>

           
            <OrbitingCircles
              className="size-[10vh] border-none mq750:size-[5vh]"
              radius={190}
              duration={20}
              reverse
            >
              <Icons.googleDrive />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[10vh] border-none mq750:size-[5vh]"
              radius={190}
              duration={20}
              delay={20}
              reverse
            >
              <Icons.gitHub />
            </OrbitingCircles>
          </div>
        </div>
     
      </section>
      <Footer />
    </div>
  );
};


export default Desktop;

