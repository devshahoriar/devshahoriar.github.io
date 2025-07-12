import { ModeToggle } from "@/components/pages/homePageClient"
import { Button } from "@/components/shadcn/button"
import { Home } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"
import { Toaster } from "@/components/shadcn/sonner"

const layout = ({children}:{children:ReactNode}) => {
  return (
    <>
    <div className="flex justify-between container items-center print:hidden my-5">
        <div className="flex items-center md:flex-col">
          <Link href='/'><h1 className="md:text-center text-xl md:text-2xl font-semibold">
            @devshahoriar
          </h1></Link>
        </div>
        <div className="flex items-center justify-end gap-3">
          <ModeToggle />
          <Button asChild variant="outline" size="sm">
            <Link href="/" className="flex items-center gap-1">
              <Home size={19} />
              <span className="hidden md:block">Home</span>
            </Link>
          </Button>
        </div>
      </div>
    {children}
    <Toaster />
    </>
  )
}
export default layout