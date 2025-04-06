"use client"

import { Button } from "@medusajs/ui"
import { useMemo } from "react"
import { Package, Calendar, CreditCard, ChevronRight } from "lucide-react"

import Thumbnail from "@modules/products/components/thumbnail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { convertToLocale } from "@lib/util/money"
import type { HttpTypes } from "@medusajs/types"

type OrderCardProps = {
  order: HttpTypes.StoreOrder
}

const OrderCard = ({ order }: OrderCardProps) => {
  const numberOfLines = useMemo(() => {
    return (
      order.items?.reduce((acc, item) => {
        return acc + item.quantity
      }, 0) ?? 0
    )
  }, [order])

  const numberOfProducts = useMemo(() => {
    return order.items?.length ?? 0
  }, [order])

  const formattedDate = useMemo(() => {
    return new Date(order.created_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }, [order.created_at])

  return (
    <div
      className="border border-slate-800 rounded-lg overflow-hidden  transition-shadow duration-200"
      data-testid="order-card"
    >
      {/* Header */}
      <div className="p-4 sidebar-bg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg" data-testid="order-display-id">
                Order #{order.display_id}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full border">
                {order.status || "Processing"}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
              <div className="flex items-center gap-1" data-testid="order-created-at">
                <Calendar className="w-3.5 h-3.5" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1" data-testid="order-amount">
                <CreditCard className="w-3.5 h-3.5" />
                <span>
                  {convertToLocale({
                    amount: order.total,
                    currency_code: order.currency_code,
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Package className="w-3.5 h-3.5" />
                <span>{`${numberOfLines} ${numberOfLines > 1 ? "items" : "item"}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px "></div>

      {/* Items */}
      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {order.items?.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="group relative rounded-md overflow-hidden border border-gray-600 sidebar-bg"
              data-testid="order-item"
            >
              <div className="aspect-square w-full relative">
                <Thumbnail thumbnail={item.thumbnail} images={[]} size="full" />
              </div>
              <div className="p-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium truncate" data-testid="item-title">
                    {item.title}
                  </span>
                  <span className="text-gray-500 whitespace-nowrap" data-testid="item-quantity">
                    x{item.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {numberOfProducts > 3 && (
            <div className="relative rounded-md overflow-hidden border border-gray-200 bg-gray-50 flex flex-col items-center justify-center aspect-square">
              <span className="text-lg font-medium">+{numberOfProducts - 3}</span>
              <span className="text-sm text-gray-500">more items</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end p-4 pt-0">
        <LocalizedClientLink href={`/account/orders/details/${order.id}`}>
          <Button
            data-testid="order-details-link"
            variant="primary"
            className="flex items-center gap-1 hover:gap-2 transition-all"
          >
            See details <ChevronRight className="w-4 h-4" />
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default OrderCard

