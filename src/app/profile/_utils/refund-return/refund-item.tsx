'use client'
import { Card } from "@/components/ui/card"
import { Copy, Truck } from "lucide-react"
interface InvoiceStatusProps {
    invoiceId?: string
    status?: string
    cancellationDate?: string
    estimatedRefundDate?: string
    daysRemaining?: number
}
import { Raleway } from "next/font/google";

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})



export default function InvoiceStatus({
    invoiceId = "33048687443",
    status = "Processing",
    cancellationDate = "30 September, 2023",
    estimatedRefundDate = "15 OCTOBER, 2023",
    daysRemaining = 15,
}: InvoiceStatusProps) {
    return (
        <Card className="p-4 md:p-6 bg-white rounded-2xl shadow-sm">
            <div className=" md:hidden block pb-4">
                <p className="text-sm font-medium text-gray-400">Status:</p>
                <div className="flex items-center gap-2">

                    <p className={`${raleway.className} text-primary text-[24px] font-semibold`}>{status} </p>
                    <span className="text-[#999999] font-[400] text-lg">{`(${daysRemaining} Days)`}</span>
                </div>
            </div>
            <div className="flex items-start md:items-center md:flex-row flex-col flex-wrap md:gap-2 gap-1">
                <p className="text-[14px] md:text-[28px] md:text-black text-gray-500 font-semibold">Invoice ID:</p>
                <div className="flex items-center gap-2">
                    <h2 className="text-[14px] md:text-[28px] font-semibold">{invoiceId}</h2>
                    <button className="text-gray-400">
                        <Copy className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                </div>
            </div>
            <div className="pt-3 md:pt-5 flex items-center justify-between">
                <div className="flex md:flex-row flex-col md:items-end gap-5 ">
                    <div className="space-y-3 border-none md:border-r border-gray-200 pr-5">
                        <p className="text-sm font-medium md:block hidden"><span className="text-gray-400">Status:</span> <span>{status}</span></p>
                        <div>
                            <p className="text-sm font-normal text-gray-400">Cancellation Date:</p>
                            <p className="text-base md:text-lg font-normal">{cancellationDate}</p>

                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-normal text-gray-400">Estimated Refund Date:</p>
                        <p className="flex items-center gap-2 text-primary font-[600] text-base md:text-lg">
                            <span>{estimatedRefundDate}</span>
                            <Truck className="w-6 h-6" />
                        </p>
                    </div>
                </div>
                <div className="text-right md:block hidden">
                    <p className="text-primary text-[75px] font-semibold leading-[75px]">{daysRemaining}</p>
                    <p className="text-base font-[400] text-[#1A1A1A]">Days Remaining</p>
                </div>


            </div>
        </Card>
    )
}


