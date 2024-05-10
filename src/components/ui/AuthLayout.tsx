"use client"

import { ReactNode } from "react"

interface Props{
    children: ReactNode;
    title: String;
}

export default function AuthLayout(props: Props){
  const {children, title} = props;

  return(
    <div className="sm:w-[400px] shadow-2xl mx-auto pb-[20px] rounded-lg">
        <div className="text-[#223263] font-bold text-center pt-[10px]">{"Welcome to E-com"}</div>
        <div className="text-[#9098B1] text-[15px] text-center my-[13px]">{title}</div>
        {children}
    </div>
  )
}