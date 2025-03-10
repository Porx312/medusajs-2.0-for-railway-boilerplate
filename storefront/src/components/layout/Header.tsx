import React from 'react'
import { CommandMenu } from '../Command-Menu'
import ButtonToggle from './ButtonToggle'
import CartBtn from '@modules/layout/templates/nav'
import Image from 'next/image'
import Link from 'next/link'



const Header = () => {
  
  return (
    <header className="bg-main border-b flex items-center justify-between  border-black p-2">
      <Link href={'/'} className='cursor-pointer  hidden md:block'>
      <div className="relative w-12 h-12 flex items-center justify-center ">
          <Image
            src="https://res.cloudinary.com/dq0pfesxe/image/upload/v1741611547/xs_o2ap6y.png"
            alt="Idestore Logo"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </Link>
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
