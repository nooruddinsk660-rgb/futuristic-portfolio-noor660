import { useState } from 'react'
import { motion } from 'framer-motion'

function LazyImage({ src, alt, className }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative">
      {/* Placeholder skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse rounded-lg"></div>
      )}
      
      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}