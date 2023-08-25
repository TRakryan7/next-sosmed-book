'use client'
import { UserDataContext } from "@/components/contextAuth/userContext"; 
import { AuthProvider } from "@/components/contextAuth/AuthContext";
import Header from "@/components/header/Header";
import Story from "@/components/story/Story";
import CardContent from "@/components/CardContent/CardContent";
const Home = () => {

    

    // console.log(userData)
    return (
        <>
                <Story />
                <CardContent/>
                <CardContent/>
        </>
     );
}
 
export default Home;