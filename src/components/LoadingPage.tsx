import { useEffect, useState } from "react"

export default function LoadingPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const getCircleColor = (progress: number) => {
    if (progress < 20) return "#e0ecf2"
    if (progress < 40) return "#a5c0df"
    if (progress < 60) return "#7a9ec7"
    if (progress < 80) return "#3e6589"
    return "#052542"
  }

  const getStrokeColor = (progress: number) => {
    if (progress < 20) return "#a5c0df"
    if (progress < 40) return "#7a9ec7"
    if (progress < 60) return "#3e6589"
    if (progress < 80) return "#052542"
    return "#e0ecf2"
  }

  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="fixed inset-0 bg-[#e0ecf2] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <svg
            className="w-32 h-32 transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#f0f4f7"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke={getStrokeColor(progress)}
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-100 ease-out"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              fill={getCircleColor(progress)}
              className="transition-all duration-300 ease-out"
            />
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-800">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Loading Portfolio
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Preparing cybersecurity insights and project showcases...
          </p>
          
          <div className="flex justify-center space-x-2 mt-6">
            <div 
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ 
                backgroundColor: getStrokeColor(progress),
                animationDelay: "0ms",
                animationDuration: "1000ms"
              }}
            />
            <div 
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ 
                backgroundColor: getStrokeColor(progress),
                animationDelay: "200ms",
                animationDuration: "1000ms"
              }}
            />
            <div 
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ 
                backgroundColor: getStrokeColor(progress),
                animationDelay: "400ms",
                animationDuration: "1000ms"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
