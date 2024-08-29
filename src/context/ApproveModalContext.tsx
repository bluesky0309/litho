"use client";
import React, {  
  createContext,  
  useState,  
  useContext,  
} from "react";  

const OpenApproveModalContext = createContext({  
  openApproveModal: 0,  
  setOpenApproveModal: (openApproveModal: number) => {},  
});  

export const useOpenApproveModalContext = () => {  
  return useContext(OpenApproveModalContext);  
};  

export const OpenApproveContextProvider = ({  
  children,  
}: Readonly<{  
  children: React.ReactNode;  
}>) => {  
  const [openApproveModal, setOpenApproveModal] = useState<number>(0);  

  return (  
    <OpenApproveModalContext.Provider value={{ openApproveModal, setOpenApproveModal }}>  
      {children}  
    </OpenApproveModalContext.Provider>  
  );  
};  
