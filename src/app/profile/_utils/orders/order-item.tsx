"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HelpCircle, Download, Copy, ChevronDown, ChevronUp } from "lucide-react"
import InfoBox from "../my-profile/info-box"
import ProgressCircle from "./progress-circle"
import { useState } from "react"

const steps = [
    { step: 0, label: ["Payment Pending"] },
    { step: 1, label: ["Order Received"] },
    { step: 2, label: ["Processing"] },
    { step: 3, label: ["Shipped"] },
    { step: 4, label: ["Received"] },
];


export default function OrderItem() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    // const [progressStep, setProgressStep] = useState(50);

    const progressStep = 50;

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Update the helper function to handle the vertical progress bar
    const isStepActive = (stepPosition: number) => {
        const stepPercentage = stepPosition * 25;
        return progressStep >= stepPercentage;
    };

    return (
        <Card className="p-4 md:p-6 ">
            {/* Header Section */}
            <div className={`grid grid-cols-7 gap-0 ${isCollapsed ? 'pb-8' : 'pb-4'}`}>
                <div className="pr-2 md:pr-5 border-none md:border-r border-[#C1C1C1] col-span-4 md:col-span-3">
                    <div className="flex items-center flex-wrap gap-2">

                        <p className="text-[14px] md:text-[28px] md:text-black text-gray-500 font-semibold">Invoice ID:</p>
                        <div className="flex items-center gap-2">
                            <h2 className="text-[14px] md:text-[28px] font-semibold">33048687443</h2>
                            <button className="text-gray-400">
                                <Copy className="w-4 h-4 md:w-5 md:h-5" />

                            </button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm font-normal text-gray-500">Estimated Delivery Date</p>
                        <p className="text-primary text-[14px] md:text-[24px] font-semibold flex items-center gap-2">
                            15 OCTOBER, 2023
                            <span className="inline-block">✈️</span>
                        </p>
                    </div>
                </div>

                <div className=" flex items-center gap-4 col-span-3 md:col-span-4 pl-5">

                    <div className=" space-y-3 hidden md:block">
                        <InfoBox title="Order Date" value="30 September, 2023" />
                        <InfoBox title="Shipping Address" value="221B Baker Street, London United Kingdom" />
                    </div>
                    <ProgressCircle percentage={100} label="Completed" size={100} />
                </div>
            </div>

            {
                isCollapsed ? (
                    <div className="pt-10 border-t border-[#C1C1C1]">
                        {/* Progress Tracker - Updated for mobile */}
                        <div className="relative pb-12 px-4 md:px-10">
                            {/* Desktop view */}
                            <div className="hidden md:block">
                                <div className="h-1 bg-gray-200 rounded">
                                    <div
                                        className="h-1 bg-primary rounded transition-all duration-300"
                                        style={{ width: `${progressStep}%` }}
                                    />
                                </div>
                                <div className="flex justify-between -mt-2">
                                    {steps.map(({ step, label }) => (
                                        <div key={step} className="flex flex-col items-center">
                                            <div className={`w-4 h-4 rounded-full transition-colors ${isStepActive(step) ? 'bg-primary' : 'bg-gray-200'}`} />
                                            <p className="text-base text-center mt-1">{label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile view */}
                            <div className="md:hidden">
                                <div className="relative">
                                    <div className="absolute left-[10px] top-2 bottom-2 w-[4px] bg-gray-200">
                                        <div
                                            className="w-[4px] bg-primary transition-all duration-300"
                                            style={{ height: `${progressStep}%` }}
                                        />
                                    </div>
                                    <div className="space-y-8">
                                        {steps.map(({ step, label }) => (
                                            <div key={step} className="flex items-center gap-4">
                                                <div className={`w-6 h-6 rounded-full transition-colors flex items-center justify-center
                                                    ${isStepActive(step) ? 'bg-primary' : 'bg-gray-200'} z-10`} />
                                                <p className={`text-base ${isStepActive(step) ? 'text-black' : 'text-gray-400'}`}>
                                                    {label}
                                                </p>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Items Section */}
                        <div className="mb-8">
                            <h2 className="text-[20px] md:text-[30px] font-semibold pb-4">Order Summary:</h2>
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/images/products/image 3.jpg"
                                        alt="SuperSkin - Ladies Blonde Wig"
                                        width={80}
                                        height={80}
                                        className="rounded-lg"
                                    />
                                    <div className="flex md:flex-row flex-col flex-start md:items-center justify-start md:justify-between gap-2 md:gap-4 w-full">
                                        <div className="flex-1">
                                            <h3 className="font-normal text-sm md:text-lg text-black line-clamp-1">SuperSkin - Ladies Blonde Wig</h3>
                                            <p className="text-xs md:text-sm font-normal text-[#666666] line-clamp-1">
                                                Women&apos;s Thin Skin Hair System with 110% density and knotless V-shaped hair at front
                                            </p>

                                        </div>
                                        <div className="text-left md:text-right flex items-center md:flex-col flex-row gap-2">
                                            <p className="text-sm font-normal md:font-semibold">$329.00</p>
                                            <p className="text-xs md:text-sm  md:p-0 p-1 font-semibold bg-[#FFEEBB] text-primary md:bg-transparent md:text-gray-500 rounded-md ">QTY: 1</p>
                                        </div>


                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/images/products/image 4.jpg"
                                        alt="SuperSkin - Ladies Blonde Wig"
                                        width={80}
                                        height={80}
                                        className="rounded-lg"
                                    />
                                    <div className="flex md:flex-row flex-col flex-start md:items-center justify-start md:justify-between gap-2 md:gap-4 w-full">
                                        <div className="flex-1">
                                            <h3 className="font-normal text-sm md:text-lg text-black line-clamp-1">SuperSkin - Ladies Blonde Wig</h3>
                                            <p className="text-xs md:text-sm font-normal text-[#666666] line-clamp-1">
                                                Women&apos;s Thin Skin Hair System with 110% density and knotless V-shaped hair at front
                                            </p>

                                        </div>
                                        <div className="text-left md:text-right flex items-center md:flex-col flex-row gap-2">
                                            <p className="text-sm font-normal md:font-semibold">$329.00</p>
                                            <p className="text-xs md:text-sm  md:p-0 p-1 font-semibold bg-[#FFEEBB] text-primary md:bg-transparent md:text-gray-500 rounded-md ">QTY: 1</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary Section */}
                        <div className="border-t pt-4">
                            <div className="flex justify-between text-sm mb-2">
                                <span>Total</span>
                                <span>$627.00</span>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                                <span>Shipping</span>
                                <span>$0.00</span>
                            </div>
                            <div className="flex justify-between text-sm mb-4">
                                <span>Discount</span>
                                <span className="text-red-500">-$10.00</span>
                            </div>
                            <div className="flex justify-between font-semibold">
                                <span>Total</span>
                                <span>$617.00</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col md:flex-row gap-4 pt-8">
                            <Button className="bg-primary hover:bg-primary/80">
                                <Download className="w-4 h-4 mr-2" />
                                DOWNLOAD INVOICE
                            </Button>

                            <Button variant="outline">Cancel Order</Button>
                            <Button variant="outline" className="flex items-center gap-2">
                                Queries
                                <HelpCircle className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Collapse Button */}
                        <button className="w-full text-center mt-8 text-gray-500 flex items-center justify-center gap-2" onClick={handleCollapse}>
                            <ChevronUp className="w-5 h-5" />
                            <span>Collapse</span>

                        </button>
                    </div>
                ) : (
                    <button className="w-full text-center text-gray-500 flex items-center justify-center gap-2" onClick={handleCollapse}>
                        <ChevronDown className="w-5 h-5" />
                        <span>Expand</span>
                    </button>
                )
            }
        </Card>
    )
}

