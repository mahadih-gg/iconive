"use client"

interface ProgressCircleProps {
  percentage?: number
  label?: string
  size?: number
  strokeWidth?: number
  color?: string
}

export default function ProgressCircle({
  percentage = 60,
  label = "Completed",
  size = 120,
  strokeWidth = 14,
  color = "#FFB800",
}: ProgressCircleProps) {
  // Calculate circle properties
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-sm md:text-base font-medium text-gray-900">{label}</span>
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#F3F4F6" strokeWidth={strokeWidth} />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-in-out"
          />
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg md:text-2xl font-semibold text-gray-900">{percentage}%</span>
        </div>
      </div>
    </div>
  )
}

