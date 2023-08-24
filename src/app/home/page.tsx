'use client'
import { UserDataContext } from "@/components/contextAuth/userContext"; 
import { AuthProvider } from "@/components/contextAuth/AuthContext";
import Header from "@/components/header/Header";
import Story from "@/components/story/Story";
import Navabar from "@/components/navbar/Navbar";
const Home = () => {

    

    // console.log(userData)
    return (
        <div className=" ">
                <Story />
                <section>
                    Hello World
                </section>
                <Navabar />
        </div>
     );
}
 
export default Home;