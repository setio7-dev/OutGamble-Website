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
      <div className={`lg:w-280 w-full flex items-center h-full lg:px-0 px-4 ${classNameChild}`}>
        {children}
      </div>
    </div>
  )
}
