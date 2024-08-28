"use client";
import React, {  
  createContext,  
  useState,  
  useContext,  
} from "react";  

const ChainContext = createContext({  
  chain: "litho",  
  setChain: (chain: string) => {},  
});  

export const useChainContext = () => {  
  return useContext(ChainContext);  
};  

export const ChainContextProvider = ({  
  children,  
}: Readonly<{  
  children: React.ReactNode;  
}>) => {  
  const [chain, setChain] = useState<string>("litho");  

  return (  
    <ChainContext.Provider value={{ chain, setChain }}>  
      {children}  
    </ChainContext.Provider>  
  );  
};  
