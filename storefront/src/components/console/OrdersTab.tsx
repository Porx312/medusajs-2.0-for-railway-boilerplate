import { TabsContent } from "components/ui/tabs"
import { Card } from "components/ui/card"
import { Badge } from "components/ui/badge"
import { Clock } from "lucide-react"
import { useConsole } from "lib/context/ConsoleProvider"

export default function OrdersTab() {
  const { orders } = useConsole()

  return (
    <TabsContent value="ordenes" className="h-[calc(100%-40px)] bg-main text-white p-4 m-0 overflow-auto">
      <h3 className="text-lg font-semibold mb-4">Órdenes Recientes</h3>
      {orders.length === 0 ? (
        <p className="text-gray-400">No hay órdenes disponibles</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="bg-main border-[#333333] p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-white">{order.id}</h4>
                  <p className="text-sm text-gray-400">{order.customer}</p>
                </div>
                <Badge
                  variant={
                    order.status === "delivered"
                      ? "default"
                      : order.status === "shipped"
                        ? "secondary"
                        : order.status === "processing"
                          ? "secondary"
                          : "destructive"
                  }
                >
                  {order.status}
                </Badge>
              </div>
              <div className="space-y-1 mb-3">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span>
                      {item.quantity}x {item.name}
                    </span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between border-t border-[#333333] pt-2 text-sm">
                <div className="flex items-center gap-1 text-gray-400">
                  <Clock className="h-3 w-3" />
                  <span>{new Date(order.date).toLocaleString()}</span>
                </div>
                <span className="font-bold">${order.total.toFixed(2)}</span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </TabsContent>
  )
}

