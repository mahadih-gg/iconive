"use client"

import { useState } from "react"
import { CartContent } from "./cart-content"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingBag } from "@/components/Icons"

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button>
          <ShoppingBag width={23} height={23} className="text-dark hover:text-primary transition-all duration-300" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
        <SheetHeader className="space-y-2.5 pb-6 border-b">
          <SheetTitle className="flex items-center justify-between">
            Shopping Cart (2)
          </SheetTitle>
          <p className="text-yellow-500 font-medium">Congratulations! you&apos;ve got free shipping!</p>
        </SheetHeader>
        <div className="mt-6 h-[calc(100vh-10rem)] overflow-y-auto">
          <CartContent />
        </div>
      </SheetContent>
    </Sheet>
  )
}

