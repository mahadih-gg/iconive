"use client"
import Heading from "@/components/common/Heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload } from "lucide-react";
import { useState } from "react";

export default function Wholesale__Register() {
    const [dragActive, setDragActive] = useState(false)
    const [file, setFile] = useState<File | null>(null)

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)

        const droppedFile = e.dataTransfer.files[0]
        if (droppedFile && droppedFile.size <= 50 * 1024 * 1024) { // 50MB limit
            setFile(droppedFile)
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0]
            if (selectedFile.size <= 50 * 1024 * 1024) { // 50MB limit
                setFile(selectedFile)
            }
        }
    }


    return (
        <div className="bg-[#F9F5F0]">
            <div className="container md:py-[80px] py-[40px]">
                <Heading title="Register" />


                <form className="max-w-[789px] mx-auto pt-[40px] space-y-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <Input type="text" name="first_name" placeholder="First Name" className="w-full py-5 border-b-2 border-b-[#7D7D7D] font-[400] text-[#000] placeholder:text-[#000] border-t-0 border-r-0 border-l-0 rounded-none text-[18px] placeholder:text-[18px] focus:outline-none" />
                        <Input type="text" name="last_name" placeholder="Last Name" className="w-full py-5 border-b-2 border-b-[#7D7D7D] font-[400] text-[#000] placeholder:text-[#000] border-t-0 border-r-0 border-l-0 rounded-none text-[18px] placeholder:text-[18px] focus:outline-none" />
                    </div>
                    <Input type="email" name="email" placeholder="E-mail" className="w-full py-5 border-b-2 border-b-[#7D7D7D] font-[400] text-[#000] placeholder:text-[#000] border-t-0 border-r-0 border-l-0 rounded-none text-[18px] placeholder:text-[18px] focus:outline-none" />
                    <Input type="password" name="password" placeholder="Password" className="w-full py-5 border-b-2 border-b-[#7D7D7D] font-[400] text-[#000] placeholder:text-[#000] border-t-0 border-r-0 border-l-0 rounded-none text-[18px] placeholder:text-[18px] focus:outline-none  " />
                    <Input type="password" name="confirm_password" placeholder="Confirm Password" className="w-full py-5 border-b-2 border-b-[#7D7D7D] font-[400] text-[#000] placeholder:text-[#000] border-t-0 border-r-0 border-l-0 rounded-none text-[18px] placeholder:text-[18px] focus:outline-none  " />

                    <Input type="text" name="phone_number" placeholder="Phone Number" className="w-full py-5 border-b-2 border-b-[#7D7D7D] font-[400] text-[#000] placeholder:text-[#000] border-t-0 border-r-0 border-l-0 rounded-none text-[18px] placeholder:text-[18px] focus:outline-none" />

                    <div className="space-y-2">
                        <Label htmlFor="country" className="text-[#000] text-[14px] font-[400]">Country</Label>
                        <Select defaultValue="us">
                            <SelectTrigger className="border-[#AFAFAF] border-2 h-[54px] text-[18px] font-[400] ">
                                <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className="text-[18px] font-[400] " value="us">United States</SelectItem>
                                <SelectItem className="text-[18px] font-[400] " value="ca">Canada</SelectItem>
                                <SelectItem className="text-[18px] font-[400] " value="uk">United Kingdom</SelectItem>
                                <SelectItem className="text-[18px] font-[400] " value="au">Australia</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Input type="text" name="company_name" placeholder="Your Salon/Store Name" className="w-full py-5 border-b-2 border-b-[#7D7D7D] font-[400] text-[#000] placeholder:text-[#000] border-t-0 border-r-0 border-l-0 rounded-none text-[18px] placeholder:text-[18px] focus:outline-none" />


                    <div className="space-y-2">
                        <Label htmlFor="business_type" className="text-[#000] text-[14px] font-[400]">Your Business is</Label>
                        <Select defaultValue="salon">
                            <SelectTrigger className="border-[#AFAFAF] border-2 h-[54px] text-[18px] font-[400] ">
                                <SelectValue placeholder="Select Business Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className="text-[18px] font-[400] " value="salon">Professional Salon</SelectItem>
                                <SelectItem className="text-[18px] font-[400] " value="store">Retail Store</SelectItem>
                                <SelectItem className="text-[18px] font-[400] " value="spa">Spa</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>



                    <div className="space-y-2">
                        <Label htmlFor="products" className="text-[#000] text-[14px] font-[400]">The products you are interested in</Label>
                        <Select defaultValue="toppers">
                            <SelectTrigger className="border-[#AFAFAF] border-2 h-[54px] text-[18px] font-[400] ">
                                <SelectValue placeholder="Select products" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className="text-[18px] font-[400] " value="toppers">Hair Toppers for Women</SelectItem>
                                <SelectItem className="text-[18px] font-[400] " value="wigs">Wigs</SelectItem>
                                <SelectItem className="text-[18px] font-[400] " value="extensions">Hair Extensions</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Upload your Business License / Cosmetology License</Label>
                        <div
                            className={`border-2 border-dashed rounded-lg p-6 text-center ${dragActive ? 'border-primary bg-primary/5' : 'border-gray-300'
                                }`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            <Upload className="mx-auto h-10 w-10 text-gray-400 mb-4" />
                            <p className="text-sm text-gray-600 mb-2">
                                Drag and Drop files here
                            </p>
                            <p className="text-xs text-gray-500 mb-4">
                                File supported:PDF,JPEG,PNG
                            </p>
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                accept=".pdf,.jpeg,.jpg,.png"
                                onChange={handleFileChange}
                            />
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById('file-upload')?.click()}
                            >
                                CHOOSE FILE
                            </Button>
                            {file && (
                                <p className="mt-2 text-sm text-gray-600">{file.name}</p>
                            )}
                            <p className="mt-2 text-xs text-gray-500">
                                Maximum size:50MB
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-sm">
                            I accept terms and conditions and privacy policy.
                        </Label>
                    </div>

                    <div className="flex justify-center pt-6">
                    <Button
                        type="submit"
                        className="mx-auto w-[240px] h-[40px] bg-yellow-500 hover:bg-yellow-600 text-white"
                    >
                        Register
                    </Button>
                    </div>
                </form>

            </div>

        </div>
    )
}