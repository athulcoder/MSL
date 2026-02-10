
import { NextResponse } from "next/server";

export default function middleware(req){

    const url = req.nextUrl;

    const bypassKey = url.searchParams.get('bypassKey');
    console.log(bypassKey);

    if(!bypassKey){
        return NextResponse.redirect(new URL("/",req.url))
    }

    

   const isAdminPage = url.pathname.startsWith('/admin');
   const isSaveApi = url.pathname.startsWith('/api/save');

   


}

export const config = {
  matcher: ["/admin/:path*"], // VERY IMPORTANT
};
