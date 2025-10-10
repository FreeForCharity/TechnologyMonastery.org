import React from 'react'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="card">
      <div className="text-4xl mb-4" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
