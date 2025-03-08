import { TabsContent } from "components/ui/tabs"
import { Badge } from "components/ui/badge"
import { Clock } from "lucide-react"
import { useConsole } from "lib/context/ConsoleProvider"

export default function NotificationsTab() {
  const { notifications } = useConsole()

  return (
    <TabsContent value="notificaciones" className="h-[calc(100%-40px)] bg-main text-white p-4 m-0 overflow-auto">
      <h3 className="text-lg font-semibold mb-4">Notificaciones</h3>
      {notifications.length === 0 ? (
        <p className="text-gray-400">No hay notificaciones disponibles</p>
      ) : (
        <div className="space-y-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-3 rounded-md ${notification.read ? "sidebar-bg" : "sidebar-bg"} border-l-4 ${
                notification.type === "success"
                  ? "border-green-500"
                  : notification.type === "warning"
                    ? "border-yellow-500"
                    : notification.type === "error"
                      ? "border-red-500"
                      : "border-blue-500"
              }`}
            >
              <div className="flex justify-between">
                <p className="text-sm">{notification.message}</p>
                {!notification.read && (
                  <Badge variant="outline" className="text-[10px] h-5 px-1">
                    Nueva
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                <span>{new Date(notification.timestamp).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </TabsContent>
  )
}

