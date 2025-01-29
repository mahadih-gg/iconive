"use client"

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Star } from "lucide-react";
import ProductCarousel from "./Image__Carousel";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export default function ProductPage() {
  const hairLengths = ['12"', '14"', '16"', '18"', '20"', '22"', '24"', '28"']
  const baseSizes = ["7x5", "8x5", "8x6", "9x7", "10x7", "10x8"]
  const densities = ["80%", "90%", "100%", "120%", "140%"]

  return (
    <div className="container mx-auto px-4 ">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Product Images */}
        <ProductCarousel />

        {/* Product Details */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className={`text-2xl font-medium ${raleway.className}`}>
              7&quot;X8&quot; COURTNEY | MONO PART | LEFT PART REMY HUMAN HAIR TOPPER
            </h1>
            <div className="flex items-center justify-between gap-4 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-[22px] font-medium line-through text-muted-foreground text-red-700">$308</span>
                <span className="text-2xl font-semibold text-black">$240</span>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-black text-black" />
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
                <RadioGroupItem key={color} value={color} id={color} className="w-8 h-8 rounded-full bg-neutral-900" />
              ))}
            </RadioGroup>
          </div>

          {/* Hair Length */}
          <div className="space-y-2">
            <h3 className="font-medium text-muted-foreground">Hair length:</h3>
            <div className="flex flex-wrap gap-2">
              {hairLengths.map((length) => (
                <Button key={length} variant="outline" className="min-w-[60px]">
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
                <Button key={size} variant="outline" className="min-w-[60px]">
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
                <Button key={density} variant="outline" className="min-w-[60px]">
                  {density}
                </Button>
              ))}
            </div>
          </div>

          {/* Style */}
          <div className="space-y-2">
            <h3 className="font-medium text-muted-foreground">Style:</h3>
            <div className="flex gap-2">
              <Button variant="outline">Straight</Button>
              <Button variant="outline">Wavy</Button>
            </div>
          </div>

          {/* Processing Time */}
          <div className="text-sm text-muted-foreground">
            <p>Processing Time:3-5 business days</p>
            <p>Processing time does not include delivery time</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button className="flex-1" size="lg">
              ADD TO CART
            </Button>
            <Button variant="outline" size="lg">
              + WISH LIST
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

