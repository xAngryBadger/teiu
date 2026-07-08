import type { ReactNode } from 'react'

interface ImagePlaceholderProps {
  type: 'interior' | 'dish' | 'chef' | 'event'
  label?: string
  className?: string
}

const icons: Record<ImagePlaceholderProps['type'], ReactNode> = {
  interior: (
    <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1" opacity={0.2}>
      <rect x="6" y="10" width="36" height="28" rx="2" />
      <path d="M6 18h36M18 10v28M30 10v28" />
      <circle cx="24" cy="24" r="4" />
    </svg>
  ),
  dish: (
    <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1" opacity={0.2}>
      <circle cx="24" cy="20" r="12" />
      <path d="M24 32v12M16 44h16" />
    </svg>
  ),
  chef: (
    <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1" opacity={0.2}>
      <circle cx="24" cy="16" r="8" />
      <path d="M8 44c0-8.84 7.16-16 16-16s16 7.16 16 16" />
      <path d="M18 8l-4-4M30 8l4-4M24 4V2" />
    </svg>
  ),
  event: (
    <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1" opacity={0.2}>
      <rect x="6" y="8" width="36" height="32" rx="2" />
      <path d="M6 16h36M16 8v6M32 8v6" />
      <circle cx="24" cy="26" r="4" />
      <path d="M18 32c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    </svg>
  ),
}

const labels: Record<ImagePlaceholderProps['type'], string> = {
  interior: 'Interior',
  dish: 'Prato',
  chef: 'Chef',
  event: 'Evento',
}

export default function ImagePlaceholder({ type, label, className = '' }: ImagePlaceholderProps) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
      style={{
        backgroundColor: '#1a1a1a',
        backgroundImage: 'radial-gradient(circle at 30% 50%, #c8a96e11 0%, transparent 60%)',
      }}
    >
      <div className="text-center p-4">
        {icons[type]}
        <p className="text-label tracking-label uppercase mt-2" style={{ color: '#3a3a3a' }}>
          {label || labels[type]}
        </p>
      </div>
    </div>
  )
}
