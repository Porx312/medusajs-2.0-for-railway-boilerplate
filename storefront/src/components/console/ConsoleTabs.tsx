import type React from "react"
import { Tabs, TabsList, TabsTrigger } from "components/ui/tabs"
import { Terminal, Package, Bell, User } from "lucide-react"
import { Badge } from "components/ui/badge"
import { useConsole } from "lib/context/ConsoleProvider"
import { useState } from "react"
import ConsoleHeader from "./ConsoleHeader"

type ConsoleTabsProps = {
  activeTab: string
  setActiveTab: (tab: string) => void
  children: React.ReactNode
  isFullscreen: boolean
  setIsFullscreen: (value: boolean) => void;
}

export default function ConsoleTabs({ activeTab, setActiveTab, children, isFullscreen, setIsFullscreen}: ConsoleTabsProps) {
  const {  setIsOpen, notifications} = useConsole()
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="h-[calc(100%-40px)] border-black">
      <TabsList className="bg-main text-[#cccccc] border-b flex  border-black rounded-none h-10 w-full justify-between  gap-1 px-2">
      <TabsTrigger
            value="terminal"
            className="data-[state=active]:bg-main  data-[state=active]:border-b-[#5FFFCA] data-[state=active]:text-white rounded-none px-2 h-8 border-transparent data-[state=active]:border-b-2 "
          >
            <Terminal className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Terminal</span>
          </TabsTrigger>
          <TabsTrigger
            value="ordenes"
            className="data-[state=active]:bg-main  data-[state=active]:border-b-[#5FFFCA] data-[state=active]:text-white rounded-none px-2 h-8 border-transparent data-[state=active]:border-b-2 "

          >
            <Package className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Órdenes</span>
          </TabsTrigger>
          <TabsTrigger
            value="notificaciones"
            className="data-[state=active]:bg-main  data-[state=active]:border-b-[#5FFFCA] data-[state=active]:text-white rounded-none px-2 h-8 border-transparent data-[state=active]:border-b-2 "

          >
            <Bell className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Notificaciones</span>
            {notifications.some((n) => !n.read) && (
                    <Badge
    variant="destructive"
    className="absolute -top-0 -right-0 h-2 w-2 flex items-center justify-center notification rounded-full p-0 text-[10px] leading-none shadow-md"
  />
)}

          </TabsTrigger>
        
          <TabsTrigger
            value="usuario"
            className="data-[state=active]:bg-main  data-[state=active]:border-b-[#5FFFCA] data-[state=active]:text-white rounded-none px-2 h-8 border-transparent data-[state=active]:border-b-2 "

          >
            <User className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">User</span>
          </TabsTrigger>
       
        
      <ConsoleHeader isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen} setIsOpen={setIsOpen} />
      </TabsList>
      {children}
    </Tabs>
  )
}

