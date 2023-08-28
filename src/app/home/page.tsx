import { UserDataContext } from "@/components/contextAuth/userContext"; 
import { AuthProvider } from "@/components/contextAuth/AuthContext";
import Header from "@/components/header/Header";
import Story from "@/components/story/Story";
import CardContent from "@/components/CardContent/CardContent";
import { dataContain } from "@/testingData";

const Home = () => {

    const data = dataContain

    //  console.log(data)
    return (
        <>
            <Story />
            {dataContain.map((item: any, index: number) => {
                return (
                <div key={index} className="px-2">
                        <CardContent data={ item } />
                </div>   
                )
            })}
        </>
     );
}
 
export default Home;