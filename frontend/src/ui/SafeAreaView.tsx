/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"

type SafeAreaViewType = {
    children: React.ReactNode;
    classNameParent?: any;
    classNameChild?: any;
    paddingY?: number;
}

export default function SafeAreaView({ children, classNameParent, classNameChild, paddingY = 64 }: SafeAreaViewType) {
  return (
    <div className={`flex justify-center items-center w-auto ${classNameParent}`} style={{paddingTop: `${paddingY}px`, paddingBottom: `${paddingY}px`}}>
      <div className={`w-280 flex items-center h-full ${classNameChild}`}>
        {children}
      </div>
    </div>
  )
}
