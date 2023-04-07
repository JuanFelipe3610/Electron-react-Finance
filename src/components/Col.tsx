import React from 'react'

export const Col: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="tl-col">
      {children}
    </div>
  )
}
