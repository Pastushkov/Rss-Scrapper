import React from 'react'

export interface ButtonProps {
    type?: 'submit' | 'button' 
    onClick?: (e: any) => void
    loading?: boolean
    children: React.ReactNode
    disabled?: boolean
}

