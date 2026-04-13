import React from 'react'
import { Link } from 'react-router-dom'

export default function AuditLink({ to = '/audits', label = 'View our audits', className = '' }) {
  return (
    <Link to={to} className={className}>
      {label}
    </Link>
  )
}
