'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
export  function Logo() {
  const router = useRouter()
  return (
    <div onClick={()=> router.push('/')} className="min-h-20 h-20 flex items-center px-6 border-b gap-2">
      <Image src='/logo.svg' alt="Logo" width={30} height={30} priority />
      <h1 className="font-bold text-xl">Pori  IT</h1>
    </div>
  )
}
