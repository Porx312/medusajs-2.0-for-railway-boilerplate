import { Suspense } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { ShoppingCart } from "lucide-react"

export default async function CartBtn() {

  return (
    


       
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2 h-full items-center px-4 py-2 transition-colors hover:bg-accent rounded-md  font-semibold text-sm"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                       <ShoppingCart className="h-5 w-5" />

                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
  )
}
