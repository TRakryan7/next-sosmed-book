import { AuthProvider } from "@/components/contextAuth/AuthContext";
import React, { ReactNode } from "react";

export default function LayoutHome  ({
    children,
}: {
   children:React.ReactNode
}) {
    return ( 
        <AuthProvider>
            <section>
                {children}
            </section>
        </AuthProvider>
     );
}
 
// export default LayoutHome;