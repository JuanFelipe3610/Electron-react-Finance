import React from 'react'

export const Row: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="tl-row">
      {children}
    </div>
  )
}
