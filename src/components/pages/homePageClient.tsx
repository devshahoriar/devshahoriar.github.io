'use client'

import { Printer } from 'lucide-react'
import { Button } from '../shadcn/button'

export const PritButton = () => {
  const _hendelPrint = () => {
    window.print()
  }
  return (
    <Button className="flex gap-1 items-center" onClick={_hendelPrint}>
      Print
      <Printer size={16} />
    </Button>
  )
}
