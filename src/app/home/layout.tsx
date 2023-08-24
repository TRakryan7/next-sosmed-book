import { AuthProvider } from "@/components/contextAuth/AuthContext";
import React, { ReactNode } from "react";
import Header from "@/components/header/Header";
export default function LayoutHome  ({
    children,
}: {
   children:React.ReactNode
}) {
    return ( 
        <AuthProvider>
            <Header />
            <section className="absolute inset-0">
                {children}
            </section>
        </AuthProvider>
     );
}
 
// export default LayoutHome;