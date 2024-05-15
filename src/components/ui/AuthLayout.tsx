"use client"

import { ReactNode } from "react"

interface Props {
  children: ReactNode;
  subTitle: String;
  mainTitle: String;
}

export default function AuthLayout(props: Props) {
  const { children, subTitle, mainTitle } = props;

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full sm:w-[430px] shadow-2xl p-5 rounded-lg">
        <div className="text-dark-850 text-xl font-bold text-center">{mainTitle}</div>
        <div className="text-dark-200 text-xm text-center my-2">{subTitle}</div>
        {children}
      </div>  
    </div>
  )
}