"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { UserIcon } from "lucide-react"
import Image from "next/image"
import A__Input from "../Form/A__Input"

export default function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <UserIcon width={20} height={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[1000px] p-0">
        <DialogHeader className="p-0 sr-only">
          <DialogTitle>Sign Up</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="hidden md:block relative">
            <Image className="object-cover h-full" src="/images/auth-bg.jpg" alt="signin" width={800} height={800} />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="bg-[#F9F5F0]">
            <form className="p-10 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Create Your Account</h2>
                <p className="text-gray-600">
                  Already a member?{" "}
                  <button type="button" className="text-primary font-medium">
                    Login here
                  </button>
                </p>
              </div>

              <div className="space-y-5 pt-5">
                <div className="grid grid-cols-2 gap-5">
                  <A__Input name="first_name" type="text" placeholder="First Name" />
                  <A__Input name="last_name" type="text" placeholder="Last Name" />
                </div>
                <A__Input name="email" type="email" placeholder="Email" />
                <A__Input name="password" type="password" placeholder="Password" />
                <A__Input name="confirm_password" type="password" placeholder="Confirm Password" />

                <div className="space-y-5">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      I accept terms and conditions and privacy policy.
                    </Label>
                  </div>

                  <Button className="w-full" size="lg">
                    SIGN UP
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-[#F9F5F0] text-gray-500">Or, sign up using</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full" size="lg">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#EA4335">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#1877F2">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      </svg>
                      Facebook
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

