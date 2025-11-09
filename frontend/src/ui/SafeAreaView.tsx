/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"

type SafeAreaViewType = {
    children: React.ReactNode;
    classNameParent?: any;
    classNameChild?: any;
}

export default function SafeAreaView({ children, classNameParent, classNameChild }: SafeAreaViewType) {
  return (
    <div className={`flex justify-center items-center w-full ${classNameParent}`}>
      <div className={`w-280 flex items-center h-full ${classNameChild}`}>
        {children}
      </div>
    </div>
  )
}
