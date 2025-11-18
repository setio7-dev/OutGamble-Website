/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react"

const SplashContext = createContext<any>(null);
type UseSplashType = {
    children: React.ReactNode;
}

export function UseSplashContext({ children }: UseSplashType) {
  const [isStart, setIsStart] = useState(false);
  return (
    <SplashContext.Provider value={{ isStart, setIsStart }}>
        {children}
    </SplashContext.Provider>
  );
}

export function UseSplashHookContext() {
  return useContext(SplashContext);
}
