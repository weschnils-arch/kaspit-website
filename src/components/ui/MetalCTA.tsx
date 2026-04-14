import { Link } from 'react-router-dom'
import LiquidMetalButton from './LiquidMetalButton'

interface MetalCTAProps {
  to: string
  label: string
  icon?: React.ReactNode
  className?: string
  width?: number
  height?: number
  variant?: 'primary' | 'outline'
  fullWidth?: boolean
}

export default function MetalCTA({
  to,
  label,
  className = '',
  variant = 'primary',
  width,
  height,
}: MetalCTAProps) {
  const sizeStyle: React.CSSProperties = {}
  if (width !== undefined) {
    sizeStyle.width = `min(${width}px, 100%)`
    sizeStyle.maxWidth = `${width}px`
  }
  if (height !== undefined) {
    sizeStyle.height = `${height}px`
    sizeStyle.minHeight = `${height}px`
    sizeStyle.maxHeight = `${height}px`
  }

  if (variant === 'outline') {
    return (
      <Link to={to} className={`btn-outline ${className}`} style={sizeStyle}>
        {label}
      </Link>
    )
  }

  // Primary = liquid metal animated ring (same look across themes)
  return (
    <Link to={to} className={`inline-block ${className}`} style={sizeStyle}>
      <LiquidMetalButton label={label} width={width} height={height} />
    </Link>
  )
}
