'use client'
import { AuthProvider } from "@/components/contextAuth/AuthContext";
import React, { ReactNode } from "react";
import Header from "@/components/header/Header";
import Navabar from "@/components/navbar/Navbar";
export default function LayoutHome  ({
    children,
}: {
   children:React.ReactNode
}) {
    return ( 
        <AuthProvider>
            <Header />
            <main className="flex min-h-screen flex-col items-center  py-24">
                {children}
            </main>
            <Navabar />
        </AuthProvider>
     );
}
 
// export default LayoutHome;