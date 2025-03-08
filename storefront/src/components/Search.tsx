"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "components/ui/input"
import { SearchIcon } from "lucide-react"

export default function Search() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", query)
    // Implement your search functionality here
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <div className="relative ">
        <SearchIcon className="absolute left-42 top-1/2 h-4 w-4 -translate-y-1/2 " />
        <Input
          type="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full input-color border-gray-500  text-center rounded-md focus-visible:ring-gray-700"
        />
      </div>
    </form>
  )
}

