import React, { useState } from 'react';

interface ConsoleProps {
  isFullscreen: boolean;
  setIsFullscreen: (value: boolean) => void;
}

export default function Console({ isFullscreen, setIsFullscreen }: ConsoleProps) {
  const [history, setHistory] = useState<Array<{ type: "input" | "output"; content: string }>>([
    { type: "output", content: "Bienvenido a la consola interactiva. Escribe un comando y presiona Enter." },
    { type: "output", content: "Prueba con 'ayuda' para ver comandos disponibles." },
  ])
  const [input, setInput] = useState("")
  const [isOpen, setIsOpen] = useState(true)
  const [copied, setCopied] = useState(false)
  // Eliminar el estado local de isFullscreen ya que ahora viene como prop
  // const [isFullscreen, setIsFullscreen] = useState(false)
  
  // ... resto del código permanece igual ...
} 