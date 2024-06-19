import React, { useState, createContext, useContext, ReactNode, Dispatch, SetStateAction } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import MyProSidebar from "./MyProSidebar";

// Define the type for the context value
interface SidebarContextType {
  sidebarRTL: boolean;
  setSidebarRTL: Dispatch<SetStateAction<boolean>>;
  sidebarBackgroundColor: string | undefined;
  setSidebarBackgroundColor: Dispatch<SetStateAction<string | undefined>>;
  sidebarImage: string | undefined;
  setSidebarImage: Dispatch<SetStateAction<string | undefined>>;
}

// Create the context with initial empty object (this is just for illustration, actual types will be applied later)
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface MyProSidebarProviderProps {
  children: ReactNode;
}

export const MyProSidebarProvider: React.FC<MyProSidebarProviderProps> = ({ children }) => {
  // State definitions with explicit types
  const [sidebarRTL, setSidebarRTL] = useState<boolean>(false);
  const [sidebarBackgroundColor, setSidebarBackgroundColor] = useState<string | undefined>(undefined);
  const [sidebarImage, setSidebarImage] = useState<string | undefined>(undefined);

  return (
    <ProSidebarProvider>
      <SidebarContext.Provider
        value={{
          sidebarRTL,
          setSidebarRTL,
          sidebarBackgroundColor,
          setSidebarBackgroundColor,
          sidebarImage,
          setSidebarImage,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: sidebarRTL ? "row-reverse" : "row",
          }}
        >
          <MyProSidebar />
          {children}
        </div>
      </SidebarContext.Provider>
    </ProSidebarProvider>
  );
};

// Custom hook to use the SidebarContext
export const useSidebarContext = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a MyProSidebarProvider");
  }
  return context;
};
