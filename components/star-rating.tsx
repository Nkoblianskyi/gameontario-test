import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  size?: "sm" | "md" | "lg"
}

export function StarRating({ rating, size = "md" }: StarRatingProps) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  }

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClasses[size]} ${
            star <= Math.round(rating / 2) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}
