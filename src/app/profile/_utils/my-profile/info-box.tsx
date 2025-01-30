"use client"

import { EditIcon } from "@/components/Icons";

export default function InfoBox({title, value, onEdit}: {title: string, value: string, onEdit?: () => void}) {
    return (
        <div>
            <div className="flex items-center gap-2">
                <h3 className="text-base text-[#666666] font-normal">{title}</h3>
                {onEdit && (
                    <button className="text-blue-600 border-l border-[#C1C1C1] pl-2" onClick={onEdit}>
                        <EditIcon className="w-4 h-4" />
                    </button>
                )}
            </div>
            <p className="text-lg font-normal text-[#1A1A1A]">{value}</p>
        </div>
    )
}