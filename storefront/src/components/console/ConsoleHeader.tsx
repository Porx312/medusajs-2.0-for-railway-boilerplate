"use client"

import { useState } from "react"
import { Button } from "components/ui/button"
import { Terminal, X, Maximize2, Minimize2, Copy, CheckCircle2 } from "lucide-react"

type ConsoleHeaderProps = {
  isFullscreen: boolean
  setIsFullscreen: (value: boolean) => void
  setIsOpen: (value: boolean) => void
}

export default function ConsoleHeader({ isFullscreen, setIsFullscreen, setIsOpen }: ConsoleHeaderProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    // Implement copy functionality here
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
      
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 hover:bg-[#333333]"
          onClick={copyToClipboard}
          title="Copiar al portapapeles"
        >
          {copied ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 hover:bg-[#333333]"
          onClick={() => setIsFullscreen(!isFullscreen)}
          title={isFullscreen ? "Minimizar" : "Maximizar"}
        >
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 hover:bg-[#333333]"
          onClick={() => setIsOpen(false)}
          title="Cerrar"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
  )
}

