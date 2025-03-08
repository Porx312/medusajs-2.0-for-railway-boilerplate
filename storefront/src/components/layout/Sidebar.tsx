"use client"

import { 
  Sheet, 
  SheetContent,
  SheetHeader,
  SheetTitle 
} from "../ui/sheet"
import { cn } from "lib/utils"
import { X, Cog, Files, Search, ShoppingCart, UserRound } from 'lucide-react'
import Link from 'next/link'
import { useSidebar } from "lib/context/SidebarContext"
import FilesLayout from "./FilesLayout"

interface SidebarProps {
  className?: string
}

export default function Sidebar({ className }: SidebarProps) {
  const { isSidebarOpen, closeSidebar } = useSidebar()

  const sidebarContent = (
    <>
    <nav className="space-y-2 flex flex-col  md:h-full h-auto w-full items-center justify-between">
      <div className='flex flex-row md:flex-col gap-2.5'>
        <Link 
          href={"/store"} 
          className='flex border-l-3 border-transparent hover:border-l-3 hover:border-l-[#5FFFCA] w-15 items-center justify-center transition-colors'
        >
          <Files className='w-8 h-8 hover:text-gray-500' />
        </Link>
        <Link 
          href={"/"} 
          className='flex border-l-3 border-transparent hover:border-l-3 hover:border-l-[#5FFFCA] w-15 items-center justify-center transition-colors'
        >
          <Search className='w-8 h-8 hover:text-gray-500' />
        </Link>
        <Link 
          href={"/cart"} 
          className='flex border-l-3 border-transparent hover:border-l-3 hover:border-l-[#5FFFCA] w-15 items-center justify-center transition-colors'
        >
          <ShoppingCart className='w-8 h-8 hover:text-gray-500' />
        </Link>
      </div>
      <div className='flex flex-row  md:flex-col gap-2.5'>
        <Link 
          href={"/account"} 
          className='flex border-l-3 border-transparent hover:border-l-3 hover:border-l-[#5FFFCA] w-15 items-center justify-center transition-colors'
        >
          <UserRound className='w-8 h-8 hover:text-gray-500' />
        </Link>
        <Link 
          href={"/"} 
          className='flex border-l-3 border-transparent hover:border-l-3 hover:border-l-[#5FFFCA] w-15 items-center justify-center transition-colors'
        >
          <Cog className='w-8 h-8 hover:text-gray-500' />
        </Link>
      </div>

    </nav>
    <aside className="md:hidden block h-full">

    <FilesLayout/>
    </aside>

    </>
  )

  return (
    <>
      {/* Versión de escritorio - siempre visible en md+ */}
      <aside className={cn("w-16 md:block hidden bg-main border-r border-black p-4", className)}>
        {sidebarContent}
      </aside>

      {/* Versión móvil - Sheet que se abre/cierra */}
      <Sheet open={isSidebarOpen} onOpenChange={closeSidebar}>

<SheetContent side="left" className="p-0 py-5 w-[300px] bg-main">

  <SheetHeader className="px-2">

    <SheetTitle className="sr-only">Menú de navegación</SheetTitle>

    <div className="flex items-center justify-end">


    </div>

  </SheetHeader>

  {sidebarContent}
</SheetContent>

</Sheet>
    </>
  )
}
