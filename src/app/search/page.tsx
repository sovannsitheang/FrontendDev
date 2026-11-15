"use client"

import { usePathname, useRouter , useSearchParams } from "next/navigation"

export default function Searchpage() {

    // useRouter (hard navigation)
    const router = useRouter ();
    const pathName = usePathname();
    // useSearchParams
    const searchParams = useSearchParams();
    
  return (
    // usePathname - catch route segment after APP_URL
    // const {pathName} = usePathname();

    <div className=" flex gap-2 items-center">
       PathName: {pathName}
       {/* button navigation using router */}
       <button className="border p-4 rounded-4xl cursor-pointer"
       onClick={() => router.push('/')}>HomePage</button>

       {/* button forwad using router */}
       <button className="border p-4 rounded-4xl cursor-pointer"
       onClick={() => router.forward()}>Next Page</button>

       {/* button backward using router */}
       <button className="border p-4 rounded-4xl cursor-pointer"
       onClick={() => router.back()}>Back from previous page</button>

       {/* searchparams */}
       Search Params : {searchParams.get('category')}

    </div>
  )
}
