"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Order = {
  id: string
  customer: string
  items: { name: string; price: number; quantity: number }[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered"
  date: string
}

type Notification = {
  id: string
  type: "info" | "success" | "warning" | "error"
  message: string
  timestamp: string
  read: boolean
}

type User = {
  id: string
  name: string
  email: string
  role: "customer" | "admin"
}

type ConsoleContextType = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  orders: Order[]
  notifications: Notification[]
  currentUser: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  markNotificationAsRead: (id: string) => void
  addNotification: (notification: Omit<Notification, "id" | "timestamp" | "read">) => void
  unreadNotificationsCount: number
}

const ConsoleContext = createContext<ConsoleContextType | undefined>(undefined)

export function EcommerceConsoleProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [orders, setOrders] = useState<Order[]>([])
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(0)

  // Simular órdenes de ejemplo
  useEffect(() => {
    const demoOrders: Order[] = [
      {
        id: "ORD-1234",
        customer: "Juan Pérez",
        items: [
          { name: "Camiseta Básica", price: 19.99, quantity: 2 },
          { name: "Jeans Slim Fit", price: 49.99, quantity: 1 },
        ],
        total: 89.97,
        status: "pending",
        date: "2025-03-04T10:30:00Z",
      },
      {
        id: "ORD-1235",
        customer: "María García",
        items: [
          { name: "Vestido Floral", price: 59.99, quantity: 1 },
          { name: "Zapatos Casuales", price: 79.99, quantity: 1 },
        ],
        total: 139.98,
        status: "processing",
        date: "2025-03-04T09:15:00Z",
      },
      {
        id: "ORD-1236",
        customer: "Carlos Rodríguez",
        items: [{ name: "Sudadera con Capucha", price: 39.99, quantity: 1 }],
        total: 39.99,
        status: "shipped",
        date: "2025-03-03T16:45:00Z",
      },
    ]
    setOrders(demoOrders)

    // Simular notificaciones
    const demoNotifications: Notification[] = [
      {
        id: "1",
        type: "success",
        message: "Nueva orden recibida: ORD-1234",
        timestamp: "2025-03-04T10:31:00Z",
        read: false,
      },
      {
        id: "2",
        type: "info",
        message: "El usuario Juan Pérez se ha registrado",
        timestamp: "2025-03-04T09:20:00Z",
        read: false,
      },
      {
        id: "3",
        type: "warning",
        message: "Stock bajo para Camiseta Básica (5 unidades)",
        timestamp: "2025-03-03T14:15:00Z",
        read: true,
      },
    ]
    setNotifications(demoNotifications)

    // Contar notificaciones no leídas
    setUnreadNotificationsCount(demoNotifications.filter((n) => !n.read).length)

    // Simular una nueva notificación después de 10 segundos
    const timer = setTimeout(() => {
      addNotification({
        type: "success",
        message: "Nueva orden recibida: ORD-1237",
      })
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulación de login
    if (email && password) {
      setCurrentUser({
        id: "USR-1",
        name: "Admin",
        email: email,
        role: "admin",
      })
      addNotification({
        type: "info",
        message: "Sesión iniciada correctamente",
      })
      return true
    }
    return false
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulación de registro
    if (name && email && password) {
      setCurrentUser({
        id: "USR-" + Math.floor(Math.random() * 1000),
        name: name,
        email: email,
        role: "customer",
      })
      addNotification({
        type: "success",
        message: `Nuevo usuario registrado: ${name}`,
      })
      return true
    }
    return false
  }

  const logout = () => {
    setCurrentUser(null)
    addNotification({
      type: "info",
      message: "Sesión cerrada correctamente",
    })
  }

  const markNotificationAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
    setUnreadNotificationsCount((prev) => Math.max(0, prev - 1))
  }

  const addNotification = (notification: Omit<Notification, "id" | "timestamp" | "read">) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      read: false,
    }
    setNotifications((prev) => [newNotification, ...prev])
    setUnreadNotificationsCount((prev) => prev + 1)
  }

  return (
    <ConsoleContext.Provider
      value={{
        isOpen,
        setIsOpen,
        orders,
        notifications,
        currentUser,
        login,
        register,
        logout,
        markNotificationAsRead,
        addNotification,
        unreadNotificationsCount,
      }}
    >
      {children}
    </ConsoleContext.Provider>
  )
}

export function useConsole() {
  const context = useContext(ConsoleContext)
  if (context === undefined) {
    throw new Error("useConsole must be used within a EcommerceConsoleProvider")
  }
  return context
}

