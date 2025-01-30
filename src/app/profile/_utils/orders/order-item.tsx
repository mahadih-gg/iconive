"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HelpCircle, Download, Copy, ChevronDown, ChevronUp } from "lucide-react"
import InfoBox from "../my-profile/info-box"
import ProgressCircle from "./progress-circle"
import { useState } from "react"

const steps = [
    { step: 0, label: ["Processing"] },
    { step: 1, label: ["Shipped"] },
    { step: 2, label: ["Received"] },
    { step: 3, label: ["Completed"] },
];

export default function OrderItem() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    // const [progressStep, setProgressStep] = useState(50);

    const progressStep = 50;

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Add helper function to determine if a step is active
    const isStepActive = (stepPosition: number) => {
        const stepPercentage = stepPosition * 25; // 4 steps = 25% each
        return progressStep >= stepPercentage;
    };

    return (
        <Card className="p-6 ">
            {/* Header Section */}
            <div className={`grid grid-cols-7 gap-0 ${isCollapsed ? 'pb-8' : 'pb-4'}`}>
                <div className="pr-5 border-r border-[#C1C1C1] col-span-3">
                    <div className="flex items-center gap-2">
                        <h1 className="text-[28px] font-semibold">Invoice ID: 33048687443</h1>
                        <button className="text-gray-400">
                            <Copy className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm font-normal text-gray-500">Estimated Delivery Date</p>
                        <p className="text-primary text-[24px] font-semibold flex items-center gap-2">
                            15 OCTOBER, 2023
                            <span className="inline-block">✈️</span>
                        </p>
                    </div>
                </div>

                <div className=" flex items-center gap-4 col-span-4 pl-5">

                    <div className=" space-y-3">
                        <InfoBox title="Order Date" value="30 September, 2023" />
                        <InfoBox title="Shipping Address" value="221B Baker Street, London United Kingdom" />

                    </div>
                    <ProgressCircle percentage={90} label="Completed" size={100} />
                </div>
            </div>

            {
                isCollapsed ? (
                    <div className="pt-10 border-t border-[#C1C1C1]">
                        {/* Progress Tracker */}
                        <div className="relative pb-12 px-10">
                            <div className="h-1 bg-gray-200 rounded">
                                <div
                                    className="h-1 bg-primary rounded transition-all duration-300"
                                    style={{ width: `${progressStep}%` }}
                                />
                            </div>
                            <div className="flex justify-between -mt-2">
                                {steps.map(({ step, label }) => (
                                    <div key={step} className="flex flex-col items-center">
                                        <div className={`w-4 h-4 rounded-full transition-colors ${isStepActive(step) ? 'bg-primary' : 'bg-gray-200'
                                            }`} />
                                        <p className="text-base text-center mt-1">
                                            {label.map((text, i) => (
                                                <span key={i}>
                                                    {text}
                                                    {i < label.length - 1 && <br />}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Items Section */}
                        <div className="mb-8">
                            <h2 className="text-[30px] font-semibold pb-4">Items:</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/images/products/image 3.jpg"
                                        alt="SuperSkin - Ladies Blonde Wig"
                                        width={80}
                                        height={80}
                                        className="rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-normal text-lg text-black">SuperSkin - Ladies Blonde Wig</h3>
                                        <p className="text-sm font-normal text-[#666666]">
                                            Women&apos;s Thin Skin Hair System with 110% density and knotless V-shaped hair at front
                                        </p>
                                    </div>
                                    <div className="text-right">    
                                        <p className="font-semibold">$329.00</p>
                                        <p className="text-sm text-gray-500">QTY: 1</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/images/products/image 4.jpg"
                                        alt="Champion - Men's Grey Wig"
                                        width={80}
                                        height={80}
                                        className="rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold">Champion - Men&apos;s Grey Wig</h3>
                                        <p className="text-sm text-gray-500">
                                            Men&apos;s Thin Skin Hair System with 110% density and knotless V-shaped hair at front
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold">$149.00</p>
                                        <p className="text-sm text-gray-500">QTY: 2</p>
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
                        <div className="flex gap-4 mt-8">
                            <Button className="bg-orange-500 hover:bg-orange-600">
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

