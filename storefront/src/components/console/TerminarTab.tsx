"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ScrollArea } from "components/ui/scroll-area"
import { Input } from "components/ui/input"
import { TabsContent } from "components/ui/tabs"
import { useConsole } from "lib/context/ConsoleProvider"

export default function TerminalTab() {
  const { orders, notifications, currentUser } = useConsole()
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: "input" | "output"; content: string }>>([
    { type: "output", content: "Bienvenido a la consola de FashionStore." },
    { type: "output", content: "Escribe 'ayuda' para ver los comandos disponibles." },
  ])
  const [terminalInput, setTerminalInput] = useState("")
  const terminalInputRef = useRef<HTMLInputElement>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const commands: Record<string, (args: string[]) => string> = {
    ayuda: () => `Comandos disponibles:
- ayuda: Muestra esta lista de comandos
- ordenes: Muestra las últimas órdenes
- notificaciones: Muestra las últimas notificaciones
- usuario: Muestra información del usuario actual
- limpiar: Limpia la consola`,
    ordenes: () => {
      if (orders.length === 0) return "No hay órdenes disponibles."
      return orders
        .map(
          (order) =>
            `ID: ${order.id} | Cliente: ${order.customer} | Total: $${order.total.toFixed(2)} | Estado: ${order.status}`,
        )
        .join("\n")
    },
    notificaciones: () => {
      if (notifications.length === 0) return "No hay notificaciones disponibles."
      return notifications
        .map((notification) => `[${notification.type.toUpperCase()}] ${notification.message}`)
        .join("\n")
    },
    usuario: () => {
      if (!currentUser) return "No hay usuario conectado. Inicia sesión en la pestaña 'Usuario'."
      return `ID: ${currentUser.id}\nNombre: ${currentUser.name}\nEmail: ${currentUser.email}\nRol: ${currentUser.role}`
    },
    limpiar: () => {
      setTerminalHistory([])
      return ""
    },
  }

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!terminalInput.trim()) return

    const newHistory = [...terminalHistory, { type: "input", content: `$ ${terminalInput}` }]
    const [cmd, ...args] = terminalInput.trim().split(" ")
    let response = ""

    if (cmd in commands) {
      response = commands[cmd](args)
    } else {
      response = `Comando no reconocido: ${cmd}. Escribe 'ayuda' para ver los comandos disponibles.`
    }

    if (cmd !== "limpiar" || response) {
      newHistory.push({ type: "output", content: response })
      newHistory.push({ type: "output", content: response })
    }

    setTerminalHistory(cmd === "limpiar" ? [] : newHistory as { type: "input" | "output"; content: string }[])
    setTerminalInput("")
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [])

  return (
    <TabsContent value="terminal" className="h-[calc(100%-40px)] bg-main text-white pb-4 m-0">
      <ScrollArea className="h-[calc(100%-40px)] p-4" ref={scrollAreaRef}>
        {terminalHistory.map((item, index) => (
          <div
            key={index}
            className={`mb-2 font-mono text-sm ${item.type === "input" ? "text-green-400" : "text-gray-300"}`}
          >
            {item.content}
          </div>
        ))}
      </ScrollArea>

      <form onSubmit={handleTerminalSubmit} className="border-t border-[#333333] p-2 flex">
        <div className="text-green-400 font-mono mr-2">$</div>
        <Input
          ref={terminalInputRef}
          value={terminalInput}
          onChange={(e) => setTerminalInput(e.target.value)}
          className="flex-1 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 font-mono text-white"
          placeholder="Escribe un comando..."
        />
      </form>
    </TabsContent>
  )
}

