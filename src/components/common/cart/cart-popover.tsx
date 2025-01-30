"use client"

import { useState } from "react"
import { CartContent } from "./cart-content"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingBag } from "@/components/Icons"
import { Raleway } from "next/font/google"

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] })

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button>
          <ShoppingBag width={23} height={23} className="text-dark hover:text-primary transition-all duration-300" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[400px] sm:max-w-[500px] sm:w-full">
        <SheetHeader className="space-y-2.5 pb-6 border-b">
          <SheetTitle className={`flex items-center justify-between text-[22px] font-[500] ${raleway.className}`}>
            Shopping Cart (2)
          </SheetTitle>
          <p className="text-[18px]"><span className="text-yellow-500 font-[600]">Congratulations!</span> <span className="font-[400]">you&apos;ve got free shipping!</span></p>
        </SheetHeader>
        <div className="mt-6 h-[calc(100vh-10rem)] overflow-y-auto">
          <CartContent />
        </div>
      </SheetContent>
    </Sheet>
  )
}

