import type React from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import Footer from "./footer"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable"
import FilesLayout from "./FilesLayout"
import { SidebarProvider } from "lib/context/SidebarContext"
import { EcommerceConsoleProvider } from "lib/context/ConsoleProvider"
import EcommerceConsole from "../console/EccomerceConsole"

interface LayoutProps {
  children: React.ReactNode
}

export default function LayoutIde({ children }: LayoutProps) {
  return (
    <div className=" flex h-[100vh] flex-col justify-between bg-main ">
    <SidebarProvider>
    <EcommerceConsoleProvider>

      {/* Header */}
     <Header/>

      <div className="flex flex-1   border-x border-black">
        {/* Sidebar */}
        <Sidebar/>
        <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="md:block hidden" defaultSize={15} >
    <FilesLayout/>
        </ResizablePanel>
  <ResizableHandle  />
  <ResizablePanel defaultSize={85}>

        {/* Main Content */}
        <main className="flex-1 flex relative  flex-col item-center w-full  overflow-y-auto justify-between background-main  ">
          {children}

  </main>
  </ResizablePanel>
        </ResizablePanelGroup>
    
      </div>
  {/* Footer */}
    <Footer/>
    </EcommerceConsoleProvider>
    
    </SidebarProvider>
    </div>
  
  )
}

