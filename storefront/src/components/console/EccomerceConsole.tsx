"use client"

import { useState, useEffect } from "react"
import { useConsole } from "lib/context/ConsoleProvider"
import UserTab from "./UserTab"
import ConsoleTabs from "./ConsoleTabs"
import TerminalTab from "./TerminarTab"
import OrdersTab from "./OrdersTab"
import NotificationsTab from "./NotificationsTab"
import ConsoleHeader from "./ConsoleHeader"

export default function EcommerceConsole() {
  const { isOpen,  notifications, markNotificationAsRead } = useConsole()
  const [isFullscreen, setIsFullScreen] = useState(false)
  const [activeTab, setActiveTab] = useState("terminal")

  useEffect(() => {
    if (activeTab === "notificaciones") {
      notifications.forEach((notification) => {
        if (!notification.read) {
          markNotificationAsRead(notification.id)
        }
      })
    }
  }, [activeTab, notifications, markNotificationAsRead])

  if (!isOpen) return null

  return (
    <div
      className={`absolute z-50 w-full ${
        isFullscreen ? "inset-0" : "bottom-0  h-[40vh] max-h-[600px]"
      } shadow-lg bg-main overflow-hidden`}
    >

      <ConsoleTabs setIsFullscreen={setIsFullScreen} isFullscreen={isFullscreen} activeTab={activeTab} setActiveTab={setActiveTab}>
        <TerminalTab />
        <OrdersTab />
        <NotificationsTab />
        <UserTab />
      </ConsoleTabs>
    </div>
  )
}

