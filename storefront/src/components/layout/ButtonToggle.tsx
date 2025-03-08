"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { useSidebar } from '@lib/context/SidebarContext'
const ButtonToggle = () => {
    const { toggleSidebar } = useSidebar()
  return (
    <Button variant="default" size="icon" className="md:hidden" onClick={toggleSidebar} aria-label="Toggle sidebar">
    <Menu className="h-4 w-4" />
  </Button>
  )
}

export default ButtonToggle
