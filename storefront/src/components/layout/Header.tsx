"use client"
import React from 'react'
import { CommandMenu } from '../Command-Menu'
import { Button } from '../ui/button'
import { useSidebar } from 'lib/context/SidebarContext'
import { Menu } from 'lucide-react'
import LocalizedClientLink from '@modules/common/components/localized-client-link'
import CartButton from '@modules/layout/components/cart-button'
import { Suspense } from 'react';

const Header = () => {
  const { toggleSidebar } = useSidebar()
  return (
    <header className="bg-main border-b flex items-center justify-between md:justify-center border-black p-2">
      <Button variant="default" size="icon" className="md:hidden" onClick={toggleSidebar} aria-label="Toggle sidebar">
          <Menu className="h-4 w-4" />
        </Button>
        <CommandMenu/>
       {/*  <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense> */}
  </header>
  )
}

export default Header
