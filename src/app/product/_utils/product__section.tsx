"use client"

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Clock, Star, ShoppingCart } from "lucide-react";
import ImageCarousel from "./image__carousel";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export default function ProductPage() {
  const hairLengths = ['12"', '14"', '16"', '18"', '20"', '22"', '24"', '28"']
  const baseSizes = ["7x5", "8x5", "8x6", "9x7", "10x7", "10x8"]
  const densities = ["80%", "90%", "100%", "120%", "140%"]

  return (
    <div className="px-0 md:px-4 ">
      <div className="grid gap-5 md:gap-10 grid-cols-1 md:grid-cols-2 pb-5 md:pb-10">
        {/* Product Images */}
        <ImageCarousel />

        {/* Product Details */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className={`text-base md:text-2xl font-medium md:uppercase ${raleway.className}`}>
              7&quot;X8&quot; COURTNEY | MONO PART | LEFT PART REMY HUMAN HAIR TOPPER
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-[22px] font-medium line-through text-muted-foreground text-red-700">$308</span>
                <span className="text-2xl font-semibold text-black">$240</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">(60) Reviews</span>
              </div>
            </div>
          </div>

          {/* Color Selection */}
          <div className="space-y-2">
            <h3 className="font-medium text-muted-foreground">Color:</h3>
            <RadioGroup defaultValue="dark-brown" className="flex gap-2">
              {["black", "dark-brown", "brown"].map((color) => (
                <RadioGroupItem key={color} value={color} id={color} className="w-8 h-8 rounded-full  border-[#212529] bg-neutral-900" />
              ))}
            </RadioGroup>
          </div>

          {/* Hair Length */}
          <div className="space-y-2">
            <h3 className="font-medium text-muted-foreground">Hair length:</h3>
            <div className="flex flex-wrap gap-2">
              {hairLengths.map((length) => (
                <Button key={length} variant="outline" className="min-w-[60px] rounded-none bg-[#FFEEBB] text-[#ECB30A] md:bg-transparent md:border-[#212529] md:text-[#212529]">
                  {length}
                </Button>
              ))}
            </div>
          </div>

          {/* Base Size */}
          <div className="space-y-2">
            <h3 className="font-medium text-muted-foreground">Base size:</h3>
            <div className="flex flex-wrap gap-2">
              {baseSizes.map((size) => (
                <Button key={size} variant="outline" className="min-w-[60px] rounded-none bg-[#FFEEBB] text-[#ECB30A] md:bg-transparent md:border-[#212529] md:text-[#212529]">
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Density */}
          <div className="space-y-2">
            <h3 className="font-medium text-muted-foreground">Density:</h3>
            <div className="flex flex-wrap gap-2">
              {densities.map((density) => (
                <Button key={density} variant="outline" className="min-w-[60px] rounded-none bg-[#FFEEBB] text-[#ECB30A] md:bg-transparent md:border-[#212529] md:text-[#212529]">
                  {density}
                </Button>
              ))}
            </div>
          </div>

          {/* Style */}
          <div className="space-y-2">
            <h3 className="font-medium text-muted-foreground">Style:</h3>
            <div className="flex gap-2">
              <Button variant="outline" className="text-[#ECB30A] bg-[#FFEEBB] md:bg-transparent md:border-[#212529] md:text-[#212529] rounded-none">Straight</Button>
              <Button variant="outline" className="text-[#ECB30A] bg-[#FFEEBB] md:bg-transparent md:border-[#212529] md:text-[#212529] rounded-none">Wavy</Button>
            </div>
          </div>

          {/* Processing Time */}
          <div className="text-sm text-muted-foreground space-y-3">
            <p  className="text-black flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Processing Time: <span className="font-medium text-muted-foreground">3-5 business days</span></p>
            <p>Processing time does not include delivery time</p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="flex-1 rounded-none h-[50px] " size="lg">
              <ShoppingCart className="w-4 h-4" />  
              ADD TO CART
            </Button>
            <Button variant="outline" className="border-primary text-primary rounded-none h-[50px]" size="lg">
              + WISH LIST
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

