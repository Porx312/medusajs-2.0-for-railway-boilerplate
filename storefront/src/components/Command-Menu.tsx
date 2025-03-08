import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Button } from "components/ui/button"
import Link from "next/link"

export function CommandMenu() {
  return (
    <Link href={"/search"}>
      <Button
        variant="outline"
        className="relative h-6 justify-center hover:bg-main rounded-[0.5rem] input-color border-gray-500 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-96"
      >
        <SearchIcon className="h-4 w-4" />
        <span className="hidden lg:inline-flex">IdeStore</span>
        <span className="inline-flex lg:hidden">Search in idestore</span>
      </Button>
    </Link>
  )
}
