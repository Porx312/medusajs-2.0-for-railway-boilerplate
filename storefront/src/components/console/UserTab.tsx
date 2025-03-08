"use client"

import type React from "react"
import { useState } from "react"
import { TabsContent } from "components/ui/tabs"
import { Card } from "components/ui/card"
import { Badge } from "components/ui/badge"
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import { Label } from "components/ui/label"
import { User, Terminal } from "lucide-react"
import { useConsole } from "lib/context/ConsoleProvider"

export default function UserTab() {
  const { currentUser, login, register, logout } = useConsole()

  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  const [registerName, setRegisterName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [registerError, setRegisterError] = useState("")

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError("")

    if (!loginEmail || !loginPassword) {
      setLoginError("Error: Campos incompletos")
      return
    }

    const success = await login(loginEmail, loginPassword)
    if (!success) {
      setLoginError("Error: Credenciales incorrectas")
    } else {
      setLoginEmail("")
      setLoginPassword("")
    }
  }

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setRegisterError("")

    if (!registerName || !registerEmail || !registerPassword) {
      setRegisterError("Error: Campos incompletos")
      return
    }

    if (registerPassword.length < 6) {
      setRegisterError("Error: Contraseña demasiado corta")
      return
    }

    const success = await register(registerName, registerEmail, registerPassword)
    if (!success) {
      setRegisterError("Error: Registro fallido")
    } else {
      setRegisterName("")
      setRegisterEmail("")
      setRegisterPassword("")
    }
  }

  return (
    <TabsContent
      value="usuario"
      className="h-[calc(100%-40px)] bg-main p-4 m-0 overflow-auto font-mono"
    >
      {currentUser ? (
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray pb-2">Perfil de Usuario</h3>
          <Card className="bg-main border border-gray p-4 mb-4">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-16 w-16 rounded-full bg-gray-900 flex items-center justify-center">
                <User className="h-8 w-8 " />
              </div>
              <div>
                <h4 className="font-medium">{currentUser.name}</h4>
                <p className="text-sm ">{currentUser.email}</p>
                <Badge className="mt-1 bg-gray-900">{currentUser.role}</Badge>
              </div>
            </div>
            <Button variant="outline" className="border-gray-400  bg-main hover:bg-gray-900" onClick={logout}>
              Cerrar Sesión
            </Button>
          </Card>
        </div>
      ) : (
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-400 pb-2">Iniciar Sesión</h3>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email" className="text-color">
                  Email:
                </Label>
                <Input
                  id="login-email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="bg-gray border-gray-400 text-color focus:ring-gray-600 focus:border-gray-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password" className="text-color">
                  Contraseña:
                </Label>
                <Input
                  id="login-password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="bg-gray border-gray-400 text-color focus:ring-gray-600 focus:border-gray-600"
                />
              </div>
              {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
              <Button type="submit" className="w-full bg-gray-900 text-gray-400 hover:bg-gray-800">
                Iniciar Sesión
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-400 pb-2">Registrarse</h3>
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-name" className="text-gray-400">
                  Nombre:
                </Label>
                <Input
                  id="register-name"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  className="bg-gray border-gray-400 text-gray-400 focus:ring-gray-600 focus:border-gray-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-email" className="text-gray-400">
                  Email:
                </Label>
                <Input
                  id="register-email"
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className="bg-gray border-gray-400 text-gray-400 focus:ring-gray-600 focus:border-gray-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password" className="text-gray-400">
                  Contraseña:
                </Label>
                <Input
                  id="register-password"
                  type="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  className="bg-gray border-gray-400 text-gray-400 focus:ring-gray-600 focus:border-gray-600"
                />
              </div>
              {registerError && <p className="text-red-500 text-sm">{registerError}</p>}
              <Button type="submit" className="w-full bg-gray-900 text-gray-400 hover:bg-gray-800">
                Registrarse
              </Button>
            </form>
          </div>
        </div>
      )}
    </TabsContent>
  )
}

