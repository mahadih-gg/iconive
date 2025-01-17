"use client"
import Heading from "@/components/common/Heading";
// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload } from "lucide-react";
import { useState } from "react";
import A__Input from "@/components/Form/A__Input";
import A__Select from "@/components/Form/A__Select";
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
                        <A__Input type="text" name="first_name" placeholder="First Name" />

                        <A__Input type="text" name="last_name" placeholder="Last Name" />

                    </div>

                    <A__Input type="email" name="email" placeholder="E-mail" />

                    <A__Input type="password" name="password" placeholder="Password" />

                    <A__Input type="password" name="confirm_password" placeholder="Confirm Password" />

                    <A__Input type="text" name="phone_number" placeholder="Phone Number" />

                    <A__Select label="Country" name="country" options={[{ value: 'us', label: 'United States' }, { value: 'ca', label: 'Canada' }, { value: 'uk', label: 'United Kingdom' }, { value: 'au', label: 'Australia' }]} defaultValue="us" />

                    <A__Input type="text" name="company_name" placeholder="Your Salon/Store Name" />

                    <A__Select label="Your Business is" name="business_type" options={[{ value: 'salon', label: 'Professional Salon' }, { value: 'store', label: 'Retail Store' }]} defaultValue="salon" />


                    <A__Select label="The products you are interested in" name="products" options={[{ value: 'toppers', label: 'Hair Toppers for Women' }, { value: 'wigs', label: 'Wigs' }, { value: 'extensions', label: 'Hair Extensions' }]} defaultValue="toppers" />


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