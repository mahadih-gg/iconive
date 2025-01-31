"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

export default function SignupModal() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl grid md:grid-cols-2 relative rounded-lg overflow-hidden">
        {/* Close button */}
        <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10">
          <X className="h-6 w-6" />
        </button>

        {/* Left side - Image */}
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xmixRVzR5DwCASAyIWiyLtyLa0hDvB.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="relative z-20 p-8 h-full flex flex-col">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">
                DISCOVER YOUR
                <br />
                PERFECT WIG
              </h1>
              <p className="text-white/90">Sign up now</p>
            </div>
            <div className="w-12 h-12">
              <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="p-8">
          <div className="max-w-sm mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Create Your Account</h2>
              <p className="text-sm text-gray-600">
                Already a member?{" "}
                <Link href="#" className="text-black underline">
                  Login here
                </Link>
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="First Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Last Name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="E-mail" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm Password" />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm text-gray-600">
                  I accept terms and conditions and privacy policy.
                </Label>
              </div>

              <Button className="w-full bg-yellow-500 hover:bg-yellow-600">SIGN UP</Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or, sign up using</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#EA4335">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

