import React from 'react'
import { CommandMenu } from '../Command-Menu'
import ButtonToggle from './ButtonToggle'
import CartBtn from '@modules/layout/templates/nav'



const Header = () => {
  
  return (
    <header className="bg-main border-b flex items-center justify-between md:justify-center border-black p-2">
      <ButtonToggle/>
        <CommandMenu/>
        <CartBtn/>
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
