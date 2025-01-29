"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import Image from "next/image"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export function CartContent() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "SuperSkin - Ladies Blonde Wig",
      price: 240.0,
      quantity: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VHmLTGUJHyRwhVmmtzjoQdoXhlRW90.png",
    },
    {
      id: 2,
      name: "SuperSkin - Ladies Blonde Wig",
      price: 649.0,
      quantity: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VHmLTGUJHyRwhVmmtzjoQdoXhlRW90.png",
    },
  ])

  const updateQuantity = (id: number, change: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change)
          return { ...item, quantity: newQuantity }
        }
        return item
      }),
    )
  }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 py-4 border-b">
              <div className="w-16 h-16 relative rounded-md overflow-hidden bg-gray-100">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-sm">{item.name}</h3>
                <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 flex items-center justify-center border rounded-md"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-8 h-8 flex items-center justify-center border rounded-md"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <button onClick={() => removeItem(item.id)} className="ml-auto text-red-500" aria-label="Remove item">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {items.length > 0 && (
        <div className="py-6 space-y-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Grand Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <p className="text-sm text-gray-500">Taxes and shipping calculated at checkout</p>
          <p className="text-sm text-gray-500">
            While the contents of your cart are currently in USD, the checkout will use BDT at the latest exchange rate.
          </p>
          <div className="flex gap-4">
            <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600">CHECK OUT</Button>
            <Button variant="outline" className="flex-1">
              ADD MORE
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

