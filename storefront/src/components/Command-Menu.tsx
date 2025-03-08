"use client"

import * as React from "react"
import { Bug, FileSearch, MessageSquare, MoreHorizontal, Play, Search, SearchIcon, Terminal, Type } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "components/ui/command"
import { Button } from "components/ui/button"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative h-6 justify-center hover:bg-main rounded-[0.5rem] input-color border-gray-500 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-96"
        onClick={() => setOpen(true)}
      >
        
        <SearchIcon className=" h-4 w-4 " />
        <span className="hidden lg:inline-flex">IdeStore</span>
        <span className="inline-flex lg:hidden">Search...</span>
       
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} >
        <CommandInput placeholder="Search files by name (append : to go to line or @ to go to symbol)" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem>
              <FileSearch className="mr-2 h-4 w-4" />
              <span>Go to File</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Terminal className="mr-2 h-4 w-4" />
              <span>Show and Run Commands</span>
              <CommandShortcut>⇧⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Search className="mr-2 h-4 w-4" />
              <span>Search for Text</span>
              <CommandShortcut>⇧⌘F</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Open Quick Chat</span>
              <CommandShortcut>⇧⌥⌘L</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Type className="mr-2 h-4 w-4" />
              <span>Go to Symbol in Editor</span>
              <CommandShortcut>⇧⌘O</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Bug className="mr-2 h-4 w-4" />
              <span>Start Debugging</span>
              <span className="ml-2 text-xs text-muted-foreground">debug</span>
            </CommandItem>
            <CommandItem>
              <Play className="mr-2 h-4 w-4" />
              <span>Run Task</span>
              <span className="ml-2 text-xs text-muted-foreground">task</span>
            </CommandItem>
            <CommandItem>
              <MoreHorizontal className="mr-2 h-4 w-4" />
              <span>More</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

