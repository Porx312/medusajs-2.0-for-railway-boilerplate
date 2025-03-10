"use client"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  ShoppingCart,
  UserPlus,
  ShoppingBag,
  ShirtIcon as TShirt,
  Sticker,
  MousePointer,
} from "lucide-react"
import { Button } from "components/ui/button"

const Hero = () => {
  return (
    <div className="flex-1 bg-background">
      {/* Welcome Content */}
      <div className="flex flex-col items-center p-8 max-w-4xl mx-auto">
        <div className="relative w-44 h-44 md:w-72 md:h-72 ">
          <Image
            src="https://res.cloudinary.com/dq0pfesxe/image/upload/v1741608903/idestore_ihxaim.png"
            alt="Idestore Logo"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        <h1 className="text-3xl font-light tracking-tight mb-2">Welcome to Idestorex</h1>
        <p className="text-muted-foreground mb-8">Store For Developers</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="space-y-4">
            <h2 className="text-xl font-light border-b border-border pb-2">Quick Start</h2>

            <div className="space-y-2">
              <Link href="/store" className="block">
                <Button variant="ghost" className="w-full justify-start group hover:bg-accent">
                  <span className="mr-2 text-blue-400">
                    <ShoppingBag className="h-4 w-4" />
                  </span>
                  Go to Store
                  <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Link>

              <Link href="/register" className="block">
                <Button variant="ghost" className="w-full justify-start group hover:bg-accent">
                  <span className="mr-2 text-blue-400">
                    <UserPlus className="h-4 w-4" />
                  </span>
                  Create Account
                  <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Link>

              <Link href="/cart" className="block">
                <Button variant="ghost" className="w-full justify-start group hover:bg-accent">
                  <span className="mr-2 text-blue-400">
                    <ShoppingCart className="h-4 w-4" />
                  </span>
                  Shopping Cart
                  <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-light border-b border-border pb-2">Featured Products</h2>

            <div className="space-y-2">
              <Link href="/store/shirts" className="block">
                <Button variant="ghost" className="w-full justify-start group hover:bg-accent">
                  <span className="mr-2 text-blue-400">
                    <TShirt className="h-4 w-4" />
                  </span>
                  View T-Shirts
                  <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Link>

              <Link href="/store/stickers" className="block">
                <Button variant="ghost" className="w-full justify-start group hover:bg-accent">
                  <span className="mr-2 text-blue-400">
                    <Sticker className="h-4 w-4" />
                  </span>
                  View Stickers
                  <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Link>

              <Link href="/store/mousepads" className="block">
                <Button variant="ghost" className="w-full justify-start group hover:bg-accent">
                  <span className="mr-2 text-blue-400">
                    <MousePointer className="h-4 w-4" />
                  </span>
                  View Mousepads
                  <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer with copyright */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Idestore. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero

